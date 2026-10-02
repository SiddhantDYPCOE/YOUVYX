import api from "./api";

export const createRelationship = async (userId) => {
  const response = await api.post(
    `/relationship/${userId}`
  );

  return response.data;
};

export const acceptRelationship = async (relationshipId) => {
  const response = await api.patch(
    `/relationship/${relationshipId}/accept`
  );

  return response.data;
};

export const rejectRelationship = async (relationshipId) => {
  const response = await api.patch(
    `/relationship/${relationshipId}/reject`
  );

  return response.data;
};

export const cancelRequest = async (relationshipId) => {
  const response = await api.delete(
    `/relationship/${relationshipId}/request`
  );

  return response.data;
};

export const removeRelationship = async (userId) => {
  const response = await api.delete(
    `/relationship/${userId}`
  );

  return response.data;
};

export const getFollowers = async () => {
  const response = await api.get(
    "/relationship/followers"
  );

  return response.data;
};

export const getFollowing = async () => {
  const response = await api.get(
    "/relationship/following"
  );

  return response.data;
};

export const getReceivedRequests = async () => {
  const response = await api.get(
    "/relationship/requests/received"
  );

  return response.data;
};

export const getSentRequests = async () => {
  const response = await api.get(
    "/relationship/requests/sent"
  );

  return response.data;
};

export const getFollowersByUserId = async (userId) => {
  const response = await api.get(
    `/relationship/${userId}/followers`
  );

  return response.data;
};

export const getFollowingByUserId = async (userId) => {
  const response = await api.get(
    `/relationship/${userId}/following`
  );

  return response.data;
};


export const getRelationshipStatus = async (userId) => {
  const response = await api.get(
    `/relationship/${userId}/status`
  );

  return response.data;
};