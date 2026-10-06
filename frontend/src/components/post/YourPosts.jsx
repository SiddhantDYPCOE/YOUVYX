
import { useCallback, useEffect, useState } from "react";
import {
  CalendarDays,
  Image as ImageIcon,
  Loader2,
  UserRound,
} from "lucide-react";

import usePost from "../../hooks/usePost";

const formatPostDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const YourPosts = ({ currentUserId }) => {
  const { getByUser, getById } = usePost();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedPost, setSelectedPost] = useState(null);
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState("");

  const loadPosts = useCallback(async () => {
    if (!currentUserId) return;

    try {
      setLoading(true);
      setError("");

      const response = await getByUser(currentUserId);

      const userPosts = response?.data?.posts || [];

      setPosts(userPosts);
    } catch (error) {
      console.error("GET USER POSTS ERROR:", error);

      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to load posts."
      );
    } finally {
      setLoading(false);
    }
  }, [currentUserId, getByUser]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const handlePostClick = useCallback(
    async (postId) => {
      try {
        setPostLoading(true);
        setPostError("");
        setSelectedPost(null);

        const response = await getById(postId);

        const post = response?.data?.post;

        if (!post) {
          throw new Error("Post not found.");
        }

        setSelectedPost(post);
      } catch (error) {
        console.error("GET POST ERROR:", error);

        setPostError(
          error?.response?.data?.message ||
            error?.message ||
            "Unable to load post."
        );
      } finally {
        setPostLoading(false);
      }
    },
    [getById]
  );

  const closePost = () => {
    setSelectedPost(null);
    setPostError("");
  };

  return (
    <>
      <section className="mt-10">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Your Posts
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Posts you've created
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white py-14">
            <ImageIcon className="mb-3 h-8 w-8 text-gray-400" />

            <p className="text-sm font-medium text-gray-700">
              No posts yet
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Your posts will appear here.
            </p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {posts.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => handlePostClick(post.id)}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition hover:-translate-y-1 hover:shadow-md"
              >
                {post.mediaUrl ? (
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={post.mediaUrl}
                      alt="Post"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-gray-50 p-5">
                    <p className="line-clamp-5 text-sm leading-6 text-gray-700">
                      {post.content}
                    </p>
                  </div>
                )}

                <div className="p-3">
                  <p className="line-clamp-2 text-sm font-medium text-gray-800">
                    {post.content}
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                    <CalendarDays className="h-3.5 w-3.5" />

                    {formatPostDate(post.createdAt)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {(postLoading || postError || selectedPost) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={closePost}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            {postLoading && (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-7 w-7 animate-spin text-gray-500" />
              </div>
            )}

            {!postLoading && postError && (
              <div className="p-6">
                <p className="text-sm text-red-600">
                  {postError}
                </p>

                <button
                  type="button"
                  onClick={closePost}
                  className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
                >
                  Close
                </button>
              </div>
            )}

            {!postLoading && !postError && selectedPost && (
              <>
                {selectedPost.mediaUrl && (
                  <div className="overflow-hidden bg-gray-100">
                    <img
                      src={selectedPost.mediaUrl}
                      alt="Post"
                      className="max-h-[500px] w-full object-contain"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    {selectedPost.author?.profileImage ? (
                      <img
                        src={selectedPost.author.profileImage}
                        alt={selectedPost.author.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <UserRound className="h-5 w-5 text-gray-500" />
                      </div>
                    )}

                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {selectedPost.author?.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        @{selectedPost.author?.username}
                      </p>
                    </div>
                  </div>

                  <p className="whitespace-pre-wrap text-sm leading-6 text-gray-800">
                    {selectedPost.content}
                  </p>

                  {selectedPost.tags?.length > 0 && (
                    <div className="mt-5">
                      <p className="mb-2 text-xs font-medium text-gray-500">
                        Tagged
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {selectedPost.tags.map((tag) => (
                          <span
                            key={tag.id}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                          >
                            @{tag.taggedUser?.username}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
                    <CalendarDays className="h-3.5 w-3.5" />

                    {formatPostDate(selectedPost.createdAt)}
                  </div>

                  <button
                    type="button"
                    onClick={closePost}
                    className="mt-6 w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default YourPosts;
