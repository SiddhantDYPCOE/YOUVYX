import prisma from "../../db.js";
import * as relationshipRepository from "./relationship.repository.js";
import { createPairKey } from "./relationship.utils.js";

/*
|-------------------------------------------------------------------------- 
| Create relationship
|-------------------------------------------------------------------------- 
*/

export const createRelationship = async (
  senderId,
  receiverId
) => {
  if (senderId === receiverId) {
    throw new Error("You cannot follow yourself");
  }

  const sender =
    await relationshipRepository.findUserById(senderId);

  if (!sender) {
    throw new Error("Sender user not found");
  }

  const receiver =
    await relationshipRepository.findUserById(receiverId);

  if (!receiver) {
    throw new Error("Receiver user not found");
  }

  /*
   * A → B and B → A must use the same pairKey.
   */
  const pairKey = createPairKey(
    senderId,
    receiverId
  );

  const existingRelationship =
    await relationshipRepository.findRelationshipByPairKey(
      pairKey
    );

  /*
   * A relationship already exists between these two users.
   */
  if (existingRelationship) {
    /*
     * Already connected/following.
     */
    if (
      existingRelationship.status === "ACCEPTED"
    ) {
      throw new Error(
        "You are already connected with this user"
      );
    }

    /*
     * Pending request exists.
     *
     * IMPORTANT:
     * We need to determine who sent the request.
     */
    if (
      existingRelationship.status === "PENDING"
    ) {
      if (
        existingRelationship.senderId === senderId
      ) {
        throw new Error(
          "A follow request already exists"
        );
      }

      /*
       * The OTHER user already sent you a request.
       *
       * Do not create another relationship row.
       *
       * At this point you can either:
       * 1. Tell the user to accept the existing request
       * 2. Implement "accept automatically" behaviour
       *
       * For now, keep it explicit.
       */
      throw new Error(
        "This user has already sent you a follow request"
      );
    }

    /*
     * Blocked relationship.
     */
    if (
      existingRelationship.status === "BLOCKED"
    ) {
      throw new Error(
        "This relationship is blocked"
      );
    }

    /*
     * Rejected relationship.
     *
     * Remove it and allow a fresh request.
     */
    if (
      existingRelationship.status === "REJECTED"
    ) {
      await relationshipRepository.deleteRelationship(
        existingRelationship.id
      );
    }
  }

  const senderIsCreator =
    sender.accountType === "CREATOR";

  const receiverIsCreator =
    receiver.accountType === "CREATOR";

  /*
   * ------------------------------------------------
   * NORMAL → NORMAL
   * ------------------------------------------------
   *
   * Request first.
   * After acceptance:
   *
   * A ↔ B
   *
   * MUTUAL
   */
  if (
    !senderIsCreator &&
    !receiverIsCreator
  ) {
    return relationshipRepository.createRelationship({
      senderId,
      receiverId,
      pairKey,
      status: "PENDING",
      type: "MUTUAL",
    });
  }

  /*
   * ------------------------------------------------
   * CREATOR → NORMAL
   * ------------------------------------------------
   *
   * Request first.
   * After acceptance:
   *
   * A ↔ B
   *
   * MUTUAL
   */
  if (
    senderIsCreator &&
    !receiverIsCreator
  ) {
    return relationshipRepository.createRelationship({
      senderId,
      receiverId,
      pairKey,
      status: "PENDING",
      type: "MUTUAL",
    });
  }

  /*
   * ------------------------------------------------
   * NORMAL → CREATOR
   * ------------------------------------------------
   *
   * Direct follow.
   *
   * A → Creator
   *
   * FOLLOW
   */
  if (
    !senderIsCreator &&
    receiverIsCreator
  ) {
    return relationshipRepository.createRelationship({
      senderId,
      receiverId,
      pairKey,
      status: "ACCEPTED",
      type: "FOLLOW",
    });
  }

  /*
   * ------------------------------------------------
   * CREATOR → CREATOR
   * ------------------------------------------------
   *
   * Direct follow.
   *
   * Creator A → Creator B
   *
   * FOLLOW
   */
  return relationshipRepository.createRelationship({
    senderId,
    receiverId,
    pairKey,
    status: "ACCEPTED",
    type: "FOLLOW",
  });
};

