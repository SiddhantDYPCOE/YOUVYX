
import { useCallback, useEffect, useState } from "react";

import {
  createRelationship,
  cancelRequest,
  removeRelationship,
  rejectRelationship,
  acceptRelationship,
  getRelationshipStatus,
} from "../services/relationship.api";

const useRelationship = ({
  targetUserId,
  onChange,
}) => {
  const [status, setStatus] = useState("NONE");
  const [relationshipId, setRelationshipId] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadRelationshipStatus = useCallback(async () => {
    if (!targetUserId) return;

    try {
      setLoading(true);

      const response =
        await getRelationshipStatus(targetUserId);

      const relationship =
        response?.data?.relationship;

      setStatus(
        relationship?.status || "NONE"
      );

      setRelationshipId(
        relationship?.relationshipId || null
      );
    } finally {
      setLoading(false);
    }
  }, [targetUserId]);

  useEffect(() => {
    loadRelationshipStatus();
  }, [loadRelationshipStatus]);

  const refresh = useCallback(async () => {
    await loadRelationshipStatus();
    await onChange?.();
  }, [loadRelationshipStatus, onChange]);

  const follow = useCallback(async () => {
    try {
      setLoading(true);

      await createRelationship(targetUserId);

      await refresh();
    } finally {
      setLoading(false);
    }
  }, [targetUserId, refresh]);

  const cancel = useCallback(async () => {
    if (!relationshipId) return;

    try {
      setLoading(true);

      await cancelRequest(relationshipId);

      await refresh();
    } finally {
      setLoading(false);
    }
  }, [relationshipId, refresh]);

  const remove = useCallback(async () => {
    try {
      setLoading(true);

      await removeRelationship(targetUserId);

      await refresh();
    } finally {
      setLoading(false);
    }
  }, [targetUserId, refresh]);

  const accept = useCallback(async () => {
    if (!relationshipId) return;

    try {
      setLoading(true);

      await acceptRelationship(relationshipId);

      await refresh();
    } finally {
      setLoading(false);
    }
  }, [relationshipId, refresh]);

  const reject = useCallback(async () => {
    if (!relationshipId) return;

    try {
      setLoading(true);

      await rejectRelationship(relationshipId);

      await refresh();
    } finally {
      setLoading(false);
    }
  }, [relationshipId, refresh]);

  return {
    status,
    relationshipId,
    loading,
    follow,
    cancel,
    remove,
    accept,
    reject,
  };
};

export default useRelationship;

