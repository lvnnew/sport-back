/*
  Warnings:

  - You are about to drop the column `entityType` on the `AuditLog` table. All the data in the column will be lost.
  - Added the required column `entityTypeId` to the `AuditLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AuditLog" DROP COLUMN "entityType",
ADD COLUMN     "entityTypeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MessageTemplate" ALTER COLUMN "messageTypeId" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_entityTypeId_fkey" FOREIGN KEY ("entityTypeId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
