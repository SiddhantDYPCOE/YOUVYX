import api from "./api"; // your configured axios instance - adjust

export const getForYouFeed = async ({ cursor, limit = 10 } = {}) => {
  const response = await api.get("/feed/for-you", {
    params: { cursor: cursor || undefined, limit },
  });
  return response.data; // { success, data: { items, nextCursor } }
};