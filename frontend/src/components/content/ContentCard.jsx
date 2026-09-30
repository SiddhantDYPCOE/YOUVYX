
import { useState } from "react";
import {
  Bookmark,
  ChevronRight,
  Clock3,
  Heart,
  Share2,
} from "lucide-react";

import { toggleLike } from "../../services/content.api";

const getReadingTime = (body = "") => {
  if (typeof body !== "string") {
    return "1 min read";
  }

  const words = body.trim().split(/\s+/).filter(Boolean).length;

  if (!words) {
    return "1 min read";
  }

  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

const getInitials = (name) => {
  if (!name || typeof name !== "string") {
    return "U";
  }

  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const ContentCard = ({ content, onOpen }) => {
  if (!content) {
    return null;
  }

  const creator = content.creator || {};
  const genre = content.genre || {};

  const [liked, setLiked] = useState(
    Boolean(content.likedByMe)
  );

  const [likeCount, setLikeCount] = useState(
    Number(content.likeCount) || 0
  );

  const [likeLoading, setLikeLoading] = useState(false);

  const handleLike = async (event) => {
    event.stopPropagation();

    if (likeLoading || !content.id) {
      return;
    }

    try {
      setLikeLoading(true);

      const response = await toggleLike(content.id);

      const result = response?.data;

      if (result) {
        setLiked(Boolean(result.liked));
        setLikeCount(Number(result.likeCount) || 0);
      }
    } catch (error) {
      console.error("LIKE ERROR:", error);
    } finally {
      setLikeLoading(false);
    }
  };

  const handleShare = (event) => {
    event.stopPropagation();

    // Share API will be connected here.
    console.log("Share content:", content.id);
  };

  const handleOpen = () => {
    if (!content.id) {
      return;
    }

    onOpen(content.id);
  };

  return (
    <article
      onClick={handleOpen}
      className="group cursor-pointer rounded-3xl border border-black/[0.07] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Top row */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
            {genre.name || "General"}
          </span>

          {content.type && (
            <span className="text-xs font-medium text-gray-400">
              {content.type}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={(event) => event.stopPropagation()}
          className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
          aria-label="Bookmark"
        >
          <Bookmark size={18} />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-950 transition-colors group-hover:text-indigo-600 sm:text-2xl">
        {content.title || "Untitled content"}
      </h2>

      {/* Description */}
      {content.description && (
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {content.description}
        </p>
      )}

      {/* Creator */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          {creator.profileImage ? (
            <img
              src={creator.profileImage}
              alt={creator.name || "Creator"}
              className="h-9 w-9 shrink-0 rounded-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-700">
              {getInitials(creator.name)}
            </div>
          )}

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-gray-900">
              {creator.name || "YOUVYX Creator"}
            </p>

            <p className="truncate text-xs text-gray-400">
              @{creator.username || "creator"}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 text-xs text-gray-400">
          <Clock3 size={14} />
          {getReadingTime(content.body)}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-5">
          {/* Like */}
          <button
            type="button"
            onClick={handleLike}
            disabled={likeLoading}
            className={`flex items-center gap-1.5 text-sm transition ${
              liked
                ? "text-red-500"
                : "text-gray-400 hover:text-gray-900"
            } ${
              likeLoading
                ? "cursor-not-allowed opacity-60"
                : ""
            }`}
          >
            <Heart
              size={17}
              fill={liked ? "currentColor" : "none"}
            />

            {likeCount}
          </button>

          {/* Share */}
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-gray-900"
          >
            <Share2 size={17} />

            {Number(content.shareCount) || 0}
          </button>
        </div>

        {/* Read */}
        <div className="flex items-center gap-1 text-sm font-semibold text-gray-900 transition group-hover:text-indigo-600">
          Read

          <ChevronRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </article>
  );
};

export default ContentCard;

