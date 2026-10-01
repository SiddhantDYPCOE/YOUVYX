
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getFeed } from "../../services/content.api";
import { useAuth } from "../../hooks/useAuth";

import ContentCard from "../../components/content/ContentCard";

import HomeHeader from "../../components/home/HomeHeader";
import HomeHero from "../../components/home/HomeHero";
import HomeNavigation from "../../components/home/HomeNavigation";
import FeedLoading from "../../components/home/FeedLoading";
import FeedError from "../../components/home/FeedError";
import FeedEmpty from "../../components/home/FeedEmpty";
import FullScreenReader from "../../components/home/FullScreenReader";

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

  /* -------------------------------------------------- */
  /* LOAD FEED */
  /* -------------------------------------------------- */

  const loadFeed = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const response = await getFeed();

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

  /* -------------------------------------------------- */
  /* INITIAL LOAD */
  /* -------------------------------------------------- */

  useEffect(() => {
    loadFeed();
  }, []);

  /* -------------------------------------------------- */
  /* FULL SCREEN KEYBOARD CONTROLS */
  /* -------------------------------------------------- */

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
            Math.max(contents.length - 1, 0)
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

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isFullScreen, contents.length]);

  /* -------------------------------------------------- */
  /* FULL SCREEN */
  /* -------------------------------------------------- */

  const handleFullScreen = () => {
    if (!contents.length) {
      return;
    }

    setCurrentContentIndex(0);
    setIsFullScreen(true);
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleNextContent = () => {
    setCurrentContentIndex((previous) =>
      Math.min(
        previous + 1,
        Math.max(contents.length - 1, 0)
      )
    );
  };

  const handlePreviousContent = () => {
    setCurrentContentIndex((previous) =>
      Math.max(previous - 1, 0)
    );
  };

  /* -------------------------------------------------- */
  /* FULL SCREEN READER */
  /* -------------------------------------------------- */

  if (
    isFullScreen &&
    !loading &&
    !error &&
    contents.length > 0
  ) {
    return (
      <FullScreenReader
        contents={contents}
        currentContentIndex={currentContentIndex}
        handleExitFullScreen={handleExitFullScreen}
        handleNextContent={handleNextContent}
        handlePreviousContent={handlePreviousContent}
      />
    );
  }

  /* -------------------------------------------------- */
  /* NORMAL HOME */
  /* -------------------------------------------------- */

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      {/* ------------------------------------------------ */}
      {/* HEADER */}
      {/* ------------------------------------------------ */}

      <HomeHeader
        user={user}
        logout={logout}
      />

      {/* ------------------------------------------------ */}
      {/* MAIN */}
      {/* ------------------------------------------------ */}

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        {/* Hero */}

        <HomeHero />

        {/* Navigation */}

        <HomeNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          loadFeed={loadFeed}
          loading={loading}
          refreshing={refreshing}
          contents={contents}
          handleFullScreen={handleFullScreen}
        />

        {/* ------------------------------------------------ */}
        {/* LOADING */}
        {/* ------------------------------------------------ */}

        {loading && <FeedLoading />}

        {/* ------------------------------------------------ */}
        {/* ERROR */}
        {/* ------------------------------------------------ */}

        {!loading && error && (
          <FeedError
            error={error}
            loadFeed={loadFeed}
            refreshing={refreshing}
          />
        )}

        {/* ------------------------------------------------ */}
        {/* EMPTY */}
        {/* ------------------------------------------------ */}

        {!loading &&
          !error &&
          contents.length === 0 && (
            <FeedEmpty
              loadFeed={loadFeed}
              refreshing={refreshing}
            />
          )}

        {/* ------------------------------------------------ */}
        {/* VERTICAL FEED */}
        {/* ------------------------------------------------ */}

        {!loading &&
          !error &&
          contents.length > 0 && (
            <section className="mx-auto max-w-4xl">
              {/* Feed heading */}

              <div className="mb-5 flex items-end justify-between">
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-gray-950">
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
              </div>

              {/* Scrollable feed */}

              <div className="h-[calc(100vh-13rem)] min-h-[500px] snap-y snap-mandatory overflow-y-auto overscroll-contain pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300">
                <div className="space-y-5 pb-8">
                  {contents.map((content) => (
                    <div
                      key={content.id}
                      className="snap-start"
                    >
                      <ContentCard
                        content={content}
                        onOpen={(contentId) =>
                          navigate(
                            `/content/${contentId}`
                          )
                        }
                      />
                    </div>
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
