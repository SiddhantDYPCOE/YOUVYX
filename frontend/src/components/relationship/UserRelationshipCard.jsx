
import { ChevronRight, Crown, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const UserRelationshipCard = ({ user }) => {
  const navigate = useNavigate();

  const isCreator =
    user?.accountType === "CREATOR";

  const handleClick = () => {
    if (!user?.id) return;

    if (isCreator) {
      navigate(`/creator/${user.id}`);
      return;
    }

    navigate(`/user/${user.id}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group flex w-full items-center gap-4 rounded-2xl border border-black/[0.07] bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
    >
      {/* Avatar */}

      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-950 text-sm font-bold text-white">
        {user?.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.name}
            className="h-full w-full object-cover"
          />
        ) : (
          getInitials(user?.name)
        )}
      </div>

      {/* User Info */}

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-sm font-bold text-gray-950 group-hover:text-indigo-600">
            {user?.name || "Unknown User"}
          </h3>

          {isCreator && (
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600">
              <Crown size={10} />
              Creator
            </span>
          )}
        </div>

        <p className="mt-0.5 truncate text-xs text-gray-400">
          @{user?.username || "user"}
        </p>

        {user?.bio && (
          <p className="mt-2 line-clamp-1 text-xs text-gray-500">
            {user.bio}
          </p>
        )}
      </div>

      {/* Arrow */}

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">
        <ChevronRight size={17} />
      </div>
    </button>
  );
};

export default UserRelationshipCard;