/*
|-------------------------------------------------------------------------- 
| Accept
|-------------------------------------------------------------------------- 
*/

export const acceptRelationship = async (userId, relationshipId) => {
  const relationship =
    await relationshipRepository.findRelationshipById(relationshipId);

  if (!relationship) {
    throw new Error("Relationship not found");
  }

  if (relationship.receiverId !== userId) {
    throw new Error("You are not authorized to accept this request");
  }

  if (relationship.status !== "PENDING") {
    throw new Error("Only pending requests can be accepted");
  }

  return relationshipRepository.updateRelationship(
    relationshipId,
    {
      status: "ACCEPTED",
    }
  );
};

/*
|-------------------------------------------------------------------------- 
| Reject
|-------------------------------------------------------------------------- 
*/

export const rejectRelationship = async (userId, relationshipId) => {
  const relationship =
    await relationshipRepository.findRelationshipById(relationshipId);

  if (!relationship) {
    throw new Error("Relationship not found");
  }

  if (relationship.receiverId !== userId) {
    throw new Error("You are not authorized to reject this request");
  }

  if (relationship.status !== "PENDING") {
    throw new Error("Only pending requests can be rejected");
  }

  return relationshipRepository.updateRelationship(
    relationshipId,
    {
      status: "REJECTED",
    }
  );
};

/*
|-------------------------------------------------------------------------- 
| Cancel request
|-------------------------------------------------------------------------- 
*/

export const cancelRequest = async (userId, relationshipId) => {
  const relationship =
    await relationshipRepository.findRelationshipById(relationshipId);

  if (!relationship) {
    throw new Error("Relationship not found");
  }

  if (relationship.senderId !== userId) {
    throw new Error("You are not authorized to cancel this request");
  }

  if (relationship.status !== "PENDING") {
    throw new Error("Only pending requests can be cancelled");
  }

  return relationshipRepository.deleteRelationship(relationshipId);
};

/*
|-------------------------------------------------------------------------- 
| Remove relationship
|-------------------------------------------------------------------------- 
*/

export const removeRelationship = async (userId, otherUserId) => {
  const relationship =
    await relationshipRepository.findRelationshipBetweenUsers(
      userId,
      otherUserId
    );

  if (!relationship) {
    throw new Error("Relationship not found");
  }

  if (relationship.status !== "ACCEPTED") {
    throw new Error("There is no active relationship with this user");
  }

  return relationshipRepository.deleteRelationship(relationship.id);
};

/*
|-------------------------------------------------------------------------- 
| Received requests
|-------------------------------------------------------------------------- 
*/

export const getReceivedRequests = async (userId) => {
  return relationshipRepository.findReceivedRequests(userId);
};

/*
|-------------------------------------------------------------------------- 
| Sent requests
|-------------------------------------------------------------------------- 
*/

export const getSentRequests = async (userId) => {
  return relationshipRepository.findSentRequests(userId);
};

/*
|-------------------------------------------------------------------------- 
| Followers
|-------------------------------------------------------------------------- 
*/

export const getFollowers = async (userId) => {
  const relationships =
    await relationshipRepository.findAcceptedRelationshipsForUser(userId);

  return relationships
    .filter((relationship) => {
      if (relationship.type === "FOLLOW") {
        return relationship.receiverId === userId;
      }

      // MUTUAL
      return true;
    })
    .map((relationship) => {
      if (relationship.senderId === userId) {
        return relationship.receiver;
      }

      return relationship.sender;
    });
};

/*
|-------------------------------------------------------------------------- 
| Following
|-------------------------------------------------------------------------- 
*/

export const getFollowing = async (userId) => {
  const relationships =
    await relationshipRepository.findAcceptedRelationshipsForUser(userId);

  return relationships
    .filter((relationship) => {
      if (relationship.type === "FOLLOW") {
        return relationship.senderId === userId;
      }

      // MUTUAL
      return true;
    })
    .map((relationship) => {
      if (relationship.senderId === userId) {
        return relationship.receiver;
      }

      return relationship.sender;
    });
};


