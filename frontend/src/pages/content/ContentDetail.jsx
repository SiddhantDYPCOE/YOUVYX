
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

import { getFeed } from "../../services/content.api";

const getInitials = (name = "U") => {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const getReadingTime = (body = "") => {
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

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError("");

        if (!contentId) {
          setError("Content ID is missing.");
          return;
        }

        /*
         * We are intentionally using the working feed endpoint
         * instead of GET /content/:id because that backend endpoint
         * is currently returning 500.
         */
        const response = await getFeed();

        console.log("FEED FOR CONTENT DETAILS:", response);

        const contents = response?.data?.contents || [];

        const selectedContent = contents.find(
          (item) => item.id === contentId
        );

        if (!selectedContent) {
          setError("This content could not be found in your feed.");
          return;
        }

        setContent(selectedContent);
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

  /* ---------------- LOADING ---------------- */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f8]">
        <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
          <Loader2 size={20} className="animate-spin" />
          Loading article...
        </div>
      </div>
    );
  }

  /* ---------------- ERROR ---------------- */

  if (error || !content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f8] px-5">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-950">
            Content unavailable
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {error || "This content could not be found."}
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Back to feed
          </button>
        </div>
      </div>
    );
  }

  const creator = content.creator || {};
  const genre = content.genre || {};

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-[#f7f7f8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-gray-600 transition hover:bg-white hover:text-gray-950"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="text-xl font-black tracking-tight text-gray-950">
            YOUVYX
          </div>

          <button
            className="rounded-xl p-2.5 text-gray-500 transition hover:bg-white hover:text-gray-950"
            aria-label="Bookmark"
          >
            <Bookmark size={19} />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Genre */}
        <div className="mb-6">
          <span className="rounded-full bg-indigo-50 px-3.5 py-2 text-xs font-bold text-indigo-600">
            {genre.name || "General"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-6xl">
          {content.title}
        </h1>

        {/* Description */}
        {content.description && (
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500 sm:text-xl">
            {content.description}
          </p>
        )}

        {/* Creator */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-gray-200 py-5">
          <div className="flex items-center gap-3">
            {creator.profileImage ? (
              <img
                src={creator.profileImage}
                alt={creator.name || "Creator"}
                className="h-11 w-11 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-xs font-bold text-white">
                {getInitials(creator.name)}
              </div>
            )}

            <div>
              <p className="text-sm font-bold text-gray-950">
                {creator.name || "YOUVYX Creator"}
              </p>

              <p className="text-xs text-gray-400">
                @{creator.username || "creator"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Clock3 size={14} />

              {content.type === "ARTICLE"
                ? getReadingTime(content.body)
                : "Quick content"}
            </span>

            <span>{formatDate(content.createdAt)}</span>
          </div>
        </div>

        {/* Article */}
        {content.type === "ARTICLE" && content.body && (
          <article className="mt-12">
            <div className="whitespace-pre-wrap text-[17px] leading-8 text-gray-700 sm:text-lg sm:leading-9">
              {content.body}
            </div>
          </article>
        )}

        {/* Image */}
        {content.type === "IMAGE" && content.mediaUrl && (
          <div className="mt-10 overflow-hidden rounded-3xl bg-white">
            <img
              src={content.mediaUrl}
              alt={content.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Video */}
        {content.type === "VIDEO" && content.externalUrl && (
          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 text-center">
            <p className="text-sm text-gray-500">
              This content is hosted externally.
            </p>

            <a
              href={content.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Watch video
            </a>
          </div>
        )}

        {/* Engagement */}
        <div className="mt-14 flex items-center justify-between border-t border-gray-200 pt-6">
          <div className="flex items-center gap-6">
            <button
              className={`flex items-center gap-2 text-sm transition ${
                content.likedByMe
                  ? "text-red-500"
                  : "text-gray-500 hover:text-red-500"
              }`}
            >
              <Heart
                size={19}
                fill={content.likedByMe ? "currentColor" : "none"}
              />

              {content.likeCount || 0}
            </button>

            <button className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-950">
              <Share2 size={19} />

              {content.shareCount || 0}
            </button>
          </div>

          <button className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-950">
            <Bookmark size={18} />
            Save
          </button>
        </div>
      </main>
    </div>
  );
};

export default ContentDetails;
