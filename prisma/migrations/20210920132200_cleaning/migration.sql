/*
  Warnings:

  - You are about to drop the column `title` on the `ManagersToRole` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `RolesToPermission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ManagersToRole" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "RolesToPermission" DROP COLUMN "title";
