import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Loader2,
  Share2,
  UserRound,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { getCreatorProfile } from "../../services/creator.api";

import {
  getFollowers,
  getFollowing,
  getReceivedRequests,
  getSentRequests,
} from "../../services/relationship.api";

import { useAuth } from "../../hooks/useAuth";
import useRelationship from "../../hooks/useRelationship";

import RelationshipButton from "../../components/relationship/RelationshipButton";

const CreatorProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const [creator, setCreator] = useState(null);

  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [receivedRequests, setReceivedRequests] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isOwnProfile = user?.id === userId;

  const loadRelationships = useCallback(async () => {
    if (isOwnProfile) return;

    const [
      followersResponse,
      followingResponse,
      sentResponse,
      receivedResponse,
    ] = await Promise.all([
      getFollowers(),
      getFollowing(),
      getSentRequests(),
      getReceivedRequests(),
    ]);

    setFollowers(
      followersResponse?.data?.followers || []
    );

    setFollowing(
      followingResponse?.data?.following || []
    );

    setSentRequests(
      sentResponse?.data?.requests || []
    );

    setReceivedRequests(
      receivedResponse?.data?.requests || []
    );
  }, [isOwnProfile]);

  const loadCreator = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await getCreatorProfile(userId);

      const creatorData =
        response?.data?.creator || null;

      setCreator(creatorData);

      if (!isOwnProfile) {
        await loadRelationships();
      }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Unable to load creator profile"
      );
    } finally {
      setLoading(false);
    }
  }, [userId, isOwnProfile, loadRelationships]);

  useEffect(() => {
    loadCreator();
  }, [loadCreator]);

  const relationship = useRelationship({
    targetUserId: userId,
    followers,
    following,
    sentRequests,
    receivedRequests,
    onChange: loadRelationships,
  });

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <Loader2
          size={28}
          className="animate-spin text-neutral-700"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-red-500">
            {error}
          </p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-4 text-sm font-medium text-neutral-700 hover:text-neutral-950"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  if (!creator) {
    return null;
  }

  const profileUser = creator.user;

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <button
            type="button"
            className="rounded-xl border border-neutral-200 bg-white p-2.5 text-neutral-600 transition hover:bg-neutral-50"
          >
            <Share2 size={18} />
          </button>
        </div>

        {/* Profile */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">

          {/* Cover */}
          <div className="relative h-48 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700">
            {creator.coverImage && (
              <img
                src={creator.coverImage}
                alt="Creator cover"
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* Main */}
          <div className="px-6 pb-8 sm:px-8">

            {/* Avatar */}
            <div className="-mt-14">
              <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-neutral-100 shadow-md">
                {profileUser?.profileImage ? (
                  <img
                    src={profileUser.profileImage}
                    alt={profileUser.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserRound
                    size={42}
                    className="text-neutral-400"
                  />
                )}
              </div>
            </div>

            {/* Identity + relationship */}
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-neutral-900">
                    {creator.displayName ||
                      profileUser?.name}
                  </h1>

                  {creator.isVerified && (
                    <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">
                      Verified
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm text-neutral-500">
                  @{profileUser?.username}
                </p>

                {creator.category && (
                  <span className="mt-3 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    {creator.category}
                  </span>
                )}
              </div>

              {!isOwnProfile && (
  <RelationshipButton
    status={relationship.status}
    loading={relationship.loading}
    onFollow={relationship.follow}
    onCancel={relationship.cancel}
    onAccept={relationship.accept}
    onReject={relationship.reject}
    onRemove={relationship.remove}
  />
)}
            </div>

            {/* Description */}
            {creator.description && (
              <p className="mt-6 max-w-2xl text-sm leading-6 text-neutral-600">
                {creator.description}
              </p>
            )}

            {/* Website */}
            {creator.website && (
              <a
                href={creator.website}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-950"
              >
                <ExternalLink size={15} />
                Visit website
              </a>
            )}

            {/* Stats */}
            <div className="mt-7 flex gap-10 border-t border-neutral-100 pt-6">
              <div>
                <p className="text-xl font-bold text-neutral-900">
                  {creator.followersCount ?? 0}
                </p>

                <p className="text-sm text-neutral-500">
                  Followers
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-neutral-900">
                  {creator.followingCount ?? 0}
                </p>

                <p className="text-sm text-neutral-500">
                  Following
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Content
          </h2>

          <p className="mt-2 text-sm text-neutral-500">
            Creator content will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;