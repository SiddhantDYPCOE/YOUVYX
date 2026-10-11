import { findCreatorContents, findFriendPosts, getFollowedCreatorIds, getFriendIds } from "./feed.repository.js";



export const getForYouFeedService = async ({ userId, cursor, limit = 10 }) => {
  const before = cursor ? new Date(cursor) : null;

  if (before && Number.isNaN(before.getTime())) {
    throw new Error("Invalid cursor");
  }

  const [friendIds, creatorIds] = await Promise.all([
    getFriendIds(userId),
    getFollowedCreatorIds(userId),
  ]);

  // Nothing to show yet - no friends and no followed creators
  if (friendIds.length === 0 && creatorIds.length === 0) {
    return { items: [], nextCursor: null };
  }

  // Fetch limit + 1 from each source so the merged top `limit`
  // is always correct and we can tell whether more exists.
  const take = limit + 1;

  const [posts, contents] = await Promise.all([
    friendIds.length ? findFriendPosts({ friendIds, before, take }) : [],
    creatorIds.length ? findCreatorContents({ creatorIds, before, take }) : [],
  ]);

  const merged = [
    ...posts.map((data) => ({ type: "POST", createdAt: data.createdAt, data })),
    ...contents.map((data) => ({
      type: "CONTENT",
      createdAt: data.createdAt,
      data,
    })),
  ].sort((a, b) => b.createdAt - a.createdAt);

  const items = merged.slice(0, limit);
  const hasMore = merged.length > limit;

  return {
    items,
    nextCursor: hasMore ? items[items.length - 1].createdAt.toISOString() : null,
  };
};