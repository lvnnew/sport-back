/*
  Warnings:

  - You are about to drop the column `manageId` on the `ManagersToRole` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[managerId,roleId]` on the table `ManagersToRole` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `managerId` to the `ManagersToRole` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AppLogin" DROP CONSTRAINT "AppLogin_userId_fkey";

-- DropForeignKey
ALTER TABLE "ManagerLogin" DROP CONSTRAINT "ManagerLogin_managerId_fkey";

-- DropForeignKey
ALTER TABLE "ManagersToRole" DROP CONSTRAINT "ManagersToRole_manageId_fkey";

-- DropForeignKey
ALTER TABLE "ManagersToRole" DROP CONSTRAINT "ManagersToRole_roleId_fkey";

-- DropForeignKey
ALTER TABLE "RolesToPermission" DROP CONSTRAINT "RolesToPermission_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "RolesToPermission" DROP CONSTRAINT "RolesToPermission_roleId_fkey";

-- DropIndex
DROP INDEX "ManagersToRole.manageId_roleId_unique";

-- AlterTable
ALTER TABLE "ManagersToRole" DROP COLUMN "manageId",
ADD COLUMN     "managerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ManagersToRole_managerId_roleId_key" ON "ManagersToRole"("managerId", "roleId");

-- AddForeignKey
ALTER TABLE "AppLogin" ADD CONSTRAINT "AppLogin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagerLogin" ADD CONSTRAINT "ManagerLogin_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesToPermission" ADD CONSTRAINT "RolesToPermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesToPermission" ADD CONSTRAINT "RolesToPermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagersToRole" ADD CONSTRAINT "ManagersToRole_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagersToRole" ADD CONSTRAINT "ManagersToRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "AppLogin.login_unique" RENAME TO "AppLogin_login_key";

-- RenameIndex
ALTER INDEX "ManagerLogin.login_unique" RENAME TO "ManagerLogin_login_key";

-- RenameIndex
ALTER INDEX "RolesToPermission.roleId_permissionId_unique" RENAME TO "RolesToPermission_roleId_permissionId_key";
