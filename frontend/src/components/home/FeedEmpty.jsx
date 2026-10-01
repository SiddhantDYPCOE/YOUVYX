import { RefreshCw, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeedEmpty = ({ loadFeed, refreshing }) => {
  const navigate = useNavigate();

  return (
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

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => navigate("/genres")}
          className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Change interests
        </button>

        <button
          type="button"
          onClick={() => loadFeed(true)}
          disabled={refreshing}
          className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
        >
          <RefreshCw
            size={15}
            className={refreshing ? "animate-spin" : ""}
          />

          Refresh
        </button>
      </div>
    </div>
  );
};

export default FeedEmpty;