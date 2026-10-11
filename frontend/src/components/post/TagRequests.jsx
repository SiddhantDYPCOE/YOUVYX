
import { useCallback, useEffect, useState } from "react";
import {
  Check,
  Loader2,
  RefreshCw,
  UserRound,
  X,
} from "lucide-react";

import usePost from "../../hooks/usePost";

const TagRequests = () => {
  const {
    getPendingTags,
    acceptTag,
    rejectTag,
  } = usePost();

  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [processingId, setProcessingId] = useState(null);

  const loadRequests = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getPendingTags();
      setTags(response?.data?.tags || []);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Unable to load tag requests."
      );
    } finally {
      setLoading(false);
    }
  }, [getPendingTags]);

  useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  const handleDecision = async (tagId, decision) => {
    try {
      setProcessingId(tagId);
      setError("");

      if (decision === "accept") {
        await acceptTag(tagId);
      } else {
        await rejectTag(tagId);
      }

      setTags((previous) =>
        previous.filter((tag) => tag.id !== tagId)
      );
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          `Unable to ${decision} this request.`
      );
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <section className="mt-8 rounded-3xl border border-black/[0.07] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-gray-950">
            Tag requests
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Choose which posts can appear in your tagged posts.
          </p>
        </div>

        <button
          type="button"
          onClick={loadRequests}
          disabled={loading}
          aria-label="Refresh tag requests"
          className="rounded-xl border border-gray-200 p-2.5 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
        >
          <RefreshCw
            size={16}
            className={loading ? "animate-spin" : ""}
          />
        </button>
      </div>

      {error && (
        <p role="alert" className="mb-4 text-sm text-red-600">
          {error}
        </p>
      )}

      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-indigo-600" />
        </div>
      ) : tags.length === 0 ? (
        <div className="rounded-2xl bg-gray-50 px-4 py-8 text-center">
          <UserRound className="mx-auto h-7 w-7 text-gray-400" />
          <p className="mt-3 text-sm font-medium text-gray-700">
            No pending tag requests
          </p>
          <p className="mt-1 text-xs text-gray-400">
            New requests will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {tags.map((tag) => {
            const post = tag.post;
            const author = post?.author || tag.taggedBy;
            const isProcessing = processingId === tag.id;

            return (
              <div
                key={tag.id}
                className="rounded-2xl border border-gray-100 p-4"
              >
                <div className="flex items-start gap-3">
                  {author?.profileImage ? (
                    <img
                      src={author.profileImage}
                      alt={author.name || "User"}
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                      <UserRound size={18} />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {author?.name || "A user"}{" "}
                      <span className="font-normal text-gray-500">
                        tagged you in a post
                      </span>
                    </p>

                    {author?.username && (
                      <p className="mt-0.5 text-xs text-gray-400">
                        @{author.username}
                      </p>
                    )}

                    <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-gray-700">
                      {post?.content || "Post content unavailable"}
                    </p>

                    {post?.mediaUrl && (
                      <img
                        src={post.mediaUrl}
                        alt="Tagged post"
                        className="mt-3 max-h-52 w-full rounded-xl object-contain"
                      />
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={() =>
                          handleDecision(tag.id, "accept")
                        }
                        className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
                      >
                        {isProcessing ? (
                          <Loader2
                            size={14}
                            className="animate-spin"
                          />
                        ) : (
                          <Check size={14} />
                        )}
                        Accept
                      </button>

                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={() =>
                          handleDecision(tag.id, "reject")
                        }
                        className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                      >
                        <X size={14} />
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TagRequests;

