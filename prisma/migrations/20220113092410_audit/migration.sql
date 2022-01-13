/*
  Warnings:

  - You are about to drop the column `action` on the `AuditLog` table. All the data in the column will be lost.
  - Added the required column `actionTypeId` to the `AuditLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AuditLog" DROP COLUMN "action",
ADD COLUMN     "actionTypeId" TEXT NOT NULL,
ALTER COLUMN "date" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "AutogenerationHistoryEntry" ALTER COLUMN "date" SET DATA TYPE TIMESTAMP(3);

-- CreateTable
CREATE TABLE "AuditLogActionType" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT,

    CONSTRAINT "AuditLogActionType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_actionTypeId_fkey" FOREIGN KEY ("actionTypeId") REFERENCES "AuditLogActionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
