
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

  const tabs = [
    {
      id: "foryou",
      label: "For You",
      icon: Compass,
    },
    {
      id: "productive",
      label: "Productive",
      icon: Sparkles,
    },
  ];

  return (
    <section className="mb-6 sm:mb-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        {/* Navigation */}
        <nav className="flex w-full items-center gap-5 overflow-x-auto scrollbar-hide sm:w-auto sm:gap-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex shrink-0 items-center gap-2 pb-2 text-sm font-semibold transition ${
                  isActive
                    ? "text-gray-950"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                <Icon size={16} />
                {tab.label}

                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gray-950" />
                )}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => navigate("/search")}
            className="flex shrink-0 items-center gap-2 pb-2 text-sm font-semibold text-gray-400 transition hover:text-gray-700"
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
            className={`relative flex shrink-0 items-center gap-2 pb-2 text-sm font-semibold transition ${
              activeTab === "profile"
                ? "text-gray-950"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            <UserRound size={16} />
            Profile

            {activeTab === "profile" && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gray-950" />
            )}
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => loadFeed(true)}
            disabled={loading || refreshing}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Refresh feed"
            title="Refresh feed"
          >
            <RefreshCw
              size={17}
              className={refreshing ? "animate-spin" : ""}
            />
          </button>

          <button
            type="button"
            onClick={handleFullScreen}
            disabled={
              contents.length === 0 ||
              loading ||
              refreshing
            }
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Full screen"
            title="Full screen"
          >
            <Maximize2 size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeNavigation;
