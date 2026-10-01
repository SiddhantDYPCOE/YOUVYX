import * as creatorRepository from "./creator.repository.js";

export const createCreatorProfile = async (userId, data) => {
  return creatorRepository.createCreatorProfileTransaction(
    userId,
    data
  );
};

export const getMyCreatorProfile = async (userId) => {
  const creator =
    await creatorRepository.getCreatorWithUser(userId);

  if (!creator) {
    throw new Error("Creator profile not found");
  }

  return creator;
};

export const updateCreatorProfile = async (userId, data) => {
  const creator =
    await creatorRepository.findCreatorByUserId(userId);

  if (!creator) {
    throw new Error("Creator profile not found");
  }

  const updateData = {};

  if (data.displayName !== undefined) {
    updateData.displayName = data.displayName;
  }

  if (data.description !== undefined) {
    updateData.description = data.description;
  }

  if (data.category !== undefined) {
    updateData.category = data.category;
  }

  if (data.coverImage !== undefined) {
    updateData.coverImage = data.coverImage;
  }

  if (data.website !== undefined) {
    updateData.website = data.website;
  }

  return creatorRepository.updateCreator(
    userId,
    updateData
  );
};
export const getCreatorProfileByUserId = async (userId) => {
  const creator =
    await creatorRepository.getCreatorByUserId(userId);

  if (!creator) {
    throw new Error("Creator profile not found");
  }

  return {
    id: creator.id,
    userId: creator.userId,

    displayName: creator.displayName,
    description: creator.description,
    category: creator.category,
    coverImage: creator.coverImage,
    website: creator.website,

    isVerified: creator.isVerified,

    followersCount:
      creator.user._count.receivedRelationships,

    followingCount:
      creator.user._count.sentRelationships,

    user: creator.user,
  };
};

export const searchCreatorsAndUsers = async (query) => {
  const users =
    await creatorRepository.searchCreatorsAndUsers(query);

  const creators = [];
  const normalUsers = [];

  users.forEach((user) => {
    const result = {
      id: user.id,
      name: user.name,
      username: user.username,
      accountType: user.accountType,
      bio: user.bio,
      profileImage: user.profileImage,
    };

    if (user.accountType === "CREATOR" && user.creator) {
      creators.push({
        ...result,
        creator: user.creator,
      });
    } else {
      normalUsers.push(result);
    }
  });

  return {
    creators,
    users: normalUsers,
  };
};

