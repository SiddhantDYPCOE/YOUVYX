import { z } from "zod";

const contentTypeSchema = z.enum(
  ["ARTICLE", "IMAGE", "VIDEO"],
  {
    message: "Invalid content type",
  }
);

const createContentSchema = z
  .object({
    title: z
      .string()
      .min(2, "Title must be at least 2 characters")
      .max(200, "Title must not exceed 200 characters"),

    description: z
      .string()
      .max(
        1000,
        "Description must not exceed 1000 characters"
      )
      .optional(),

    body: z
      .string()
      .optional(),

    type: contentTypeSchema,

    externalUrl: z
      .string()
      .url("External URL must be a valid URL")
      .optional(),

    mediaUrl: z
      .string()
      .url("Media URL must be a valid URL")
      .optional(),

    genreId: z
      .string()
      .min(1, "Genre ID is required"),
  })
  .superRefine((data, ctx) => {
    if (data.type === "ARTICLE" && !data.body) {
      ctx.addIssue({
        code: "custom",
        path: ["body"],
        message: "Article content is required",
      });
    }

    if (data.type === "VIDEO" && !data.externalUrl) {
      ctx.addIssue({
        code: "custom",
        path: ["externalUrl"],
        message:
          "External URL is required for video content",
      });
    }

    if (data.type === "IMAGE" && !data.mediaUrl) {
      ctx.addIssue({
        code: "custom",
        path: ["mediaUrl"],
        message:
          "Media URL is required for image content",
      });
    }
  });

const updateContentSchema = z
  .object({
    title: z
      .string()
      .min(2, "Title must be at least 2 characters")
      .max(200, "Title must not exceed 200 characters")
      .optional(),

    description: z
      .string()
      .max(
        1000,
        "Description must not exceed 1000 characters"
      )
      .optional(),

    body: z
      .string()
      .optional(),

    externalUrl: z
      .string()
      .url("External URL must be a valid URL")
      .optional(),

    mediaUrl: z
      .string()
      .url("Media URL must be a valid URL")
      .optional(),

    genreId: z
      .string()
      .min(1, "Genre ID cannot be empty")
      .optional(),
  })
  .refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "At least one field is required",
    }
  );

const contentIdSchema = z.object({
  contentId: z
    .string()
    .min(1, "Content ID is required"),
});

export {
  createContentSchema,
  updateContentSchema,
  contentIdSchema,
};