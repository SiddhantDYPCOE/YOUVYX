import api from "./api";

export const getGenres = async () => {
  const response = await api.get("/genres");

  return response.data;
};

export const getMyGenres = async () => {
  const response = await api.get("/genres/me");

  return response.data;
};

export const replaceMyGenres = async (genreIds) => {
  const response = await api.put("/genres/me", {
    genreIds,
  });

  return response.data;
};

export const addGenres = async (genreIds) => {
  const response = await api.post("/genres/me", {
    genreId: genreIds,
  });

  return response.data;
};

export const removeGenre = async (genreId) => {
  const response = await api.delete(`/genres/me/${genreId}`);

  return response.data;
};