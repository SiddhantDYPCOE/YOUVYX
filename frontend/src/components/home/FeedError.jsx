import { RefreshCw } from "lucide-react";

const FeedError = ({ error, loadFeed, refreshing }) => {
  return (
    <div className="rounded-3xl border border-red-100 bg-red-50 p-6 text-center">
      <p className="font-semibold text-red-700">
        {error}
      </p>

      <button
        type="button"
        onClick={() => loadFeed(true)}
        disabled={refreshing}
        className="mx-auto mt-4 flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
      >
        <RefreshCw
          size={15}
          className={refreshing ? "animate-spin" : ""}
        />

        Try again
      </button>
    </div>
  );
};

export default FeedError;