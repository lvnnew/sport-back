/*
  Warnings:

  - Made the column `hasAllPermissions` on table `Role` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Manager" ADD COLUMN     "phone" TEXT,
ADD COLUMN     "photo" TEXT,
ADD COLUMN     "tenantId" INTEGER;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "allTenantsAvailable" DROP DEFAULT,
ALTER COLUMN "hasAllPermissions" SET NOT NULL,
ALTER COLUMN "hasAllPermissions" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tenantId" INTEGER;

-- CreateTable
CREATE TABLE "Tenant" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Manager" ADD CONSTRAINT "Manager_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
