
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bookmark,
  Clock3,
  Heart,
  Loader2,
  Share2,
} from "lucide-react";

import { getFeed, toggleLike } from "../../services/content.api";

const getInitials = (name = "U") => {
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

const getReadingTime = (body = "") => {
  if (typeof body !== "string") {
    return "1 min read";
  }

  const words = body.trim().split(/\s+/).filter(Boolean).length;

  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

const formatDate = (date) => {
  if (!date) return "";

  const formattedDate = new Date(date);

  if (Number.isNaN(formattedDate.getTime())) {
    return "";
  }

  return formattedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const ContentDetails = () => {
  const { contentId } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [likeLoading, setLikeLoading] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError("");

        if (!contentId) {
          setError("Content ID is missing.");
          return;
        }

        const response = await getFeed();

        const contents = response?.data?.contents || [];

        const selectedContent = contents.find(
          (item) => item.id === contentId
        );

        if (!selectedContent) {
          setError("This content could not be found in your feed.");
          return;
        }

        setContent(selectedContent);

        setLiked(Boolean(selectedContent.likedByMe));
        setLikeCount(Number(selectedContent.likeCount) || 0);
      } catch (error) {
        console.error("CONTENT DETAILS ERROR:", error);

        setError(
          error?.response?.data?.message ||
            "Unable to load this content."
        );
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentId]);

  const handleLike = async () => {
    if (likeLoading || !content?.id) {
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

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (error) {
      console.error("SHARE ERROR:", error);
    }
  };

  /* ---------------- LOADING ---------------- */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
          <Loader2 size={19} className="animate-spin" />
          Loading...
        </div>
      </div>
    );
  }

  /* ---------------- ERROR ---------------- */

  if (error || !content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-5">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-950">
            Content unavailable
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            {error || "This content could not be found."}
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-6 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Back to feed
          </button>
        </div>
      </div>
    );
  }

  const creator = content.creator || {};
  const genre = content.genre || {};

  const article = content.article || {};

  const articleBody = article.body || "";

  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* -------------------------------------------------- */}
      {/* HEADER */}
      {/* -------------------------------------------------- */}

      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Back */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-950"
          >
            <ArrowLeft size={18} />

            <span className="hidden sm:inline">
              Back
            </span>
          </button>

          {/* Logo */}

          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-xl font-black tracking-tight text-gray-950"
          >
            YOUVYX
          </button>

          {/* Bookmark */}

          <button
            type="button"
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-950"
            aria-label="Bookmark"
          >
            <Bookmark size={19} />
          </button>
        </div>
      </header>

      {/* -------------------------------------------------- */}
      {/* ARTICLE HEADER */}
      {/* -------------------------------------------------- */}

      <main className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
        {/* Genre */}

        <div className="mb-6">
          <span className="text-sm font-medium text-indigo-600">
            {genre.name || "General"}
          </span>
        </div>

        {/* Title */}

        <h1 className="text-[2.6rem] font-black leading-[1.08] tracking-[-0.035em] text-gray-950 sm:text-5xl sm:leading-[1.08] lg:text-[3.5rem]">
          {content.title}
        </h1>

        {/* Description */}

        {content.description && (
          <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-500 sm:text-[1.35rem] sm:leading-9">
            {content.description}
          </p>
        )}

        {/* -------------------------------------------------- */}
        {/* AUTHOR / META */}
        {/* -------------------------------------------------- */}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-b border-gray-200 pb-7">
          <button
            type="button"
            onClick={() => {
              if (creator.id) {
                navigate(`/creator/${creator.id}`);
              }
            }}
            className="flex items-center gap-3 text-left"
          >
            {creator.profileImage ? (
              <img
                src={creator.profileImage}
                alt={creator.name || "Creator"}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-xs font-bold text-white">
                {getInitials(creator.name)}
              </div>
            )}

            <div>
              <p className="text-sm font-semibold text-gray-950">
                {creator.name || "YOUVYX Creator"}
              </p>

              <p className="mt-0.5 text-xs text-gray-400">
                @{creator.username || "creator"}
              </p>
            </div>
          </button>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            {content.type === "ARTICLE" && (
              <span className="flex items-center gap-1.5">
                <Clock3 size={14} />

                {getReadingTime(articleBody)}
              </span>
            )}

            <span>
              {formatDate(content.createdAt)}
            </span>
          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* ARTICLE */}
        {/* -------------------------------------------------- */}

        {content.type === "ARTICLE" && (
          <article className="mt-10">
            {/* Subject */}

            {article.subject && (
              <p className="mb-8 text-sm font-semibold uppercase tracking-[0.14em] text-gray-400">
                {article.subject}
              </p>
            )}

            {/* Body */}

            {articleBody && (
              <div className="whitespace-pre-wrap text-[18px] leading-[1.85] tracking-[-0.005em] text-gray-700 sm:text-[19px] sm:leading-[1.9]">
                {articleBody}
              </div>
            )}

            {/* PDF */}

            {article.pdfUrl && (
              <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-950">
                      PDF version
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {article.pdfFileName ||
                        "View attached document"}
                    </p>
                  </div>

                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    Open PDF
                  </a>
                </div>
              </div>
            )}

            {/* Empty article fallback */}

            {!articleBody && !article.pdfUrl && (
              <p className="text-sm text-gray-400">
                This article does not contain any readable content.
              </p>
            )}
          </article>
        )}

        {/* -------------------------------------------------- */}
        {/* IMAGE */}
        {/* -------------------------------------------------- */}

        {content.type === "IMAGE" && content.image?.url && (
          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              src={content.image.url}
              alt={content.title}
              className="max-h-[75vh] w-full object-contain"
            />
          </div>
        )}

        {/* -------------------------------------------------- */}
        {/* VIDEO */}
        {/* -------------------------------------------------- */}

        {content.type === "VIDEO" && content.video?.url && (
          <div className="mt-10 overflow-hidden rounded-2xl bg-black">
            <video
              src={content.video.url}
              controls
              className="max-h-[75vh] w-full"
            />
          </div>
        )}

        {/* -------------------------------------------------- */}
        {/* ENGAGEMENT */}
        {/* -------------------------------------------------- */}

        <div className="mt-14 flex items-center justify-between border-t border-gray-200 pt-5">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={handleLike}
              disabled={likeLoading}
              className={`flex items-center gap-2 text-sm transition ${
                liked
                  ? "text-red-500"
                  : "text-gray-500 hover:text-red-500"
              }`}
            >
              <Heart
                size={19}
                fill={liked ? "currentColor" : "none"}
              />

              {likeCount}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-950"
            >
              <Share2 size={19} />

              <span className="hidden sm:inline">
                Share
              </span>
            </button>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-950"
          >
            <Bookmark size={18} />

            <span className="hidden sm:inline">
              Save
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ContentDetails;