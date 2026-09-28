import prisma from "../../db.js";

export async function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function findUserByUsername(username) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
}

export async function findUserByEmailOrUsername(email, username) {
  return prisma.user.findFirst({
    where: {
      OR: [
        { email },
        { username },
      ],
    },
  });
}

export async function createUser({
  name,
  username,
  email,
  passwordHash,
  accountType,
}) {
  return prisma.user.create({
    data: {
      name,
      username,
      email,
      passwordHash,
      accountType,
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      accountType: true,
      bio: true,
      profileImage: true,
      streak: true,
      lastActiveAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function findUserById(userId) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      accountType: true,
      bio: true,
      profileImage: true,
      streak: true,
      lastActiveAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}