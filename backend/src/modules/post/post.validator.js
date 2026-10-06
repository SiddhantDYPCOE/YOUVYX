import { z } from "zod";

export const createPostValidator = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Post content is required")
    .max(5000, "Post content cannot exceed 5000 characters"),

  mediaUrl: z
    .string()
    .url("Invalid media URL")
    .optional()
    .nullable(),

  challengeId: z
    .string()
    .min(1, "Invalid challenge ID")
    .optional()
    .nullable(),

  taggedUserIds: z
    .array(
      z
        .string()
        .min(1, "Invalid tagged user ID")
    )
    .max(20, "You can tag a maximum of 20 users")
    .refine(
      (ids) => new Set(ids).size === ids.length,
      "Duplicate users cannot be tagged"
    )
    .optional()
    .default([]),
});