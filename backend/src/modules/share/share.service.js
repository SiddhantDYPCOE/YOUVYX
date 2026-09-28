import {
  createShare,
  countShares,
} from "./share.repository.js";

import { findContentById } from "../content/content.repository.js";

export async function shareContent(
  userId,
  contentId
) {
  const content = await findContentById(contentId);

  if (!content) {
    const error = new Error("Content not found");
    error.statusCode = 404;
    throw error;
  }

  await createShare(userId, contentId);

  const shareCount = await countShares(contentId);

  return {
    shared: true,
    shareCount,
    message: "Content shared successfully",
  };
}