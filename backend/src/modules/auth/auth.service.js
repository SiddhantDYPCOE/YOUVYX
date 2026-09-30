
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  findUserByEmail,
  findUserByEmailOrUsername,
  createUser,
  findUserById,
  updateUserAccountType,
} from "./auth.repository.js";

const SALT_ROUNDS = 12;

export async function registerUser(data) {
  const {
    name,
    username,
    email,
    password,
    accountType = "NORMAL",
  } = data;

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedUsername = username.trim().toLowerCase();

  const existingUser = await findUserByEmailOrUsername(
    normalizedEmail,
    normalizedUsername
  );

  if (existingUser) {
    if (existingUser.email === normalizedEmail) {
      const error = new Error("Email is already registered");
      error.statusCode = 409;
      throw error;
    }

    if (existingUser.username === normalizedUsername) {
      const error = new Error("Username is already taken");
      error.statusCode = 409;
      throw error;
    }
  }

  const passwordHash = await bcrypt.hash(
    password,
    SALT_ROUNDS
  );

  const user = await createUser({
    name: name.trim(),
    username: normalizedUsername,
    email: normalizedEmail,
    passwordHash,
    accountType,
  });

  return user;
}

export async function loginUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase();

  const user = await findUserByEmail(normalizedEmail);

  if (!user) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!passwordMatch) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign(
    {
      userId: user.id,
      accountType: user.accountType,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    }
  );

  const safeUser = {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    accountType: user.accountType,
    bio: user.bio,
    profileImage: user.profileImage,
    streak: user.streak,
    lastActiveAt: user.lastActiveAt,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  return {
    user: safeUser,
    token,
  };
}

export async function getCurrentUser(userId) {
  const user = await findUserById(userId);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return user;
}

export async function becomeCreator(userId) {
  const user = await findUserById(userId);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  if (user.accountType === "CREATOR") {
    const error = new Error("User is already a creator");
    error.statusCode = 409;
    throw error;
  }

  if (user.accountType === "ADMIN") {
    const error = new Error("Admin accounts cannot be converted to creator accounts");
    error.statusCode = 400;
    throw error;
  }

  const updatedUser = await updateUserAccountType(
    userId,
    "CREATOR"
  );

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign(
    {
      userId: updatedUser.id,
      accountType: updatedUser.accountType,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    }
  );

  return {
    user: updatedUser,
    token,
  };
}

