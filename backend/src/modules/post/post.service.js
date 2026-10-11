
import prisma from "../../db.js";
import { uploadToCloudinary } from "../../utils/cloudinaryUpload.js";
import * as postRepository from "./post.repository.js";
// Instagram-style aspect ratios
const ASPECT_RATIOS = {
  "1:1": 1,
  "4:5": 0.8,
  "1.91:1": 1.91,
};
 
export const createPostService = async ({
  userId,
  content,
  file,
  aspectRatio,
  challengeId,
  taggedUserIds = [],
}) => {
  // --------------------------------
  // 0. Validate image (required)
  // --------------------------------
 
  if (!file?.buffer) {
    throw new Error("An image is required to create a post");
  }
 
  const ratioValue = ASPECT_RATIOS[aspectRatio];
 
  if (!ratioValue) {
    throw new Error("Invalid aspect ratio. Use 1:1, 4:5 or 1.91:1");
  }
 
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
      where: { id: { in: uniqueTaggedUserIds } },
      select: { id: true },
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
      where: { id: challengeId },
      select: { id: true, userId: true, status: true },
    });
 
    if (!userChallenge) {
      throw new Error("Challenge participation not found");
    }
 
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
  // 4. Upload image (after all validation, so we never
  //    upload for a request that is going to fail)
  // --------------------------------
 
  let uploaded;
 
  try {
    uploaded = await uploadToCloudinary({
      buffer: file.buffer,
      folder: "posts",
      resourceType: "image",
      // Crops to the chosen Instagram ratio and caps width at 1080px
      transformation: [
        {
          aspect_ratio: ratioValue,
          width: 1080,
          crop: "fill",
          gravity: "auto",
        },
      ],
    });
 
    // --------------------------------
    // 5. Create Post + Tags
    // --------------------------------
 
    const post = await prisma.post.create({
      data: {
        content,
        mediaUrl: uploaded.secure_url,
        mediaPublicId: uploaded.public_id, 
        aspectRatio,                       
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
    // 6. Return complete post
    // --------------------------------
 
    return postRepository.findPostById(post.id);
  } catch (error) {
    // Don't leave an orphaned image in Cloudinary if the DB write failed
    if (uploaded?.public_id) {
      await cloudinary.uploader.destroy(uploaded.public_id).catch(() => {});
    }
 
    throw error;
  }
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