import { z } from "zod";

export const createCreatorSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(2, "Display name must be at least 2 characters")
    .max(100, "Display name must not exceed 100 characters"),

  description: z
    .string()
    .trim()
    .max(500, "Description must not exceed 500 characters")
    .optional(),

  category: z
    .string()
    .trim()
    .max(100, "Category must not exceed 100 characters")
    .optional(),

  coverImage: z
    .string()
    .url("Cover image must be a valid URL")
    .optional(),

  website: z
    .string()
    .url("Website must be a valid URL")
    .optional(),
});

export const updateCreatorSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(2, "Display name must be at least 2 characters")
    .max(100, "Display name must not exceed 100 characters")
    .optional(),

  description: z
    .string()
    .trim()
    .max(500, "Description must not exceed 500 characters")
    .optional(),

  category: z
    .string()
    .trim()
    .max(100, "Category must not exceed 100 characters")
    .optional(),

  coverImage: z
    .string()
    .url("Cover image must be a valid URL")
    .optional(),

  website: z
    .string()
    .url("Website must be a valid URL")
    .optional(),
});

export const userIdParamSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
});

export const creatorSearchSchema = z.object({
  query: z
    .string()
    .trim()
    .min(1, "Search query is required")
    .max(50, "Search query is too long"),
});

