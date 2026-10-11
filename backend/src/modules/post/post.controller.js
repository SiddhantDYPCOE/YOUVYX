
import {
  createPostService,
  getPostByIdService,
  getUserPostsService,
  getTaggedPostsService,
  getPendingPostTagsService,
  acceptPostTagService,
  rejectPostTagService,
  deletePostService,
} from "./post.service.js";

// --------------------------------
// Create Post
// --------------------------------
export const createPost = async (req, res, next) => {
  try {
    const post = await createPostService({
      userId: req.user.id, 
      content: req.body.content,
      aspectRatio: req.body.aspectRatio,
      challengeId: req.body.challengeId,
      taggedUserIds: req.body.taggedUserIds,
      file: req.file, 
    });
 
    // keep the same response shape your frontend already reads (data.post)
    res.status(201).json({ success: true, data: { post } });
  } catch (error) {
    next(error);
  }
};

// --------------------------------
// Get Post By ID
// --------------------------------

export const getPostById = async (req, res, next) => {
  try {
    const post = await getPostByIdService(
      req.params.postId
    );

    return res.status(200).json({
      success: true,
      message: "Post retrieved successfully",
      data: {
        post,
      },
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------
// Get User Posts
// --------------------------------

export const getUserPosts = async (req, res, next) => {
  try {
    const posts = await getUserPostsService(
      req.params.userId
    );

    return res.status(200).json({
      success: true,
      message: "User posts retrieved successfully",
      data: {
        posts,
      },
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------
// Get Tagged Posts
// --------------------------------

export const getTaggedPosts = async (req, res, next) => {
  try {
    const posts = await getTaggedPostsService(
      req.params.userId
    );

    return res.status(200).json({
      success: true,
      message: "Tagged posts retrieved successfully",
      data: {
        posts,
      },
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------
// Get Pending Tag Requests
// --------------------------------

export const getPendingPostTags = async (req, res, next) => {
  try {
    const tags = await getPendingPostTagsService(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Pending post tags retrieved successfully",
      data: {
        tags,
      },
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------
// Accept Tag
// --------------------------------

export const acceptPostTag = async (req, res, next) => {
  try {
    const tag = await acceptPostTagService({
      tagId: req.params.tagId,
      userId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: "Post tag accepted successfully",
      data: {
        tag,
      },
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------
// Reject Tag
// --------------------------------

export const rejectPostTag = async (req, res, next) => {
  try {
    const tag = await rejectPostTagService({
      tagId: req.params.tagId,
      userId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: "Post tag rejected successfully",
      data: {
        tag,
      },
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------
// Delete Post
// --------------------------------

export const deletePost = async (req, res, next) => {
  try {
    await deletePostService({
      postId: req.params.postId,
      userId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};