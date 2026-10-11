import {
  Compass,
  Maximize2,
  PlusSquare,
  RefreshCw,
  Search,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

// Change these paths if your routes differ
const NAV_ITEMS = [
  { id: "foryou", label: "For You", icon: Compass, path: "/feed" },
  { id: "productive", label: "Productive", icon: Sparkles, path: "/productive" },
  { id: "search", label: "Search", icon: Search, path: "/search" },
  { id: "profile", label: "Profile", icon: UserRound, path: "/profile" },
  { id: "create", label: "Create", icon: PlusSquare, path: "/create" },
];

const HomeNavigation = ({
  setActiveTab, 
  loadFeed, 
  loading = false,
  refreshing = false,
  contents = [],
  handleFullScreen, 
  onCreatePost, 
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Active tab comes from the URL, so it stays correct on refresh / back button
  const isActive = (path) =>
    pathname === path || pathname.startsWith(`${path}/`);

  const handleClick = (item) => {
    setActiveTab?.(item.id);

    if (item.id === "create" && onCreatePost) {
      onCreatePost();
      return;
    }

    navigate(item.path);
  };

  return (
    <section className="mb-6 sm:mb-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Navigation */}
        <nav
          aria-label="Main"
          className="flex w-full items-center gap-5 overflow-x-auto scrollbar-hide sm:w-auto sm:gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item)}
                aria-current={active ? "page" : undefined}
                className={`relative flex shrink-0 items-center gap-2 pb-2 text-sm font-semibold transition ${
                  active
                    ? "text-gray-950"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                <Icon size={16} />
                {item.label}

                {active && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gray-950" />
                )}
              </button>
            );
          })}
        </nav>

        {(loadFeed || handleFullScreen) && (
          <div className="flex items-center gap-1 self-end sm:self-auto">
            {loadFeed && (
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
            )}

            {handleFullScreen && (
              <button
                type="button"
                onClick={handleFullScreen}
                disabled={contents.length === 0 || loading || refreshing}
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Full screen"
                title="Full screen"
              >
                <Maximize2 size={17} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeNavigation;