import {
  Compass,
  Maximize2,
  RefreshCw,
  Search,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeNavigation = ({
  activeTab,
  setActiveTab,
  loadFeed,
  loading,
  refreshing,
  contents,
  handleFullScreen,
}) => {
  const navigate = useNavigate();

  return (
    <section className="mb-8">
      <div className="flex flex-col gap-3 rounded-2xl border border-black/[0.07] bg-white p-2 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("foryou")}
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
            onClick={() => setActiveTab("productive")}
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
  onClick={() => navigate("/search")}
  className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-500 transition hover:bg-gray-100 hover:text-gray-950"
>
  <Search size={16} />
  Search
</button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("profile");
              navigate("/profile");
            }}
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
              className={refreshing ? "animate-spin" : ""}
            />

            {refreshing ? "Refreshing..." : "Refresh"}
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
  );
};

export default HomeNavigation;