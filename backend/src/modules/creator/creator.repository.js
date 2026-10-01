import prisma from "../../db.js";

export const findUserById = async (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const findCreatorByUserId = async (userId) => {
  return prisma.creator.findUnique({
    where: {
      userId,
    },
  });
};


export const getCreatorWithUser = async (userId) => {
  return prisma.creator.findUnique({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          accountType: true,
          bio: true,
          profileImage: true,
        },
      },
    },
  });
};

export const updateCreator = async (userId, data) => {
  return prisma.creator.update({
    where: {
      userId,
    },
    data,
  });
};

export const getCreatorByUserId = async (userId) => {
  return prisma.creator.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          bio: true,
          profileImage: true,

          _count: {
            select: {
              receivedRelationships: {
                where: {
                  status: "ACCEPTED",
                },
              },
              sentRelationships: {
                where: {
                  status: "ACCEPTED",
                },
              },
            },
          },
        },
      },
    },
  });
};

export const updateUserAccountType = async (userId, accountType) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      accountType,
    },
  });
};

export const createCreatorProfileTransaction = async (
  userId,
  data
) => {
  return prisma.$transaction(
    async (tx) => {
      const user = await tx.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const existingCreator =
        await tx.creator.findUnique({
          where: {
            userId,
          },
        });

      if (existingCreator) {
        throw new Error(
          "Creator profile already exists"
        );
      }

      await tx.user.update({
        where: {
          id: userId,
        },
        data: {
          accountType: "CREATOR",
        },
      });

      return tx.creator.create({
        data: {
          userId,
          displayName: data.displayName,
          description: data.description,
          category: data.category,
          coverImage: data.coverImage,
          website: data.website,
        },
      });
    },
    {
      timeout: 10000,
      maxWait: 10000,
    }
  );
};

export const searchCreatorsAndUsers = async (query) => {
  const search = query.trim();

  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          username: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
      username: true,
      accountType: true,
      bio: true,
      profileImage: true,
      creator: {
        select: {
          id: true,
          displayName: true,
          category: true,
          coverImage: true,
          isVerified: true,
        },
      },
    },
    take: 30,
  });

  return users;
};

