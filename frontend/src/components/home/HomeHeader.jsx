import { Crown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NotificationBell from "..//notification/NotificationBell";
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

const HomeHeader = ({ user, logout }) => {
  const navigate = useNavigate();

  const handleCreatorSwitch = () => {
    navigate("/creator/register");
  };

  return (
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
          {/* Become Creator */}
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

          {/* Creator Studio */}
          {user?.accountType === "CREATOR" && (
            <button
              type="button"
              onClick={() => navigate("/creator/create")}
              className="hidden items-center gap-2 rounded-xl bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 sm:flex"
            >
              <Sparkles size={16} />
              Creator Studio
            </button>
          )}
<NotificationBell />
          {/* Profile Info */}
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="hidden text-right sm:block"
          >
            <p className="text-sm font-semibold text-gray-900 transition hover:text-indigo-600">
              {user?.name || "User"}
            </p>

            <p className="text-xs text-gray-400">
              @{user?.username || "user"}
            </p>
          </button>

          {/* Profile Avatar */}
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-xs font-bold text-white transition hover:ring-4 hover:ring-indigo-100"
            aria-label="Open profile"
          >
            {getInitials(user?.name)}
          </button>

          {/* Logout */}
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
  );
};

export default HomeHeader;