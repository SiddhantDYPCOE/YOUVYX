import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import {
  findUserByEmail,
  findUserByEmailOrUsername,
  createUser,
  findUserById,
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

  // Normalize values
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedUsername = username.trim().toLowerCase();

  // -----------------------------------------
  // CHECK EXISTING USER
  // -----------------------------------------

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

  // -----------------------------------------
  // HASH PASSWORD
  // -----------------------------------------

  const passwordHash = await bcrypt.hash(
    password,
    SALT_ROUNDS
  );

  // -----------------------------------------
  // CREATE USER
  // -----------------------------------------

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
  // -----------------------------------------
  // NORMALIZE EMAIL
  // -----------------------------------------

  const normalizedEmail = email.trim().toLowerCase();

  // -----------------------------------------
  // FIND USER
  // -----------------------------------------

  const user = await findUserByEmail(normalizedEmail);

  // Use the same error for both cases.
  // This prevents revealing whether an email exists.
  if (!user) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  // -----------------------------------------
  // VERIFY PASSWORD
  // -----------------------------------------

  const passwordMatch = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!passwordMatch) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  // -----------------------------------------
  // JWT CONFIGURATION
  // -----------------------------------------

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  // -----------------------------------------
  // CREATE JWT
  // -----------------------------------------

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

  // -----------------------------------------
  // SAFE USER RESPONSE
  // -----------------------------------------

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