export const getFollowersByUserIdService = async (userId) => {
  const relationships = await prisma.relationship.findMany({
    where: {
      OR: [
        {
          receiverId: userId,
          status: "ACCEPTED",
          type: "FOLLOW",
        },
        {
          OR: [
            { senderId: userId },
            { receiverId: userId },
          ],
          status: "ACCEPTED",
          type: "MUTUAL",
        },
      ],
    },

    include: {
      sender: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },

      receiver: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return relationships.map((relationship) => {
    if (relationship.type === "MUTUAL") {
      return relationship.senderId === userId
        ? relationship.receiver
        : relationship.sender;
    }

    return relationship.sender;
  });
};

export const getFollowingByUserIdService = async (userId) => {
  const following = await prisma.relationship.findMany({
    where: {
      OR: [
        {
          senderId: userId,
          status: "ACCEPTED",
          type: "FOLLOW",
        },
        {
          OR: [
            { senderId: userId },
            { receiverId: userId },
          ],
          status: "ACCEPTED",
          type: "MUTUAL",
        },
      ],
    },

    include: {
      sender: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },

      receiver: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return following.map((relationship) => {
    if (relationship.type === "MUTUAL") {
      return relationship.senderId === userId
        ? relationship.receiver
        : relationship.sender;
    }

    return relationship.receiver;
  });
};

export const getRelationshipStatusService = async (
  currentUserId,
  targetUserId
) => {
  if (currentUserId === targetUserId) {
    return {
      status: "SELF",
      relationshipId: null,
    };
  }

  const relationships =
    await relationshipRepository.findRelationshipsBetweenUsers(
      currentUserId,
      targetUserId
    );

  if (!relationships || relationships.length === 0) {
    return {
      status: "NONE",
      relationshipId: null,
    };
  }

  const outgoing = relationships.find(
    (relationship) =>
      relationship.senderId === currentUserId
  );

  const incoming = relationships.find(
    (relationship) =>
      relationship.senderId === targetUserId
  );

  /*
   * ------------------------------------------------
   * MUTUAL RELATIONSHIP
   * ------------------------------------------------
   *
   * NORMAL → NORMAL and CREATOR → NORMAL can use
   * type = MUTUAL.
   *
   * Once accepted, both users are connected.
   */
  const mutualRelationship = relationships.find(
    (relationship) =>
      relationship.type === "MUTUAL" &&
      relationship.status === "ACCEPTED"
  );

  if (mutualRelationship) {
    return {
      status: "MUTUAL",
      relationshipId: mutualRelationship.id,
    };
  }

  /*
   * ------------------------------------------------
   * INCOMING REQUEST
   * ------------------------------------------------
   */
  if (
    incoming?.status === "PENDING"
  ) {
    return {
      status: "REQUEST_RECEIVED",
      relationshipId: incoming.id,
    };
  }

  /*
   * ------------------------------------------------
   * OUTGOING REQUEST
   * ------------------------------------------------
   */
  if (
    outgoing?.status === "PENDING"
  ) {
    return {
      status: "REQUEST_SENT",
      relationshipId: outgoing.id,
    };
  }

  /*
   * ------------------------------------------------
   * OUTGOING FOLLOW
   * ------------------------------------------------
   *
   * Current user → target user
   */
  if (
    outgoing?.status === "ACCEPTED" &&
    outgoing.type === "FOLLOW"
  ) {
    return {
      status: "FOLLOWING",
      relationshipId: outgoing.id,
    };
  }

  /*
   * ------------------------------------------------
   * INCOMING FOLLOW
   * ------------------------------------------------
   *
   * Target user → current user
   */
  if (
    incoming?.status === "ACCEPTED" &&
    incoming.type === "FOLLOW"
  ) {
    return {
      status: "FOLLOWER",
      relationshipId: incoming.id,
    };
  }

  return {
    status: "NONE",
    relationshipId: null,
  };
};
