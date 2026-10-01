
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  Crown,
  Edit3,
  Flame,
  Globe,
  Loader2,
  Mail,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getMe } from "../../services/auth.api";
import { getCreatorProfile } from "../../services/creator.api";
import {
  getFollowers,
  getFollowing,
} from "../../services/relationship.api";
import { getMyContent } from "../../services/content.api";

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

const formatDate = (date) => {
  if (!date) {
    return "Recently joined";
  }

  return new Date(date).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
};

const formatContentDate = (date) => {
  if (!date) {
    return "";
  }

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [creator, setCreator] = useState(null);

  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [contents, setContents] = useState([]);

  const [loading, setLoading] = useState(true);
  const [creatorLoading, setCreatorLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError("");

        // --------------------------------
        // Current User
        // --------------------------------

        const response = await getMe();

        const currentUser = response?.data?.user;

        if (!currentUser) {
          throw new Error(
            "Unable to retrieve your profile."
          );
        }

        setUser(currentUser);

        // --------------------------------
        // Creator Profile
        // --------------------------------

        if (currentUser.accountType === "CREATOR") {
          try {
            setCreatorLoading(true);

            const creatorResponse =
              await getCreatorProfile(currentUser.id);

            setCreator(
              creatorResponse?.data?.creator || null
            );
          } catch (creatorError) {
            console.error(
              "CREATOR PROFILE ERROR:",
              creatorError
            );
          } finally {
            setCreatorLoading(false);
          }
        }

        // --------------------------------
        // Followers + Following
        // --------------------------------

        try {
          const [
            followersResponse,
            followingResponse,
          ] = await Promise.all([
            getFollowers(),
            getFollowing(),
          ]);

          setFollowers(
            followersResponse?.data?.followers || []
          );

          setFollowing(
            followingResponse?.data?.following || []
          );
        } catch (relationshipError) {
          console.error(
            "RELATIONSHIP ERROR:",
            relationshipError
          );
        }

        // --------------------------------
        // My Content
        // --------------------------------

        try {
          setContentLoading(true);

          const contentResponse =
            await getMyContent();

          setContents(
            contentResponse?.data?.contents || []
          );
        } catch (contentError) {
          console.error(
            "CONTENT ERROR:",
            contentError
          );
        } finally {
          setContentLoading(false);
        }
      } catch (profileError) {
        console.error(
          "PROFILE ERROR:",
          profileError
        );

        setError(
          profileError?.response?.data?.message ||
            profileError?.message ||
            "Unable to load your profile."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  // --------------------------------
  // Loading
  // --------------------------------

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f8]">
        <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
          <Loader2
            size={20}
            className="animate-spin"
          />
          Loading your profile...
        </div>
      </div>
    );
  }

  // --------------------------------
  // Error
  // --------------------------------

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f8] px-5">
        <div className="w-full max-w-md rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
          <p className="font-semibold text-red-700">
            {error}
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-5 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const isCreator =
    user.accountType === "CREATOR";

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      {/* =====================================
          Header
      ====================================== */}

      <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-[#f7f7f8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-950"
          >
            <ArrowLeft size={17} />
            Back to Home
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-xl font-black tracking-tight text-gray-950"
          >
            YOUVYX
            <span className="text-indigo-600">.</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        {/* =====================================
            Profile Header
        ====================================== */}

        <section className="overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-sm">
          {/* Cover */}

          <div className="h-32 bg-gradient-to-r from-indigo-100 via-white to-indigo-50 sm:h-44" />

          <div className="px-6 pb-7 sm:px-8">
            <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
              {/* Avatar */}

              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-gray-950 text-2xl font-black text-white shadow-sm sm:h-28 sm:w-28">
                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  getInitials(user.name)
                )}
              </div>

              {/* Actions */}

              <div className="flex items-center gap-2">
                {isCreator ? (
                  <button
                    type="button"
                    onClick={() =>
                      navigate("/creator/create")
                    }
                    className="flex items-center gap-2 rounded-xl bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    <Edit3 size={16} />
                    Creator Studio
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      navigate("/creator/register")
                    }
                    className="flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-100"
                  >
                    <Crown size={16} />
                    Become a Creator
                  </button>
                )}
              </div>
            </div>

            {/* Name */}

            <div className="mt-5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-black tracking-tight text-gray-950">
                  {user.name}
                </h1>

                {isCreator && (
                  <span className="flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
                    <Crown size={12} />
                    Creator
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-gray-400">
                @{user.username}
              </p>

              {user.bio && (
                <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
                  {user.bio}
                </p>
              )}
            </div>

            {/* Followers / Following */}

            <div className="mt-7 flex items-center gap-8 border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={() =>
                  navigate("/profile/followers")
                }
                className="group text-left"
              >
                <div className="flex items-center gap-1.5">
                  <p className="text-lg font-black text-gray-950">
                    {followers.length}
                  </p>

                  <ChevronRight
                    size={15}
                    className="text-gray-300 transition group-hover:text-gray-600"
                  />
                </div>

                <p className="text-xs font-medium text-gray-500">
                  Followers
                </p>
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate("/profile/following")
                }
                className="group text-left"
              >
                <div className="flex items-center gap-1.5">
                  <p className="text-lg font-black text-gray-950">
                    {following.length}
                  </p>

                  <ChevronRight
                    size={15}
                    className="text-gray-300 transition group-hover:text-gray-600"
                  />
                </div>

                <p className="text-xs font-medium text-gray-500">
                  Following
                </p>
              </button>
            </div>
          </div>
        </section>

        {/* =====================================
            Creator Profile
        ====================================== */}

        {isCreator && (
          <section className="mt-6 rounded-3xl border border-black/[0.07] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                  Creator Profile
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-950">
                  {creator?.displayName ||
                    user.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  navigate("/creator/create")
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-gray-950"
                aria-label="Edit creator profile"
              >
                <Edit3 size={17} />
              </button>
            </div>

            {creatorLoading ? (
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                Loading creator information...
              </div>
            ) : creator ? (
              <>
                {creator.description && (
                  <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-600">
                    {creator.description}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  {creator.category && (
                    <span className="rounded-xl bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600">
                      {creator.category}
                    </span>
                  )}

                  {creator.website && (
                    <a
                      href={creator.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      <Globe size={14} />
                      Website
                    </a>
                  )}
                </div>
              </>
            ) : (
              <p className="mt-5 text-sm text-gray-400">
                Creator profile information is not
                available.
              </p>
            )}
          </section>
        )}

        {/* =====================================
            Your Content
        ====================================== */}

        <section className="mt-10">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-950">
                Your Content
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Content you have published on YOUVYX.
              </p>
            </div>

            {!contentLoading && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                {contents.length}{" "}
                {contents.length === 1
                  ? "post"
                  : "posts"}
              </span>
            )}
          </div>

          {/* Content Loading */}

          {contentLoading ? (
            <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-black/[0.07] bg-white">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Loading your content...
              </div>
            </div>
          ) : contents.length === 0 ? (
            /* Empty State */

            <div className="rounded-2xl border border-black/[0.07] bg-white px-6 py-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
                <Crown
                  size={20}
                  className="text-indigo-500"
                />
              </div>

              <p className="mt-4 text-sm font-semibold text-gray-900">
                No content yet
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Your published content will appear here.
              </p>

              {isCreator && (
                <button
                  type="button"
                  onClick={() =>
                    navigate("/creator/create")
                  }
                  className="mt-5 rounded-xl bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Open Creator Studio
                </button>
              )}
            </div>
          ) : (
            /* Content Grid */

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contents.map((content) => (
                <button
                  key={content.id}
                  type="button"
                  onClick={() =>
                    navigate(
                      `/content/${content.id}`
                    )
                  }
                  className="group overflow-hidden rounded-2xl border border-black/[0.07] bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
                >
                  {/* Content top */}

                  <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-4">
                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold capitalize text-indigo-600">
                      {content.genre?.name ||
                        "General"}
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      {content.type}
                    </span>
                  </div>

                  {/* Content body */}

                  <div className="px-5 py-5">
                    <h3 className="line-clamp-2 text-base font-bold text-gray-950 transition group-hover:text-indigo-600">
                      {content.title}
                    </h3>

                    {content.description && (
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
                        {content.description}
                      </p>
                    )}

                    {content.type === "VIDEO" &&
                      content.externalUrl && (
                        <div className="mt-4 rounded-xl bg-gray-50 px-3 py-2">
                          <p className="truncate text-xs font-medium text-gray-500">
                            Video content
                          </p>
                        </div>
                      )}
                  </div>

                  {/* Content footer */}

                  <div className="flex items-center justify-between border-t border-gray-100 px-5 py-4">
                    <span className="text-xs text-gray-400">
                      {formatContentDate(
                        content.createdAt
                      )}
                    </span>

                    <span className="text-xs font-semibold text-indigo-600 transition group-hover:translate-x-0.5">
                      View content →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* =====================================
            Account Information
        ====================================== */}

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-gray-950">
            Account
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Email */}

            <div className="rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
                <Mail size={18} />
              </div>

              <p className="mt-4 text-xs font-medium text-gray-400">
                Email
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-gray-900">
                {user.email}
              </p>
            </div>

            {/* Joined */}

            <div className="rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
                <CalendarDays size={18} />
              </div>

              <p className="mt-4 text-xs font-medium text-gray-400">
                Member since
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {formatDate(user.createdAt)}
              </p>
            </div>

            {/* Streak */}

            <div className="rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Flame size={18} />
              </div>

              <p className="mt-4 text-xs font-medium text-gray-400">
                Current streak
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {user.streak || 0} days
              </p>
            </div>

            {/* Account Type */}

            <div className="rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <UserRound size={18} />
              </div>

              <p className="mt-4 text-xs font-medium text-gray-400">
                Account type
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {isCreator
                  ? "Creator"
                  : "Normal User"}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;

