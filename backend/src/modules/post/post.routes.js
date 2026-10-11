
import express from "express";

import {
  createPost,
  getPostById,
  getUserPosts,
  getTaggedPosts,
  getPendingPostTags,
  acceptPostTag,
  rejectPostTag,
  deletePost,
} from "./post.controller.js";

import {
  createPostValidator,
} from "./post.validator.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { parsePostFormData, uploadPostImage } from "../../middlewares/upload.middleware.js";

const router = express.Router();

// --------------------------------
// Create Post
// --------------------------------

router.post(
  "/",
  authenticate,
  uploadPostImage,     
  parsePostFormData,   
  validate(createPostValidator),
  createPost
);

// --------------------------------
// Specific routes FIRST
// --------------------------------

router.get(
  "/user/:userId",
  getUserPosts
);

router.get(
  "/tagged/:userId",
  authenticate,
  getTaggedPosts
);

router.get(
  "/tags/pending",
  authenticate,
  getPendingPostTags
);

router.patch(
  "/tags/:tagId/accept",
  authenticate,
  acceptPostTag
);

router.patch(
  "/tags/:tagId/reject",
  authenticate,
  rejectPostTag
);

// --------------------------------
// Generic post ID route
// --------------------------------

router.get(
  "/:postId",
  authenticate,
  getPostById
);

// --------------------------------
// Delete Post
// --------------------------------

router.delete(
  "/:postId",
  authenticate,
  deletePost
);

export default router;

