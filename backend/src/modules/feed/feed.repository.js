import prisma from "../../db.js";

/* ------------------------------------------------------------------
 * Relationship { senderId, receiverId, status, type, pairKey @unique }
 *
 *  RelationshipType: FOLLOW | MUTUAL
 *  FollowStatus:     PENDING | ACCEPTED | REJECTED | BLOCKED
 *
 *  Friends   -> type MUTUAL + status ACCEPTED (either direction)
 *  Following -> status ACCEPTED, and either
 *                 - a FOLLOW row where I am the sender, or
 *                 - a MUTUAL row (follow-back) where I am on either side
 *               and the other person is a CREATOR
 *
 *  pairKey is unique, so a pair has ONE row. When a creator follows you
 *  back the row becomes MUTUAL, which is why MUTUAL rows must count
 *  as "following" too, otherwise you would lose their content.
 * ------------------------------------------------------------------ */

const FOLLOW = "FOLLOW";
const MUTUAL = "MUTUAL";
const ACCEPTED = "ACCEPTED";

const PERSON_SELECT = {
  id: true,
  name: true,
  username: true,
  profileImage: true,
  accountType: true,
};

// IDs of everyone the user is friends with (mutual follows)
export const getFriendIds = async (userId) => {
  const rows = await prisma.relationship.findMany({
    where: {
      type: MUTUAL,
      status: ACCEPTED,
      OR: [{ senderId: userId }, { receiverId: userId }],
    },
    select: { senderId: true, receiverId: true },
  });

  return [
    ...new Set(
      rows.map((row) =>
        row.senderId === userId ? row.receiverId : row.senderId
      )
    ),
  ];
};

// IDs of the creators the user follows
export const getFollowedCreatorIds = async (userId) => {
  const rows = await prisma.relationship.findMany({
    where: {
      status: ACCEPTED,
      OR: [
        // I follow a creator
        {
          type: FOLLOW,
          senderId: userId,
          receiver: { accountType: "CREATOR" },
        },
        // follow-back rows: creator is on the other side
        {
          type: MUTUAL,
          senderId: userId,
          receiver: { accountType: "CREATOR" },
        },
        {
          type: MUTUAL,
          receiverId: userId,
          sender: { accountType: "CREATOR" },
        },
      ],
    },
    select: { senderId: true, receiverId: true },
  });

  return [
    ...new Set(
      rows.map((row) =>
        row.senderId === userId ? row.receiverId : row.senderId
      )
    ),
  ];
};

export const findFriendPosts = ({ friendIds, before, take }) =>
  prisma.post.findMany({
    where: {
      authorId: { in: friendIds },
      ...(before ? { createdAt: { lt: before } } : {}),
    },
    orderBy: { createdAt: "desc" },
    take,
    include: {
      author: { select: PERSON_SELECT },
      tags: {
        where: { status: ACCEPTED }, // only tags the person accepted
        include: { taggedUser: { select: PERSON_SELECT } }, // ADJUST: PostTag relation name
      },
    },
  });

export const findCreatorContents = ({ creatorIds, before, take }) =>
  prisma.content.findMany({
    where: {
      creatorId: { in: creatorIds },
      deletedAt: null, // hide soft-deleted content
      ...(before ? { createdAt: { lt: before } } : {}),
    },
    orderBy: { createdAt: "desc" },
    take,
    include: {
      creator: { select: PERSON_SELECT },
      genre: true,
      // only one of these is filled, depending on content.type
      article: true,
      image: true,
      video: true,
      _count: { select: { likes: true, shares: true } },
    },
  });