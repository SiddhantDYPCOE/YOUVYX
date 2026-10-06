/*
  Warnings:

  - You are about to drop the column `taggedCreatorId` on the `Post` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PostTagStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_taggedCreatorId_fkey";

-- DropIndex
DROP INDEX "Post_taggedCreatorId_idx";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "taggedCreatorId";

-- CreateTable
CREATE TABLE "PostTag" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "taggedUserId" TEXT NOT NULL,
    "taggedById" TEXT NOT NULL,
    "status" "PostTagStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PostTag_postId_idx" ON "PostTag"("postId");

-- CreateIndex
CREATE INDEX "PostTag_taggedUserId_idx" ON "PostTag"("taggedUserId");

-- CreateIndex
CREATE INDEX "PostTag_taggedById_idx" ON "PostTag"("taggedById");

-- CreateIndex
CREATE INDEX "PostTag_status_idx" ON "PostTag"("status");

-- CreateIndex
CREATE UNIQUE INDEX "PostTag_postId_taggedUserId_key" ON "PostTag"("postId", "taggedUserId");

-- CreateIndex
CREATE INDEX "Post_deletedAt_idx" ON "Post"("deletedAt");

-- AddForeignKey
ALTER TABLE "PostTag" ADD CONSTRAINT "PostTag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTag" ADD CONSTRAINT "PostTag_taggedUserId_fkey" FOREIGN KEY ("taggedUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTag" ADD CONSTRAINT "PostTag_taggedById_fkey" FOREIGN KEY ("taggedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
