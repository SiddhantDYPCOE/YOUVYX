import prisma from "../../db.js";

export async function findLike(userId, contentId) {
  return prisma.like.findUnique({
    where: {
      userId_contentId: {
        userId,
        contentId,
      },
    },
  });
}

export async function createLike(userId, contentId) {
  return prisma.like.create({
    data: {
      userId,
      contentId,
    },
  });
}

export async function deleteLike(likeId) {
  return prisma.like.delete({
    where: {
      id: likeId,
    },
  });
}

export async function countLikes(contentId) {
  return prisma.like.count({
    where: {
      contentId,
    },
  });
}