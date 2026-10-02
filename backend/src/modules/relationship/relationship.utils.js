
export const createPairKey = (userA, userB) => {
  if (!userA || !userB) {
    throw new Error("Both user IDs are required");
  }

  if (userA === userB) {
    throw new Error(
      "You cannot create a relationship with yourself"
    );
  }

  return [userA, userB].sort().join("_");

}