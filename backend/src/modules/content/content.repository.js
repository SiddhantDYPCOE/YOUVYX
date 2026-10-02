import prisma from "../../db.js";

export async function createContent({
  title,
  description,
  body,
  type,
  externalUrl,
  mediaUrl,
  genreId,
  creatorId,
}) {
  return prisma.content.create({
    data: {
      title,
      description,
      body,
      type,
      externalUrl,
      mediaUrl,
      genreId,
      creatorId,
    },
    include: {
      genre: true,
      creator: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          profileImage: true,
        },
      },
    },
  });
}


export async function findContentById(contentId,userId) {
  return prisma.content.findFirst({
    where: {
      id: contentId,
      deletedAt: null,
    },

    include: {
      genre: true,

      creator: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          profileImage: true,
          bio: true,
        },
      },

      article: true,

      image: true,

      video: true,

      challenge: true,
      likes: {
        where: {
          userId,
        },
        select: {
          id: true,
        },
      },

      _count: {
        select: {
          likes: true,
          shares: true,
        },
      },
    },
  });
}


export async function findContentsByCreator(creatorId) {
  return prisma.content.findMany({
    where: {
      creatorId,
      deletedAt: null,
    },
    include: {
      genre: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function findContentsByGenre(genreId) {
  return prisma.content.findMany({
    where: {
      genreId,
      deletedAt: null,
    },
    include: {
      genre: true,
      creator: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function findContentsByGenres(genreIds, userId) {
  return prisma.content.findMany({
    where: {
      genreId: {
        in: genreIds,
      },
      deletedAt: null,
    },

    include: {
      genre: true,

      creator: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          profileImage: true,
        },
      },

      likes: {
        where: {
          userId,
        },
        select: {
          id: true,
        },
      },

      _count: {
        select: {
          likes: true,
          shares: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}
export async function updateContent(
  contentId,
  data
) {
  return prisma.content.update({
    where: {
      id: contentId,
    },
    data,
    include: {
      genre: true,
      creator: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          profileImage: true,
        },
      },
    },
  });
}

export async function softDeleteContent(contentId) {
  return prisma.content.update({
    where: {
      id: contentId,
    },
    data: {
      deletedAt: new Date(),
    },
  });
}

export async function findContentWithEngagement(
  contentId,
  userId
) {
  return prisma.content.findFirst({
    where: {
      id: contentId,
      deletedAt: null,
    },
    include: {
      genre: true,

      creator: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          profileImage: true,
          bio: true,
        },
      },

      challenge: true,

      likes: {
        where: {
          userId,
        },
        select: {
          id: true,
        },
      },

      _count: {
        select: {
          likes: true,
          shares: true,
        },
      },
    },
  });
}

export async function findContentsWithEngagement(userId) {
  return prisma.content.findMany({
    where: {
      deletedAt: null,
    },

    include: {
      genre: true,

      creator: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          profileImage: true,
        },
      },

      likes: {
        where: {
          userId,
        },
        select: {
          id: true,
        },
      },

      _count: {
        select: {
          likes: true,
          shares: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}


export const createArticle = async ({
  creatorId,
  title,
  description,
  genreId,
  subject,
  body,
  pdfUrl,
  pdfFileName,
}) => {
  return prisma.$transaction(
    async (tx) => {
      const content = await tx.content.create({
        data: {
          title,
          description,
          type: "ARTICLE",
          genreId,
          creatorId,

          article: {
            create: {
              subject,
              body: body || null,
              pdfUrl: pdfUrl || null,
              pdfFileName: pdfFileName || null,
            },
          },
        },

        include: {
          genre: true,
          article: true,
        },
      });

      return content;
    },
    {
      timeout: 10000,
      maxWait: 10000,
    }
  );
};