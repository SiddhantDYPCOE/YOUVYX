/*
  Warnings:

  - A unique constraint covering the columns `[pairKey]` on the table `Relationship` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pairKey` to the `Relationship` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Relationship_senderId_receiverId_key";

-- AlterTable
ALTER TABLE "Relationship" ADD COLUMN     "pairKey" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Relationship_pairKey_key" ON "Relationship"("pairKey");
