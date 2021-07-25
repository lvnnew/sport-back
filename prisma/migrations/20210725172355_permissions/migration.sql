/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Admin";

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT,
    "hasFullAccess" BOOLEAN,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolesToPermission" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT,
    "roleId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManagersToRole" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT,
    "manageId" INTEGER NOT NULL,
    "roleId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RolesToPermission.roleId_permissionId_unique" ON "RolesToPermission"("roleId", "permissionId");

-- CreateIndex
CREATE UNIQUE INDEX "ManagersToRole.manageId_roleId_unique" ON "ManagersToRole"("manageId", "roleId");

-- AddForeignKey
ALTER TABLE "RolesToPermission" ADD FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesToPermission" ADD FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagersToRole" ADD FOREIGN KEY ("manageId") REFERENCES "Manager"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagersToRole" ADD FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
