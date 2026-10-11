import { useEffect, useRef } from "react";
import { Loader2, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ForYouFeedListCard from "./ForYouFeedListCard";

const ForYouFeedList = ({
  items,
  loading,
  loadingMore,
  error,
  hasMore,
  loadMore,
  loadFeed,
  onToggleLike, // optional: (item, nextLiked) => Promise
}) => {
  const navigate = useNavigate();
  const sentinelRef = useRef(null);

  // Infinite scroll
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: "600px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, loadMore, items.length]);

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 py-16 text-sm text-gray-400">
        <Loader2 size={18} className="animate-spin" />
        Loading your feed...
      </div>
    );
  }

  if (error && items.length === 0) {
    return (
      <div className="py-16 text-center">
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
        <button
          type="button"
          onClick={() => loadFeed()}
          className="mt-3 text-sm font-semibold text-gray-700 hover:text-gray-950"
        >
          Try again
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-[470px] flex-col items-center rounded-3xl border border-dashed border-gray-200 px-6 py-14 text-center">
        <UserPlus size={26} className="text-gray-300" />
        <h3 className="mt-3 text-base font-bold text-gray-900">
          Nothing here yet
        </h3>
        <p className="mt-1 max-w-sm text-sm text-gray-500">
          Your feed shows posts from your friends and content from creators you
          follow. Add friends or follow creators to get started.
        </p>
        <button
          type="button"
          onClick={() => navigate("/search")}
          className="mt-5 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          Find people
        </button>
      </div>
    );
  }

  return (
    // Instagram-width single column
    <div className="mx-auto flex w-full max-w-[470px] flex-col gap-4">
      {items.map((item) => (
        <ForYouFeedListCard
          key={`${item.type}-${item.data.id}`}
          item={item}
          onToggleLike={onToggleLike}
        />
      ))}

      {error && (
        <p role="alert" className="text-center text-sm text-red-600">
          {error}
        </p>
      )}

      {hasMore && <div ref={sentinelRef} className="h-px" />}

      {loadingMore && (
        <div className="flex justify-center py-4 text-gray-400">
          <Loader2 size={18} className="animate-spin" />
        </div>
      )}

      {!hasMore && (
        <p className="py-4 text-center text-xs text-gray-400">
          You're all caught up.
        </p>
      )}
    </div>
  );
};

export default ForYouFeedList;