import { getForYouFeedService } from "./feed.service.js";

 
export const getForYouFeed = async (req, res, next) => {
  try {
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 10, 1), 30);
 
    const feed = await getForYouFeedService({
      userId: req.user.id,
      cursor: req.query.cursor,
      limit,
    });
 
    res.status(200).json({ success: true, data: feed });
  } catch (error) {
    next(error);
  }
};