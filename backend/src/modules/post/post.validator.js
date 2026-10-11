import { z } from "zod";

export const createPostValidator = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Post content is required")
    .max(5000, "Post content cannot exceed 5000 characters"),

  // The image now comes from multer (req.file), so mediaUrl is removed.
  // The service builds mediaUrl from the Cloudinary upload.

  aspectRatio: z.enum(["1:1", "4:5", "1.91:1"], {
    errorMap: () => ({
      message: "Aspect ratio must be 1:1, 4:5 or 1.91:1",
    }),
  }),

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