
import { useCallback, useState } from "react";

import {
  createPost,
  deletePost,
  getPostById,
  getUserPosts,
  getTaggedPosts,
  getPendingPostTags,
  acceptPostTag,
  rejectPostTag,
} from "../services/post.api";

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = useCallback(async (request) => {
    try {
      setLoading(true);
      setError(null);

      return await request();
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Something went wrong"
      );

      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const create = useCallback(
    (data) =>
      handleRequest(() => createPost(data)),
    [handleRequest]
  );

  const getById = useCallback(
    (postId) =>
      handleRequest(() => getPostById(postId)),
    [handleRequest]
  );

  const getByUser = useCallback(
    (userId) =>
      handleRequest(() => getUserPosts(userId)),
    [handleRequest]
  );

  const getTagged = useCallback(
    (userId) =>
      handleRequest(() => getTaggedPosts(userId)),
    [handleRequest]
  );

  const getPendingTags = useCallback(
    () =>
      handleRequest(() => getPendingPostTags()),
    [handleRequest]
  );

  const acceptTag = useCallback(
    (tagId) =>
      handleRequest(() => acceptPostTag(tagId)),
    [handleRequest]
  );

  const rejectTag = useCallback(
    (tagId) =>
      handleRequest(() => rejectPostTag(tagId)),
    [handleRequest]
  );

  const remove = useCallback(
    (postId) =>
      handleRequest(() => deletePost(postId)),
    [handleRequest]
  );

  return {
    loading,
    error,
    create,
    getById,
    getByUser,
    getTagged,
    getPendingTags,
    acceptTag,
    rejectTag,
    remove,
  };
};

export default usePost;

