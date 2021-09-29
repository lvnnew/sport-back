/*
  Warnings:

  - Made the column `headOfUnit` on table `Manager` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
UPDATE "Manager" SET "headOfUnit" = false;
ALTER TABLE "Manager" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "telegramLogin" TEXT,
ALTER COLUMN "headOfUnit" SET NOT NULL,
ALTER COLUMN "headOfUnit" SET DEFAULT false;

-- CreateTable
CREATE TABLE "ManagersToPermission" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "managerId" INTEGER NOT NULL,
    "permissionId" TEXT NOT NULL,

    CONSTRAINT "ManagersToPermission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ManagersToPermission" ADD CONSTRAINT "ManagersToPermission_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagersToPermission" ADD CONSTRAINT "ManagersToPermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
