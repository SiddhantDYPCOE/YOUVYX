import prisma from "../../db.js";

/*
|-------------------------------------------------------------------------- 
| User queries
|-------------------------------------------------------------------------- 
*/

export const findUserById = async (userId) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      username: true,
      accountType: true,
      bio: true,
      profileImage: true,
    },
  });
};

/*
|-------------------------------------------------------------------------- 
| Relationship queries
|-------------------------------------------------------------------------- 
*/

export const findRelationship = async (senderId, receiverId) => {
  return prisma.relationship.findUnique({
    where: {
      senderId_receiverId: {
        senderId,
        receiverId,
      },
    },
  });
};

export const findRelationshipBetweenUsers = async (userId1, userId2) => {
  return prisma.relationship.findFirst({
    where: {
      OR: [
        {
          senderId: userId1,
          receiverId: userId2,
        },
        {
          senderId: userId2,
          receiverId: userId1,
        },
      ],
    },
  });
};

export const findRelationshipById = async (relationshipId) => {
  return prisma.relationship.findUnique({
    where: {
      id: relationshipId,
    },
  });
};


export const findRelationshipByPairKey = async (
  pairKey
) => {
  return prisma.relationship.findUnique({
    where: {
      pairKey,
    },
  });
};

export const createRelationship = async ({
  senderId,
  receiverId,
  pairKey,
  status,
  type,
}) => {
  return prisma.relationship.create({
    data: {
      senderId,
      receiverId,
      pairKey,
      status,
      type,
    },

    include: {
      sender: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
          accountType: true,
        },
      },

      receiver: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
          accountType: true,
        },
      },
    },
  });
};





export const updateRelationship = async (relationshipId, data) => {
  return prisma.relationship.update({
    where: {
      id: relationshipId,
    },
    data,
  });
};

export const deleteRelationship = async (relationshipId) => {
  return prisma.relationship.delete({
    where: {
      id: relationshipId,
    },
  });
};

/*
|-------------------------------------------------------------------------- 
| User relationships
|-------------------------------------------------------------------------- 
*/

export const findAcceptedRelationshipsForUser = async (userId) => {
  return prisma.relationship.findMany({
    where: {
      status: "ACCEPTED",
      OR: [
        {
          senderId: userId,
        },
        {
          receiverId: userId,
        },
      ],
    },
    include: {
      sender: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          bio: true,
          profileImage: true,
        },
      },
      receiver: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          bio: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const findReceivedRequests = async (userId) => {
  return prisma.relationship.findMany({
    where: {
      receiverId: userId,
      status: "PENDING",
    },
    include: {
      sender: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          bio: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const findSentRequests = async (userId) => {
  return prisma.relationship.findMany({
    where: {
      senderId: userId,
      status: "PENDING",
    },
    include: {
      receiver: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          bio: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getFollowing = async (userId) => {
  const relationships = await prisma.relationship.findMany({
    where: {
      senderId: userId,
      status: "ACCEPTED",
    },
    include: {
      receiver: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          bio: true,
          profileImage: true,
        },
      },
    },
  });

  return relationships.map((relationship) => ({
    ...relationship.receiver,
    relationshipId: relationship.id,
  }));
};

export const getFollowers = async (userId) => {
  const relationships = await prisma.relationship.findMany({
    where: {
      receiverId: userId,
      status: "ACCEPTED",
    },
    include: {
      sender: {
        select: {
          id: true,
          name: true,
          username: true,
          accountType: true,
          bio: true,
          profileImage: true,
        },
      },
    },
  });

  return relationships.map((relationship) => ({
    ...relationship.sender,
    relationshipId: relationship.id,
  }));
};


export const findRelationshipsBetweenUsers = async (
  userId,
  otherUserId
) => {
  return prisma.relationship.findMany({
    where: {
      OR: [
        {
          senderId: userId,
          receiverId: otherUserId,
        },
        {
          senderId: otherUserId,
          receiverId: userId,
        },
      ],
      type: {
        in: ["FOLLOW", "MUTUAL"],
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
};






