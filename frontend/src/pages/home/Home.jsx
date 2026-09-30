
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Bookmark,
  ChevronRight,
  Clock3,
  Crown,
  Heart,
  Loader2,
  Maximize2,
  Minimize2,
  RefreshCw,
  Share2,
  Sparkles,
  UserRound,
  Compass,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getFeed } from "../../services/content.api";
import { useAuth } from "../../hooks/useAuth";
import ContentCard from "../../components/content/ContentCard";



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



const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const [activeTab, setActiveTab] = useState("productive");

  const [isFullScreen, setIsFullScreen] = useState(false);

  const [currentContentIndex, setCurrentContentIndex] =
    useState(0);

  const loadFeed = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

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

      if (isRefresh) {
        setCurrentContentIndex(0);
      }
    } catch (error) {
      console.error("FEED ERROR:", error);

      setError(
        error?.response?.data?.message ||
          "Unable to load your feed."
      );
    } finally {
      if (isRefresh) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadFeed();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isFullScreen) {
        return;
      }

      if (event.key === "Escape") {
        setIsFullScreen(false);
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setCurrentContentIndex((previous) =>
          Math.min(
            previous + 1,
            contents.length - 1
          )
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        setCurrentContentIndex((previous) =>
          Math.max(previous - 1, 0)
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isFullScreen, contents.length]);

  const handleCreatorSwitch = () => {
    navigate("/creator/register");
  };

  const handleFullScreen = () => {
    setIsFullScreen(true);
    setCurrentContentIndex(0);
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleNextContent = () => {
    setCurrentContentIndex((previous) =>
      Math.min(
        previous + 1,
        contents.length - 1
      )
    );
  };

  const handlePreviousContent = () => {
    setCurrentContentIndex((previous) =>
      Math.max(previous - 1, 0)
    );
  };

  /*
  |--------------------------------------------------------------------------
  | FULL SCREEN READING MODE
  |--------------------------------------------------------------------------
  */

  if (
    isFullScreen &&
    !loading &&
    !error &&
    contents.length > 0
  ) {
    const currentContent =
      contents[currentContentIndex];

    return (
      <div className="fixed inset-0 z-[100] flex h-screen w-screen flex-col bg-[#f7f7f8]">
        {/* Full screen header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/[0.06] bg-white/90 px-5 backdrop-blur-xl sm:px-8">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-xl font-black tracking-tight text-gray-950"
          >
            YOUVYX
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-medium text-gray-400 sm:block">
              {currentContentIndex + 1} /{" "}
              {contents.length}
            </span>

            <button
              type="button"
              onClick={handleExitFullScreen}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:text-gray-950"
            >
              <Minimize2 size={16} />

              <span className="hidden sm:inline">
                Exit Full Screen
              </span>
            </button>
          </div>
        </header>

        {/* Full screen content */}
        <main className="relative flex-1 overflow-y-auto">
          <div className="mx-auto flex min-h-full max-w-4xl items-start justify-center px-5 py-10 sm:px-8 sm:py-16">
            <div className="w-full">
              <ContentCard
                content={currentContent}
                onOpen={(id) =>
                  navigate(`/content/${id}`)
                }
              />
            </div>
          </div>
        </main>

        {/* Up / Down controls */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          <button
            type="button"
            onClick={handlePreviousContent}
            disabled={currentContentIndex === 0}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Previous content"
          >
            <ArrowUp size={18} />
          </button>

          <button
            type="button"
            onClick={handleNextContent}
            disabled={
              currentContentIndex ===
              contents.length - 1
            }
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Next content"
          >
            <ArrowDown size={18} />
          </button>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-6 hidden text-xs text-gray-400 lg:block">
          ↑ ↓ to navigate · Esc to exit
        </div>
      </div>
    );
  }

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
            {user?.accountType !== "CREATOR" && (
              <button
                type="button"
                onClick={handleCreatorSwitch}
                className="hidden items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300 hover:bg-indigo-100 sm:flex"
              >
                <Crown size={16} />
                Become a Creator
              </button>
            )}

            {user?.accountType === "CREATOR" && (
              <button
                type="button"
                onClick={() =>
                  navigate("/creator/create")
                }
                className="hidden items-center gap-2 rounded-xl bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 sm:flex"
              >
                <Sparkles size={16} />
                Creator Studio
              </button>
            )}

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

            <button
              type="button"
              onClick={logout}
              className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        {/* Hero */}
        <section className="mb-8">
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
            Content selected around the interests you
            chose. No endless noise — just things worth
            your attention.
          </p>
        </section>

        {/* Navigation */}
        <section className="mb-8">
          <div className="flex flex-col gap-3 rounded-2xl border border-black/[0.07] bg-white p-2 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-1">
              <button
                type="button"
                onClick={() =>
                  setActiveTab("foryou")
                }
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  activeTab === "foryou"
                    ? "bg-gray-950 text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-950"
                }`}
              >
                <Compass size={16} />
                For You
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveTab("productive")
                }
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  activeTab === "productive"
                    ? "bg-gray-950 text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-950"
                }`}
              >
                <Sparkles size={16} />
                Productive Feed
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate("/profile")
                }
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  activeTab === "profile"
                    ? "bg-gray-950 text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-950"
                }`}
              >
                <UserRound size={16} />
                Profile
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => loadFeed(true)}
                disabled={loading || refreshing}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
              >
                <RefreshCw
                  size={16}
                  className={
                    refreshing
                      ? "animate-spin"
                      : ""
                  }
                />

                {refreshing
                  ? "Refreshing..."
                  : "Refresh"}
              </button>

              <button
                type="button"
                onClick={handleFullScreen}
                disabled={
                  contents.length === 0 ||
                  loading ||
                  refreshing
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
              >
                <Maximize2 size={16} />
                Full Screen
              </button>
            </div>
          </div>
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
              onClick={() => loadFeed(true)}
              disabled={refreshing}
              className="mt-4 flex mx-auto items-center gap-2 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
            >
              <RefreshCw
                size={15}
                className={
                  refreshing
                    ? "animate-spin"
                    : ""
                }
              />

              Try again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          contents.length === 0 && (
            <div className="rounded-3xl border border-black/[0.07] bg-white px-6 py-16 text-center shadow-sm">
              <Sparkles
                size={28}
                className="mx-auto text-indigo-500"
              />

              <h2 className="mt-5 text-xl font-bold text-gray-950">
                Your feed is waiting
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                There isn't any content for your
                selected interests yet. Try selecting
                different genres or check back later.
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    navigate("/genres")
                  }
                  className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Change interests
                </button>

                <button
                  type="button"
                  onClick={() =>
                    loadFeed(true)
                  }
                  disabled={refreshing}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
                >
                  <RefreshCw
                    size={15}
                    className={
                      refreshing
                        ? "animate-spin"
                        : ""
                    }
                  />

                  Refresh
                </button>
              </div>
            </div>
          )}

        {/* Productive Feed */}
        {!loading &&
          !error &&
          contents.length > 0 && (
            <section>
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-950">
                    Productive Feed
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    {contents.length}{" "}
                    {contents.length === 1
                      ? "piece"
                      : "pieces"}{" "}
                    of content
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    loadFeed(true)
                  }
                  disabled={refreshing}
                  className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-gray-500 transition hover:bg-white hover:text-gray-950 sm:flex"
                >
                  <RefreshCw
                    size={15}
                    className={
                      refreshing
                        ? "animate-spin"
                        : ""
                    }
                  />

                  Refresh feed
                </button>
              </div>

              {/* Scrollable feed */}
              <div className="max-h-[calc(100vh-390px)] min-h-[400px] overflow-y-auto overscroll-contain pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300">
                <div className="grid gap-6 pb-8 lg:grid-cols-2">
                  {contents.map((content) => (
                    <ContentCard
                      key={content.id}
                      content={content}
                      onOpen={(id) =>
                        navigate(
                          `/content/${id}`
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            </section>
          )}
      </main>
    </div>
  );
};

export default Home;
