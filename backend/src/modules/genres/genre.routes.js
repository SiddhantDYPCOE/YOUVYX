import { Router } from "express";

import {
  getGenres,
  getMyGenres,
  addGenre,
  replaceGenres,
  removeGenre,
  createGenreHandler,
} from "./genre.controller.js";

import {
    createGenreSchema,
  deleteGenreIdSchema,
  genreIdSchema,
  replaceGenresSchema,
} from "./genre.validator.js";

import { validate } from "../../middlewares/validate.middleware.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { requireAdmin } from "../../middlewares/admin.middleware.js";

const router = Router();

// Public — available genres
router.get(
  "/",
  getGenres
);

// Authenticated — current user's selected genres
router.get(
  "/me",
  authenticate,
  getMyGenres
);

router.post(
  "/me",
  authenticate,
  validate(genreIdSchema),
  addGenre
);

router.put(
  "/me",
  authenticate,
  validate(replaceGenresSchema),
  replaceGenres
);

router.delete(
  "/me/:genreId",
  authenticate,
  validate(deleteGenreIdSchema, "params"),
  removeGenre
);


//Admin
router.post(
  "/admin/create",
  authenticate,
  requireAdmin,
  validate(createGenreSchema),
  createGenreHandler
);

export default router;