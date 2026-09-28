import { z } from "zod";

const deleteGenreIdSchema = z.object({
  genreId: z
    .string()
    .min(1, "Genre ID is required"),
});

const genreIdSchema = z.object({
  genreId: z
    .array(
      z.string().min(1, "Genre ID cannot be empty")
    )
    .min(1, "Select at least one genre")
    .max(5, "You can select a maximum of 5 genres")
    .refine(
      (ids) => new Set(ids).size === ids.length,
      {
        message: "Duplicate genres are not allowed",
      }
    ),
});

const replaceGenresSchema = z.object({
  genreIds: z
    .array(
      z.string().min(1, "Genre ID cannot be empty")
    )
    .min(1, "Select at least one genre")
    .max(5, "You can select a maximum of 5 genres")
    .refine(
      (ids) => new Set(ids).size === ids.length,
      {
        message: "Duplicate genres are not allowed",
      }
    ),
});

const createGenreSchema = z.object({
  name: z
    .string()
    .min(2, "Genre name must be at least 2 characters")
    .max(50, "Genre name must not exceed 50 characters"),

  slug: z
    .string()
    .min(2, "Genre slug must be at least 2 characters")
    .max(50, "Genre slug must not exceed 50 characters")
    .regex(
      /^[a-z0-9-]+$/,
      "Genre slug can only contain lowercase letters, numbers, and hyphens"
    ),
});

export {
  genreIdSchema,
  replaceGenresSchema,
  createGenreSchema,
  deleteGenreIdSchema
};