/*
  Warnings:

  - You are about to drop the column `body` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `externalUrl` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `mediaUrl` on the `Content` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Content" DROP COLUMN "body",
DROP COLUMN "externalUrl",
DROP COLUMN "mediaUrl";

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT,
    "pdfUrl" TEXT,
    "pdfFileName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "videoUrl" TEXT,
    "externalUrl" TEXT,
    "thumbnailUrl" TEXT,
    "duration" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_contentId_key" ON "Article"("contentId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_contentId_key" ON "Image"("contentId");

-- CreateIndex
CREATE UNIQUE INDEX "Video_contentId_key" ON "Video"("contentId");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
