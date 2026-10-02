import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  Loader2,
  UserRound,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { getPublicUserProfile } from "../../services/auth.api";

import {
  getFollowersByUserId,
  getFollowingByUserId,
  getReceivedRequests,
  getSentRequests,
} from "../../services/relationship.api";

import { useAuth } from "../../hooks/useAuth";
import useRelationship from "../../hooks/useRelationship";

import RelationshipButton from "../../components/relationship/RelationshipButton";

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

const PublicUserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth();

  const [profile, setProfile] = useState(null);

  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const [loading, setLoading] = useState(true);
  const [relationshipLoading, setRelationshipLoading] =
    useState(false);

  const [error, setError] = useState("");

  const isOwnProfile = user?.id === userId;

  const loadProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getPublicUserProfile(userId);

      const userData = response?.data?.user;

      if (!userData) {
        throw new Error("User profile not found");
      }

      setProfile(userData);
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to load profile"
      );
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const loadRelationships = useCallback(async () => {


    try {
      setRelationshipLoading(true);

      const [
        followersResponse,
        followingResponse,
      ] = await Promise.all([
        getFollowersByUserId(userId),
        getFollowingByUserId(userId),
        
      ]);

      setFollowers(
        followersResponse?.data?.followers || []
      );

      setFollowing(
        followingResponse?.data?.following || []
      );

      
    } finally {
      setRelationshipLoading(false);
    }
  }, [isAuthenticated, userId]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  useEffect(() => {
    loadRelationships();
  }, [loadRelationships]);


const relationship = useRelationship({
  targetUserId: userId,
  onChange: loadRelationships,
});



  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <Loader2
          size={28}
          className="animate-spin text-indigo-600"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4">
        <div className="rounded-2xl border border-gray-200 bg-white px-8 py-10 text-center shadow-sm">
          <UserRound
            size={40}
            className="mx-auto mb-4 text-gray-300"
          />

          <h2 className="text-lg font-semibold text-gray-900">
            Profile not found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {error}
          </p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-6 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center px-4 py-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Profile Card */}
        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

          <div className="px-6 pb-7">
            {/* Avatar + Actions */}
            <div className="-mt-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end">
                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 text-2xl font-bold text-gray-600 shadow-md">
                  {profile.profileImage ? (
                    <img
                      src={profile.profileImage}
                      alt={profile.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    getInitials(profile.name)
                  )}
                </div>
              </div>

              <div className="flex items-center">
                {isOwnProfile ? (
                  <button
                    type="button"
                    onClick={() => navigate("/profile")}
                    className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                  >
                    View My Profile
                  </button>
                ) : isAuthenticated ? (
                  <RelationshipButton
                    status={relationship.status}
                    loading={
                      relationship.loading ||
                      relationshipLoading
                    }
                    onFollow={relationship.follow}
                    onCancel={relationship.cancel}
                    onAccept={relationship.accept}
                    onReject={relationship.reject}
                    onRemove={relationship.remove}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      navigate("/login")
                    }
                    className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>

            {/* User Information */}
            <div className="mt-5">
              <h1 className="text-2xl font-bold text-gray-950">
                {profile.name}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                @{profile.username}
              </p>

              {profile.bio && (
                <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-600">
                  {profile.bio}
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="mt-7 flex items-center gap-8 border-t border-gray-100 pt-6">
              <div>
                <p className="text-lg font-bold text-gray-950">
                  {followers.length}
                </p>

                <p className="text-xs text-gray-500">
                  Followers
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-gray-950">
                  {following.length}
                </p>

                <p className="text-xs text-gray-500">
                  Following
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <UserRound
            size={32}
            className="mx-auto text-gray-300"
          />

          <h2 className="mt-3 text-base font-semibold text-gray-900">
            No content yet
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            This user's posts and activity will appear here.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PublicUserProfile;