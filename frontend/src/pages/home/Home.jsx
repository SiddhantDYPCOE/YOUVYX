
import { useEffect, useState } from "react";
import {
  Bookmark,
  ChevronRight,
  Clock3,
  Heart,
  Loader2,
  Share2,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getFeed } from "../../services/content.api";
import { useAuth } from "../../hooks/useAuth";

const formatDate = (date) => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

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
  // Prevent the component from crashing if the API ever
  // returns a null/undefined item.
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

  const handleLike = (event) => {
    event.stopPropagation();

    // Temporary UI interaction.
    // Real like API will be connected when we build engagement.
    setLiked((previous) => {
      setLikeCount((count) =>
        Math.max(0, count + (previous ? -1 : 1))
      );

      return !previous;
    });
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
          <button
            type="button"
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-sm transition ${
              liked
                ? "text-red-500"
                : "text-gray-400 hover:text-gray-900"
            }`}
          >
            <Heart
              size={17}
              fill={liked ? "currentColor" : "none"}
            />

            {likeCount}
          </button>

          <button
            type="button"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-gray-900"
          >
            <Share2 size={17} />

            {Number(content.shareCount) || 0}
          </button>
        </div>

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

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFeed = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getFeed();

        console.log("FEED:", response);
        console.log(
          "CONTENTS:",
          response?.data?.contents
        );

        const feedContents = Array.isArray(
          response?.data?.contents
        )
          ? response.data.contents
          : [];

        setContents(feedContents);
      } catch (error) {
        console.error("FEED ERROR:", error);

        setError(
          error?.response?.data?.message ||
            "Unable to load your feed."
        );
      } finally {
        setLoading(false);
      }
    };

    loadFeed();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-[#f7f7f8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-2xl font-black tracking-tight text-gray-950"
          >
            YOUVYX
          </button>

          {/* User */}
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-gray-900">
                {user?.name || "User"}
              </p>

              <p className="text-xs text-gray-400">
                @{user?.username || "user"}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-xs font-bold text-white">
              {getInitials(user?.name)}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        {/* Hero */}
        <section className="mb-10">
          <div className="mb-3 flex items-center gap-2 text-indigo-600">
            <Sparkles size={17} />

            <span className="text-sm font-semibold">
              Your personalized feed
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Learn something worth knowing.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
            Content selected around the interests you chose.
            No endless noise — just things worth your attention.
          </p>
        </section>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
              <Loader2
                className="animate-spin"
                size={20}
              />

              Building your feed...
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-3xl border border-red-100 bg-red-50 p-6 text-center">
            <p className="font-semibold text-red-700">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Try again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && contents.length === 0 && (
          <div className="rounded-3xl border border-black/[0.07] bg-white px-6 py-16 text-center shadow-sm">
            <Sparkles
              size={28}
              className="mx-auto text-indigo-500"
            />

            <h2 className="mt-5 text-xl font-bold text-gray-950">
              Your feed is waiting
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              There isn't any content for your selected interests
              yet. Try selecting different genres or check back
              later.
            </p>

            <button
              type="button"
              onClick={() => navigate("/genres")}
              className="mt-6 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Change interests
            </button>
          </div>
        )}

        {/* Feed */}
        {!loading && !error && contents.length > 0 && (
          <div className="grid gap-6 lg:grid-cols-2">
            {contents.map((content) => (
              <ContentCard
                key={content?.id || Math.random()}
                content={content}
                onOpen={(id) => navigate(`/content/${id}`)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;

