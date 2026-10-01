import api from "./api";

export const getMyCreatorProfile = async () => {
  const response = await api.get("/creator/me");

  return response.data;
};

export const getCreatorProfile = async (userId) => {
  const response = await api.get(`/creator/${userId}`);

  return response.data;
};

export const createCreatorProfile = async (data) => {
  const response = await api.post("/creator", data);

  return response.data;
};

export const updateCreatorProfile = async (data) => {
  const response = await api.patch("/creator/me", data);

  return response.data;
};

export const searchCreatorsAndUsers = async (query) => {
  const response = await api.get("/creator/search", {
    params: {
      query,
    },
  });

  return response.data;
};
