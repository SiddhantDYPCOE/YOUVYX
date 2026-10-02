import { useState } from "react";
import {
  Bookmark,
  Clock3,
  FileText,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Share2,
  ThumbsDown,
} from "lucide-react";

import { toggleLike } from "../../services/content.api";

const getReadingTime = (body = "") => {
  if (typeof body !== "string") {
    return "1 min read";
  }

  const words = body
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

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

const getBodyPreview = (body = "", maxLength = 180) => {
  if (!body || typeof body !== "string") {
    return "";
  }

  const cleanBody = body.trim();

  if (cleanBody.length <= maxLength) {
    return cleanBody;
  }

  return `${cleanBody.slice(0, maxLength).trim()}...`;
};

const ContentCard = ({ content, onOpen }) => {
  if (!content) {
    return null;
  }

  const creator = content.creator || {};
  const genre = content.genre || {};
  const article = content.article || {};

  const body = article.body || "";

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

    console.log("Share content:", content.id);
  };

  const handleBookmark = (event) => {
    event.stopPropagation();

    console.log("Bookmark content:", content.id);
  };

  const handleOpen = () => {
    if (!content.id || !onOpen) {
      return;
    }

    onOpen(content.id);
  };

  return (
    <article
      onClick={handleOpen}
      className="group relative w-full cursor-pointer overflow-hidden border-b border-gray-200 bg-white px-5 py-7 transition-colors duration-200 hover:bg-gray-50 sm:px-8 sm:py-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Creator */}

        <div className="flex items-center gap-3">
          {creator.profileImage ? (
            <img
              src={creator.profileImage}
              alt={creator.name || "Creator"}
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">
              {getInitials(creator.name)}
            </div>
          )}

          <div className="flex min-w-0 items-center gap-2">
            <p className="truncate text-sm font-semibold text-gray-900">
              {creator.name || "YOUVYX Creator"}
            </p>

            {creator.accountType === "CREATOR" && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[9px] font-bold text-white">
                ✓
              </span>
            )}

            <span className="text-gray-300">·</span>

            <span className="text-sm text-gray-400">
              {content.createdAt
                ? new Date(content.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                    }
                  )
                : ""}
            </span>
          </div>
        </div>

        {/* Main */}

        <div className="mt-6 flex gap-7">
          {/* Text */}

          <div className="min-w-0 flex-1">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xs font-semibold text-indigo-600">
                {genre.name || "General"}
              </span>

              <span className="text-xs text-gray-300">·</span>

              <span className="text-xs font-medium text-gray-400">
                {content.type === "ARTICLE"
                  ? "Article"
                  : content.type || "Content"}
              </span>
            </div>

            <h2 className="text-2xl font-black leading-[1.12] tracking-[-0.025em] text-gray-950 transition-colors duration-200 group-hover:text-indigo-600 sm:text-3xl">
              {content.title || "Untitled content"}
            </h2>

            {content.description && (
              <p className="mt-3 line-clamp-2 max-w-2xl text-[15px] leading-6 text-gray-500 sm:text-base">
                {content.description}
              </p>
            )}

            {/* Article preview */}

            {content.type === "ARTICLE" && body && (
              <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-gray-400">
                {getBodyPreview(body)}
              </p>
            )}

            {/* PDF */}

            {content.type === "ARTICLE" &&
              !body &&
              article.pdfUrl && (
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-500">
                  <FileText size={15} />
                  <span>
                    {article.pdfFileName || "PDF document"}
                  </span>
                </div>
              )}

            {/* Meta */}

            {content.type === "ARTICLE" && (
              <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
                <Clock3 size={13} />
                {getReadingTime(body)}
              </div>
            )}
          </div>

          {/* Media */}

          {content.type === "IMAGE" &&
            content.image?.url && (
              <div className="hidden h-32 w-52 shrink-0 overflow-hidden rounded-sm bg-gray-100 sm:block">
                <img
                  src={content.image.url}
                  alt={content.title || "Content"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            )}

          {content.type === "VIDEO" &&
            content.video?.url && (
              <div className="hidden h-32 w-52 shrink-0 overflow-hidden rounded-sm bg-gray-950 sm:block">
                <video
                  src={content.video.url}
                  muted
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
            )}

          {content.type === "ARTICLE" &&
            article.pdfUrl && (
              <div className="hidden h-32 w-52 shrink-0 items-center justify-center rounded-sm bg-gray-100 sm:flex">
                <FileText
                  size={38}
                  strokeWidth={1.5}
                  className="text-gray-400"
                />
              </div>
            )}
        </div>

        {/* Bottom actions */}

        <div className="mt-7 flex items-center justify-between">
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
              aria-label="Like"
            >
              <Heart
                size={17}
                fill={liked ? "currentColor" : "none"}
              />

              <span>
                {likeCount > 0 ? likeCount : ""}
              </span>
            </button>

            {/* Comment placeholder */}

            <button
              type="button"
              onClick={(event) => event.stopPropagation()}
              className="flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-gray-900"
              aria-label="Comments"
            >
              <MessageCircle size={17} />

              <span>
                {Number(content.commentCount) > 0
                  ? content.commentCount
                  : ""}
              </span>
            </button>

            {/* Share */}

            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-gray-900"
              aria-label="Share"
            >
              <Repeat2 size={18} />

              <span>
                {Number(content.shareCount) > 0
                  ? content.shareCount
                  : ""}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Bookmark */}

            <button
              type="button"
              onClick={handleBookmark}
              className="text-gray-400 transition hover:text-gray-900"
              aria-label="Bookmark"
            >
              <Bookmark size={18} />
            </button>

            {/* More */}

            <button
              type="button"
              onClick={(event) => event.stopPropagation()}
              className="text-gray-400 transition hover:text-gray-900"
              aria-label="More options"
            >
              <MoreHorizontal size={19} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContentCard;