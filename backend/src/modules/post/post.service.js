
import prisma from "../../db.js";
import * as postRepository from "./post.repository.js";

export const createPostService = async ({
  userId,
  content,
  mediaUrl,
  challengeId,
  taggedUserIds = [],
}) => {
  // --------------------------------
  // 1. Validate tagged users
  // --------------------------------

  const uniqueTaggedUserIds = [...new Set(taggedUserIds)];

  if (uniqueTaggedUserIds.includes(userId)) {
    throw new Error("You cannot tag yourself in a post");
  }

  // --------------------------------
  // 2. Validate tagged users exist
  // --------------------------------

  if (uniqueTaggedUserIds.length > 0) {
    const users = await prisma.user.findMany({
      where: {
        id: {
          in: uniqueTaggedUserIds,
        },
      },
      select: {
        id: true,
      },
    });

    if (users.length !== uniqueTaggedUserIds.length) {
      throw new Error("One or more tagged users do not exist");
    }
  }

  // --------------------------------
  // 3. Validate challenge
  // --------------------------------

  if (challengeId) {
    const userChallenge = await prisma.userChallenge.findUnique({
      where: {
        id: challengeId,
      },
      select: {
        id: true,
        userId: true,
        status: true,
      },
    });

    if (!userChallenge) {
      throw new Error("Challenge participation not found");
    }

    // The result post must belong to the
    // user who completed the challenge.
    if (userChallenge.userId !== userId) {
      throw new Error(
        "You can only create a result post for your own challenge"
      );
    }

    if (userChallenge.status !== "COMPLETED") {
      throw new Error(
        "Challenge must be completed before creating a result post"
      );
    }
  }

  // --------------------------------
  // 4. Create Post + Tags
  // --------------------------------
const post = await prisma.post.create({
  data: {
    content,
    mediaUrl: mediaUrl || null,
    authorId: userId,
    challengeId: challengeId || null,

    tags: {
      create: uniqueTaggedUserIds.map((taggedUserId) => ({
        taggedUserId,
        taggedById: userId,
        status: "PENDING",
      })),
    },
  },
});
  // --------------------------------
  // 5. Return complete post
  // --------------------------------

  return postRepository.findPostById(post.id);
};

export const getPostByIdService = async (postId) => {
  const post = await postRepository.findPostById(postId);

  if (!post) {
    throw new Error("Post not found");
  }

  return post;
};

export const getUserPostsService = async (userId) => {
  return postRepository.findPostsByAuthorId(userId);
};

export const getTaggedPostsService = async (userId) => {
  return postRepository.findTaggedPostsByUserId(userId);
};

// --------------------------------
// Post Tag Requests
// --------------------------------

export const getPendingPostTagsService = async (userId) => {
  return postRepository.findPendingPostTagsByUserId(userId);
};

export const acceptPostTagService = async ({
  tagId,
  userId,
}) => {
  const tag = await postRepository.findPostTagById(tagId);

  if (!tag) {
    throw new Error("Post tag not found");
  }

  if (tag.taggedUserId !== userId) {
    throw new Error(
      "You are not authorized to accept this tag"
    );
  }

  if (tag.status !== "PENDING") {
    throw new Error("This tag request has already been handled");
  }

  return postRepository.updatePostTagStatus(
    tagId,
    "ACCEPTED"
  );
};

export const rejectPostTagService = async ({
  tagId,
  userId,
}) => {
  const tag = await postRepository.findPostTagById(tagId);

  if (!tag) {
    throw new Error("Post tag not found");
  }

  if (tag.taggedUserId !== userId) {
    throw new Error(
      "You are not authorized to reject this tag"
    );
  }

  if (tag.status !== "PENDING") {
    throw new Error("This tag request has already been handled");
  }

  return postRepository.updatePostTagStatus(
    tagId,
    "REJECTED"
  );
};

// --------------------------------
// Delete Post
// --------------------------------

export const deletePostService = async ({
  postId,
  userId,
}) => {
  const post = await postRepository.findPostById(postId);

  if (!post) {
    throw new Error("Post not found");
  }

  if (post.authorId !== userId) {
    throw new Error(
      "You are not authorized to delete this post"
    );
  }

  return postRepository.softDeletePost(postId);
};