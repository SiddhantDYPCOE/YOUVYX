import { useCallback, useState } from "react";

import {
  createRelationship,
  cancelRequest,
  removeRelationship,
  rejectRelationship,
  acceptRelationship,
} from "../services/relationship.api";

const getStatus = ({
  targetUserId,
  followers,
  following,
  sentRequests,
  receivedRequests,
}) => {
  const followingUser = following.find(
    (user) => user.id === targetUserId
  );

  const followerUser = followers.find(
    (user) => user.id === targetUserId
  );

  const sentRequest = sentRequests.find(
    (request) =>
      request.receiver?.id === targetUserId
  );

  const receivedRequest = receivedRequests.find(
    (request) =>
      request.sender?.id === targetUserId
  );

  // Incoming request
  if (receivedRequest) {
    return {
      status: "REQUEST_RECEIVED",
      relationshipId: receivedRequest.id,
    };
  }

  // Both users follow each other
  if (followingUser && followerUser) {
    return {
      status: "MUTUAL",
      relationshipId:
        followingUser.relationshipId ||
        followerUser.relationshipId ||
        null,
    };
  }

  // Current user follows target
  if (followingUser) {
    return {
      status: "FOLLOWING",
      relationshipId:
        followingUser.relationshipId || null,
    };
  }

  // Current user sent request
  if (sentRequest) {
    return {
      status: "REQUEST_SENT",
      relationshipId: sentRequest.id,
    };
  }

  return {
    status: "NONE",
    relationshipId: null,
  };
};

const useRelationship = ({
  targetUserId,
  followers = [],
  following = [],
  sentRequests = [],
  receivedRequests = [],
  onChange,
}) => {
  const [loading, setLoading] = useState(false);

  const relationship = getStatus({
    targetUserId,
    followers,
    following,
    sentRequests,
    receivedRequests,
  });

  const follow = useCallback(async () => {
    try {
      setLoading(true);

      await createRelationship(targetUserId);

      await onChange?.();
    } finally {
      setLoading(false);
    }
  }, [targetUserId, onChange]);

  const cancel = useCallback(async () => {
    if (!relationship.relationshipId) return;

    try {
      setLoading(true);

      await cancelRequest(
        relationship.relationshipId
      );

      await onChange?.();
    } finally {
      setLoading(false);
    }
  }, [relationship.relationshipId, onChange]);

  const accept = useCallback(async () => {
    if (!relationship.relationshipId) return;

    try {
      setLoading(true);

      await acceptRelationship(
        relationship.relationshipId
      );

      await onChange?.();
    } finally {
      setLoading(false);
    }
  }, [relationship.relationshipId, onChange]);

  const reject = useCallback(async () => {
    if (!relationship.relationshipId) return;

    try {
      setLoading(true);

      await rejectRelationship(
        relationship.relationshipId
      );

      await onChange?.();
    } finally {
      setLoading(false);
    }
  }, [relationship.relationshipId, onChange]);

  const remove = useCallback(async () => {
    try {
      setLoading(true);

      await removeRelationship(targetUserId);

      await onChange?.();
    } finally {
      setLoading(false);
    }
  }, [targetUserId, onChange]);

  return {
    status: relationship.status,
    relationshipId: relationship.relationshipId,
    loading,

    follow,
    cancel,
    accept,
    reject,
    remove,
  };
};

export default useRelationship;