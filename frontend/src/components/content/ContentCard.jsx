
import { useState } from "react";
import {
  Bookmark,
  ChevronRight,
  Clock3,
  FileText,
  Heart,
  Share2,
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

const getBodyPreview = (body = "", maxLength = 420) => {
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

  const handleOpen = () => {
    if (!content.id) {
      return;
    }

    onOpen(content.id);
  };

  return (
    <article
      onClick={handleOpen}
      className="relative flex min-h-[calc(100vh-9rem)] w-full cursor-pointer snap-start items-center overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="w-full p-7 sm:p-10 lg:p-12">
        {/* Top */}

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600">
              {genre.name || "General"}
            </span>

            <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-400">
              {content.type || "CONTENT"}
            </span>
          </div>

          <button
            type="button"
            onClick={(event) => event.stopPropagation()}
            className="rounded-full p-2.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
            aria-label="Bookmark"
          >
            <Bookmark size={19} />
          </button>
        </div>

        {/* Main content */}

        <div className="mt-10 max-w-3xl">
          {content.type === "ARTICLE" && (
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold text-gray-400">
              <FileText size={15} />
              Article
            </div>
          )}

          <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-gray-950 transition-colors group-hover:text-indigo-600 sm:text-4xl lg:text-5xl">
            {content.title || "Untitled content"}
          </h2>

          {article.subject && (
            <p className="mt-4 text-sm font-semibold text-indigo-600">
              {article.subject}
            </p>
          )}

          {content.description && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
              {content.description}
            </p>
          )}

          {content.type === "ARTICLE" && body && (
            <div className="mt-7 max-w-2xl border-l-2 border-indigo-100 pl-5">
              <p className="whitespace-pre-wrap text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                {getBodyPreview(body)}
              </p>

              <p className="mt-3 text-xs font-bold text-indigo-600">
                Continue reading →
              </p>
            </div>
          )}

          {content.type === "ARTICLE" &&
            !body &&
            article.pdfUrl && (
              <div className="mt-7 flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <FileText size={18} />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    PDF Article
                  </p>

                  <p className="mt-0.5 text-xs text-gray-400">
                    Open to read the full document
                  </p>
                </div>
              </div>
            )}
        </div>

        {/* Creator */}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
          <div className="flex min-w-0 items-center gap-3">
            {creator.profileImage ? (
              <img
                src={creator.profileImage}
                alt={creator.name || "Creator"}
                className="h-11 w-11 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xs font-bold text-white">
                {getInitials(creator.name)}
              </div>
            )}

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-gray-950">
                {creator.name || "YOUVYX Creator"}
              </p>

              <p className="truncate text-xs text-gray-400">
                @{creator.username || "creator"}
              </p>
            </div>
          </div>

          {content.type === "ARTICLE" && (
            <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
              <Clock3 size={14} />
              {getReadingTime(body)}
            </div>
          )}
        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={handleLike}
              disabled={likeLoading}
              className={`flex items-center gap-2 text-sm transition ${
                liked
                  ? "text-red-500"
                  : "text-gray-400 hover:text-gray-950"
              } ${
                likeLoading
                  ? "cursor-not-allowed opacity-60"
                  : ""
              }`}
            >
              <Heart
                size={18}
                fill={liked ? "currentColor" : "none"}
              />

              {likeCount}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-gray-950"
            >
              <Share2 size={18} />

              {Number(content.shareCount) || 0}
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
            Open

            <ChevronRight size={17} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContentCard;

