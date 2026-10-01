-- CreateEnum
CREATE TYPE "RelationshipType" AS ENUM ('FOLLOW', 'MUTUAL');

-- AlterTable
ALTER TABLE "Relationship" ADD COLUMN     "type" "RelationshipType" NOT NULL DEFAULT 'FOLLOW';

-- CreateIndex
CREATE INDEX "Relationship_type_idx" ON "Relationship"("type");
