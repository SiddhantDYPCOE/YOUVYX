import {
  findLike,
  createLike,
  deleteLike,
  countLikes,
} from "./like.repository.js";

import { findContentById } from "../content/content.repository.js";

export async function toggleLike(userId, contentId) {
  const content = await findContentById(contentId);

  if (!content) {
    const error = new Error("Content not found");
    error.statusCode = 404;
    throw error;
  }

  const existingLike = await findLike(
    userId,
    contentId
  );

  if (existingLike) {
    await deleteLike(existingLike.id);

    const likeCount = await countLikes(contentId);

    return {
      liked: false,
      likeCount,
      message: "Content unliked successfully",
    };
  }

  await createLike(userId, contentId);

  const likeCount = await countLikes(contentId);

  return {
    liked: true,
    likeCount,
    message: "Content liked successfully",
  };
}