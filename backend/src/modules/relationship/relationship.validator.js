import { z } from "zod";

export const userIdParamSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
});

export const relationshipIdParamSchema = z.object({
  relationshipId: z.string().min(1, "Relationship ID is required"),
});