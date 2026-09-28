import { shareContent } from "./share.service.js";

export async function shareContentController(
  req,
  res,
  next
) {
  try {
    const userId = req.user.id;
    const { contentId } = req.params;

    const result = await shareContent(
      userId,
      contentId
    );

    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}