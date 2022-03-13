/*
  Warnings:

  - You are about to drop the column `hasFullAccess` on the `Role` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Role" DROP COLUMN "hasFullAccess",
ADD COLUMN     "allTenantsAvailable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hasAllPermissions" BOOLEAN DEFAULT false;
