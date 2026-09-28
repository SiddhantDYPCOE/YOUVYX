import { Router } from "express";

import {
  createContent,
  getContentById,
  getMyContents,
  getContentsForMyGenres,
  updateContent,
  deleteContent,
} from "./content.controller.js";

import {
  createContentSchema,
  updateContentSchema,
  contentIdSchema,
} from "./content.validator.js";

import { validate } from "../../middlewares/validate.middleware.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const router = Router();

// Productive feed
// Only authenticated users can access content.
// Backend uses the user's selected genres.
router.get(
  "/",
  authenticate,
  getContentsForMyGenres
);

// Creator's own content
router.get(
  "/me",
  authenticate,
  getMyContents
);

// Creator creates content
router.post(
  "/",
  authenticate,
  validate(createContentSchema),
  createContent
);

// Single content
router.get(
  "/:contentId",
  authenticate,
  validate(contentIdSchema, "params"),
  getContentById
);

// Update own content
router.patch(
  "/:contentId",
  authenticate,
  validate(contentIdSchema, "params"),
  validate(updateContentSchema),
  updateContent
);

// Delete own content
router.delete(
  "/:contentId",
  authenticate,
  validate(contentIdSchema, "params"),
  deleteContent
);

export default router;