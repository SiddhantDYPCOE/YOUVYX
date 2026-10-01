import * as relationshipRepository from "./relationship.repository.js";

/*
|-------------------------------------------------------------------------- 
| Create relationship
|-------------------------------------------------------------------------- 
*/

export const createRelationship = async (senderId, receiverId) => {
  if (senderId === receiverId) {
    throw new Error("You cannot follow yourself");
  }

  const sender = await relationshipRepository.findUserById(senderId);

  if (!sender) {
    throw new Error("Sender user not found");
  }

  const receiver = await relationshipRepository.findUserById(receiverId);

  if (!receiver) {
    throw new Error("Receiver user not found");
  }

  const existingRelationship =
    await relationshipRepository.findRelationshipBetweenUsers(
      senderId,
      receiverId
    );

  if (existingRelationship) {
    if (existingRelationship.status === "ACCEPTED") {
      throw new Error("You are already connected with this user");
    }

    if (existingRelationship.status === "PENDING") {
      throw new Error("A follow request already exists");
    }

    if (existingRelationship.status === "BLOCKED") {
      throw new Error("This relationship is blocked");
    }

    // If rejected, remove the old relationship
    // and allow a fresh request.
    if (existingRelationship.status === "REJECTED") {
      await relationshipRepository.deleteRelationship(
        existingRelationship.id
      );
    }
  }

  const senderIsCreator = sender.accountType === "CREATOR";
  const receiverIsCreator = receiver.accountType === "CREATOR";

  /*
  | NORMAL → NORMAL
  | Request + mutual after acceptance
  */

  if (!senderIsCreator && !receiverIsCreator) {
    return relationshipRepository.createRelationship({
      senderId,
      receiverId,
      status: "PENDING",
      type: "MUTUAL",
    });
  }

  /*
  | CREATOR → NORMAL
  | Request + mutual after acceptance
  */

  if (senderIsCreator && !receiverIsCreator) {
    return relationshipRepository.createRelationship({
      senderId,
      receiverId,
      status: "PENDING",
      type: "MUTUAL",
    });
  }

  /*
  | NORMAL → CREATOR
  | Direct one-way follow
  */

  if (!senderIsCreator && receiverIsCreator) {
    return relationshipRepository.createRelationship({
      senderId,
      receiverId,
      status: "ACCEPTED",
      type: "FOLLOW",
    });
  }

  /*
  | CREATOR → CREATOR
  | Direct one-way follow
  */

  return relationshipRepository.createRelationship({
    senderId,
    receiverId,
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