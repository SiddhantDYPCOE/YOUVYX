import prisma from "../..//db.js";

export const createPost = async (data) => {
  return prisma.post.create({
    data,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },
      tags: {
        include: {
          taggedUser: {
            select: {
              id: true,
              name: true,
              username: true,
              profileImage: true,
            },
          },
        },
      },
      challenge: true,
    },
  });
};

export const findPostById = async (postId) => {
  return prisma.post.findFirst({
    where: {
      id: postId,
      deletedAt: null,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },
      tags: {
        where: {
          status: "ACCEPTED",
        },
        include: {
          taggedUser: {
            select: {
              id: true,
              name: true,
              username: true,
              profileImage: true,
            },
          },
        },
      },
      challenge: true,
    },
  });
};

export const findPostsByAuthorId = async (userId) => {
  return prisma.post.findMany({
    where: {
      authorId: userId,
      deletedAt: null,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },
      tags: {
        where: {
          status: "ACCEPTED",
        },
        include: {
          taggedUser: {
            select: {
              id: true,
              name: true,
              username: true,
              profileImage: true,
            },
          },
        },
      },
      challenge: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const findTaggedPostsByUserId = async (userId) => {
  return prisma.post.findMany({
    where: {
      deletedAt: null,
      tags: {
        some: {
          taggedUserId: userId,
          status: "ACCEPTED",
        },
      },
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },
      tags: {
        where: {
          status: "ACCEPTED",
        },
        include: {
          taggedUser: {
            select: {
              id: true,
              name: true,
              username: true,
              profileImage: true,
            },
          },
        },
      },
      challenge: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const findPostTag = async (postId, taggedUserId) => {
  return prisma.postTag.findUnique({
    where: {
      postId_taggedUserId: {
        postId,
        taggedUserId,
      },
    },
  });
};

export const createPostTag = async (data) => {
  return prisma.postTag.create({
    data,
  });
};

export const updatePostTagStatus = async (tagId, status) => {
  return prisma.postTag.update({
    where: {
      id: tagId,
    },
    data: {
      status,
    },
  });
};

export const findPostTagById = async (tagId) => {
  return prisma.postTag.findUnique({
    where: {
      id: tagId,
    },
    include: {
      post: true,
    },
  });
};

export const findPendingPostTagsByUserId = async (userId) => {
  return prisma.postTag.findMany({
    where: {
      taggedUserId: userId,
      status: "PENDING",
    },
    include: {
      post: {
        include: {
          author: {
            select: {
              id: true,
              name: true,
              username: true,
              profileImage: true,
            },
          },
        },
      },
      taggedBy: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const softDeletePost = async (postId) => {
  return prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
