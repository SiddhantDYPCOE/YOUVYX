
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Loader2,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getFollowing } from "../../services/relationship.api";
import UserRelationshipCard from "../../components/relationship/UserRelationshipCard";

const Following = () => {
  const navigate = useNavigate();

  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFollowing = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getFollowing();

        setFollowing(
          response?.data?.following || []
        );
      } catch (error) {
        console.error(
          "FOLLOWING ERROR:",
          error
        );

        setError(
          error?.response?.data?.message ||
            "Unable to load following."
        );
      } finally {
        setLoading(false);
      }
    };

    loadFollowing();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      {/* Header */}

      <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-[#f7f7f8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-3xl items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-950"
          >
            <ArrowLeft size={17} />
            Back to Profile
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

      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Page heading */}

        <div className="mb-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <UserRound size={20} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight text-gray-950">
                Following
              </h1>

              <p className="mt-0.5 text-sm text-gray-400">
                People you follow.
              </p>
            </div>
          </div>
        </div>

        {/* Loading */}

        {loading && (
          <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-black/[0.07] bg-white">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <Loader2
                size={18}
                className="animate-spin"
              />
              Loading following...
            </div>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-10 text-center">
            <p className="text-sm font-semibold text-red-700">
              {error}
            </p>

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="mt-5 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Back to Profile
            </button>
          </div>
        )}

        {/* Empty */}

        {!loading &&
          !error &&
          following.length === 0 && (
            <div className="rounded-2xl border border-black/[0.07] bg-white px-6 py-14 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <UserRound
                  size={20}
                  className="text-gray-400"
                />
              </div>

              <p className="mt-4 text-sm font-semibold text-gray-900">
                Not following anyone
              </p>

              <p className="mt-1 text-sm text-gray-400">
                People you follow will appear here.
              </p>
            </div>
          )}

        {/* Following */}

        {!loading &&
          !error &&
          following.length > 0 && (
            <div className="space-y-3">
              {following.map((user) => (
                <UserRelationshipCard
                  key={user.id}
                  user={user}
                />
              ))}
            </div>
          )}
      </main>
    </div>
  );
};

export default Following;

