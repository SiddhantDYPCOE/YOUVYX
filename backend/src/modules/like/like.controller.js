import { toggleLike } from "./like.service.js";

export async function toggleLikeController(
  req,
  res,
  next
) {
  try {
    const userId = req.user.id;
    const { contentId } = req.params;

    const result = await toggleLike(
      userId,
      contentId
    );

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}