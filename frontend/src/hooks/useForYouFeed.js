import { useCallback, useEffect, useState } from "react";
import { getForYouFeed } from "../services/feed.api";

const itemKey = (item) => `${item.type}-${item.data.id}`;

// loadFeed(true) = pull-to-refresh style reload, matches HomeNavigation
const useForYouFeed = () => {
  const [items, setItems] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");

  const loadFeed = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) setRefreshing(true);
      else setLoading(true);
      setError("");

      const response = await getForYouFeed({ limit: 10 });
      setItems(response?.data?.items || []);
      setNextCursor(response?.data?.nextCursor || null);
    } catch (err) {
      setError(err?.response?.data?.message || "Unable to load your feed.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (!nextCursor || loadingMore || loading || refreshing) return;

    try {
      setLoadingMore(true);
      const response = await getForYouFeed({ cursor: nextCursor, limit: 10 });
      const incoming = response?.data?.items || [];

      setItems((previous) => {
        const seen = new Set(previous.map(itemKey));
        return [...previous, ...incoming.filter((i) => !seen.has(itemKey(i)))];
      });
      setNextCursor(response?.data?.nextCursor || null);
    } catch (err) {
      setError(err?.response?.data?.message || "Unable to load more.");
    } finally {
      setLoadingMore(false);
    }
  }, [nextCursor, loadingMore, loading, refreshing]);

  useEffect(() => {
    loadFeed();
  }, [loadFeed]);

  return {
    items,
    loading,
    refreshing,
    loadingMore,
    error,
    hasMore: Boolean(nextCursor),
    loadFeed,
    loadMore,
  };
};

export default useForYouFeed;