
import api from "./api";

export const createPost = async (data) => {
  const response = await api.post("/post", data);

  return response.data;
};

export const getPostById = async (postId) => {
  const response = await api.get(`/post/${postId}`);

  return response.data;
};

export const getUserPosts = async (userId) => {
  const response = await api.get(`/post/user/${userId}`);

  return response.data;
};

export const getTaggedPosts = async (userId) => {
  const response = await api.get(`/post/tagged/${userId}`);

  return response.data;
};

export const getPendingPostTags = async () => {
  const response = await api.get("/post/tags/pending");

  return response.data;
};

export const acceptPostTag = async (tagId) => {
  const response = await api.patch(
    `/post/tags/${tagId}/accept`
  );

  return response.data;
};

export const rejectPostTag = async (tagId) => {
  const response = await api.patch(
    `/post/tags/${tagId}/reject`
  );

  return response.data;
};

export const deletePost = async (postId) => {
  const response = await api.delete(`/post/${postId}`);

  return response.data;
};
