import prisma from "../../db.js";

export async function findAllGenres() {
  return prisma.genre.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function findGenreById(genreId) {
  return prisma.genre.findUnique({
    where: {
      id:genreId,
    },
  });
}

export async function findUserGenres(userId) {
  return prisma.userGenre.findMany({
    where: {
      userId,
    },
    include: {
      genre: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function countUserGenres(userId) {
  return prisma.userGenre.count({
    where: {
      userId,
    },
  });
}

export async function findUserGenre(userId, genreId) {
  return prisma.userGenre.findUnique({
    where: {
      userId_genreId: {
        userId,
        genreId,
      },
    },
  });
}

export async function addUserGenre(userId, genreId) {
  return prisma.userGenre.create({
    data: {
      userId,
      genreId,
    },
    include: {
      genre: true,
    },
  });
}

export async function removeUserGenre(userId, genreId) {
  return prisma.userGenre.delete({
    where: {
      userId_genreId: {
        userId,
        genreId,
      },
    },
  });
}

export async function replaceUserGenres(userId, genreIds) {
  return prisma.$transaction(async (tx) => {
    await tx.userGenre.deleteMany({
      where: {
        userId,
      },
    });

    if (genreIds.length === 0) {
      return [];
    }

    await tx.userGenre.createMany({
      data: genreIds.map((genreId) => ({
        userId,
        genreId,
      })),
    });

    return tx.userGenre.findMany({
      where: {
        userId,
      },
      include: {
        genre: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  });
}

export async function createGenre({ name, slug }) {
  return prisma.genre.create({
    data: {
      name,
      slug,
    },
  });
}