/*
  Warnings:

  - The `actionData` column on the `AuditLog` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `role` on the `ManagerLogin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AggregateTracking" ADD COLUMN     "lastAggregatesScheduled" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "AuditLog" ADD COLUMN     "managerLogin" TEXT,
DROP COLUMN "actionData",
ADD COLUMN     "actionData" JSONB;

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "bytes" INTEGER;

-- AlterTable
ALTER TABLE "ManagerLogin" DROP COLUMN "role";
