import api from "./api";

export const getFeed = async () => {
  const response = await api.get("/content");
  return response.data;
};

export const getContentById = async (contentId) => {
  const response = await api.get(`/content/${contentId}`);
  return response.data;
};

export const getMyContent = async () => {
  const response = await api.get("/content/me");
  return response.data;
};

export const createContent = async (data) => {
  const response = await api.post("/content", data);
  return response.data;
};

export const updateContent = async (contentId, data) => {
  const response = await api.patch(`/content/${contentId}`, data);
  return response.data;
};

export const deleteContent = async (contentId) => {
  const response = await api.delete(`/content/${contentId}`);
  return response.data;
};

export const toggleLike = async (contentId) => {
  const response = await api.post(`/content/${contentId}/like`);
  return response.data;
};

export const createArticle = async (formData) => {
  const response = await api.post(
    "/content/article",
    formData
  );
}