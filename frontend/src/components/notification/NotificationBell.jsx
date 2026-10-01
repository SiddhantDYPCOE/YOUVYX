
import { useCallback, useEffect, useState } from "react";
import {
  Bell,
  Check,
  Loader2,
  UserRound,
  X,
} from "lucide-react";

import {
  acceptRelationship,
  getReceivedRequests,
  rejectRelationship,
} from "../../services/relationship.api";

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

const NotificationBell = () => {
  const [requests, setRequests] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null);

  const loadRequests = useCallback(async () => {
    try {
      setLoading(true);

      const response =
        await getReceivedRequests();

      setRequests(
        response?.data?.requests || []
      );
    } catch (error) {
      console.error(
        "Failed to load relationship requests:",
        error
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  const handleAccept = async (relationshipId) => {
    try {
      setActionId(relationshipId);

      await acceptRelationship(relationshipId);

      setRequests((current) =>
        current.filter(
          (request) =>
            request.id !== relationshipId
        )
      );
    } catch (error) {
      console.error(
        "Failed to accept relationship:",
        error
      );
    } finally {
      setActionId(null);
    }
  };

  const handleReject = async (relationshipId) => {
    try {
      setActionId(relationshipId);

      await rejectRelationship(relationshipId);

      setRequests((current) =>
        current.filter(
          (request) =>
            request.id !== relationshipId
        )
      );
    } catch (error) {
      console.error(
        "Failed to reject relationship:",
        error
      );
    } finally {
      setActionId(null);
    }
  };

  return (
    <div className="relative">
      {/* Bell */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:border-gray-300 hover:bg-gray-50 hover:text-gray-950"
        aria-label="Notifications"
      >
        <Bell size={19} />

        {requests.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white ring-2 ring-[#f7f7f8]">
            {requests.length > 9
              ? "9+"
              : requests.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-12 z-50 w-[340px] overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <div>
              <h3 className="text-sm font-bold text-gray-950">
                Notifications
              </h3>

              <p className="mt-0.5 text-xs text-gray-400">
                {requests.length > 0
                  ? `${requests.length} pending request${
                      requests.length === 1
                        ? ""
                        : "s"
                    }`
                  : "You're all caught up"}
              </p>
            </div>

            {loading && (
              <Loader2
                size={16}
                className="animate-spin text-gray-400"
              />
            )}
          </div>

          {/* Requests */}
          <div className="max-h-[420px] overflow-y-auto">
            {!loading && requests.length === 0 && (
              <div className="px-6 py-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Bell
                    size={20}
                    className="text-gray-400"
                  />
                </div>

                <p className="mt-3 text-sm font-semibold text-gray-900">
                  No new requests
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  New relationship requests will appear here.
                </p>
              </div>
            )}

            {requests.map((request) => {
              const sender = request.sender;

              const isProcessing =
                actionId === request.id;

              return (
                <div
                  key={request.id}
                  className="border-b border-gray-100 px-4 py-4 last:border-b-0"
                >
                  <div className="flex gap-3">
                    {/* Avatar */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                      {sender?.profileImage ? (
                        <img
                          src={sender.profileImage}
                          alt={sender.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        getInitials(sender?.name)
                      )}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">
                          {sender?.name || "Someone"}
                        </span>{" "}
                        wants to connect with you.
                      </p>

                      {sender?.username && (
                        <p className="mt-0.5 text-xs text-gray-400">
                          @{sender.username}
                        </p>
                      )}

                      {/* Actions */}
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() =>
                            handleAccept(request.id)
                          }
                          className="flex items-center gap-1.5 rounded-lg bg-gray-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {isProcessing ? (
                            <Loader2
                              size={13}
                              className="animate-spin"
                            />
                          ) : (
                            <Check size={13} />
                          )}

                          Accept & Mutual
                        </button>

                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() =>
                            handleReject(request.id)
                          }
                          className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <X size={13} />
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
