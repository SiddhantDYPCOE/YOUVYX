import prisma from "../../db.js";

export async function createShare(userId, contentId) {
  return prisma.share.create({
    data: {
      userId,
      contentId,
    },
  });
}

export async function countShares(contentId) {
  return prisma.share.count({
    where: {
      contentId,
    },
  });
}