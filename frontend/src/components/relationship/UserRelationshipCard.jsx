
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const getInitials = (name) => {
  if (!name) return "U";

  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const UserRelationshipCard = ({ user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  const handleProfileClick = () => {
    if (!user.id) return;

    if (user.accountType === "CREATOR") {
      navigate(`/creator/${user.id}`);
      return;
    }

    navigate(`/profile/${user.id}`);
  };

  return (
    <button
      type="button"
      onClick={handleProfileClick}
      className="flex w-full items-center gap-4 rounded-2xl border border-black/[0.07] bg-white p-4 text-left transition hover:border-indigo-100 hover:bg-gray-50"
    >
      {/* Avatar */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm font-bold text-gray-600">
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.name || "User"}
            className="h-full w-full object-cover"
          />
        ) : (
          getInitials(user.name)
        )}
      </div>

      {/* User Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-bold text-gray-950">
            {user.name}
          </p>

          {user.accountType === "CREATOR" && (
            <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-indigo-600">
              Creator
            </span>
          )}
        </div>

        <p className="mt-0.5 truncate text-xs text-gray-400">
          @{user.username}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition group-hover:text-gray-700">
        <UserRound size={16} />
      </div>
    </button>
  );
};

export default UserRelationshipCard;
