
import { useCallback, useEffect, useState } from "react";
import {
  CalendarDays,
  Image as ImageIcon,
  Loader2,
  Trash2,
  X,
} from "lucide-react";

import usePost from "../../hooks/usePost";

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const YourPosts = ({
  userId,
  currentUserId,
  refreshKey = 0,
}) => {
  const { getByUser, getById, remove } = usePost();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedPost, setSelectedPost] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");
  const [deleting, setDeleting] = useState(false);

  const loadPosts = useCallback(async () => {
    if (!userId) {
      setPosts([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await getByUser(userId);
      const userPosts = response?.data?.posts || [];

      setPosts(
        [...userPosts].sort(
          (a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        )
      );
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Unable to load posts."
      );
    } finally {
      setLoading(false);
    }
  }, [userId, getByUser]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts, refreshKey]);

  const openPost = async (postId) => {
    try {
      setDetailLoading(true);
      setDetailError("");
      setSelectedPost(null);

      const response = await getById(postId);
      const post = response?.data?.post;

      if (!post) {
        throw new Error("Post not found.");
      }

      setSelectedPost(post);
    } catch (err) {
      setDetailError(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to load post details."
      );
    } finally {
      setDetailLoading(false);
    }
  };

  const closePost = () => {
    setSelectedPost(null);
    setDetailError("");
  };

  const handleDelete = async () => {
    if (!selectedPost || deleting) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmed) return;

    try {
      setDeleting(true);
      setDetailError("");

      await remove(selectedPost.id);

      setPosts((previous) =>
        previous.filter((post) => post.id !== selectedPost.id)
      );

      closePost();
    } catch (err) {
      setDetailError(
        err?.response?.data?.message ||
          "Unable to delete post."
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <section className="mt-10">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-950">
              Your Posts
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Posts you've shared on YOUVYX.
            </p>
          </div>

          {!loading && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
              {posts.length} {posts.length === 1 ? "post" : "posts"}
            </span>
          )}
        </div>

        {loading ? (
          <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-black/[0.07] bg-white">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Loader2 size={18} className="animate-spin" />
              Loading your posts...
            </div>
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
            <p className="text-sm text-red-600">{error}</p>

            <button
              type="button"
              onClick={loadPosts}
              className="mt-3 text-sm font-semibold text-red-700 hover:underline"
            >
              Try again
            </button>
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-2xl border border-black/[0.07] bg-white px-6 py-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
              <ImageIcon size={21} className="text-indigo-500" />
            </div>

            <p className="mt-4 text-sm font-semibold text-gray-900">
              No posts yet
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Your published posts will appear here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => openPost(post.id)}
                className="group overflow-hidden rounded-2xl border border-black/[0.07] bg-white text-left transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
              >
                {post.mediaUrl ? (
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={post.mediaUrl}
                      alt="Post"
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-4 sm:p-5">
                    <p className="line-clamp-6 break-words text-sm leading-6 text-gray-700">
                      {post.content}
                    </p>
                  </div>
                )}

                <div className="p-3">
                  <p className="line-clamp-2 break-words text-sm font-medium text-gray-800">
                    {post.content}
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                    <CalendarDays size={13} />
                    {formatDate(post.createdAt)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {(detailLoading || selectedPost || detailError) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closePost}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Post details"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h3 className="font-bold text-gray-950">
                Post details
              </h3>

              <button
                type="button"
                onClick={closePost}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={19} />
              </button>
            </div>

            {detailLoading ? (
              <div className="flex min-h-48 items-center justify-center">
                <Loader2
                  size={26}
                  className="animate-spin text-indigo-600"
                />
              </div>
            ) : detailError ? (
              <div className="p-5">
                <p className="text-sm text-red-600">{detailError}</p>
              </div>
            ) : selectedPost ? (
              <div className="p-5">
                {selectedPost.mediaUrl && (
                  <img
                    src={selectedPost.mediaUrl}
                    alt="Post"
                    className="mb-5 max-h-[420px] w-full rounded-2xl bg-gray-50 object-contain"
                  />
                )}

                <div className="mb-4">
                  <p className="font-semibold text-gray-950">
                    {selectedPost.author?.name || "YOUVYX user"}
                  </p>

                  {selectedPost.author?.username && (
                    <p className="text-sm text-gray-400">
                      @{selectedPost.author.username}
                    </p>
                  )}
                </div>

                <p className="whitespace-pre-wrap break-words text-sm leading-7 text-gray-700">
                  {selectedPost.content}
                </p>

                {selectedPost.tags?.length > 0 && (
                  <div className="mt-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Tagged users
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700"
                        >
                          @{tag.taggedUser?.username || "user"}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="mt-5 flex items-center gap-2 text-xs text-gray-400">
                  <CalendarDays size={14} />
                  {formatDate(selectedPost.createdAt)}
                </p>

                {selectedPost.author?.id === currentUserId && (
                  <button
                    type="button"
                    disabled={deleting}
                    onClick={handleDelete}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                  >
                    {deleting ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Trash2 size={16} />
                    )}

                    {deleting ? "Deleting..." : "Delete post"}
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default YourPosts;

