/*
  Warnings:

  - You are about to drop the column `initialPasswordChanged` on the `ManagerLogin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[managerLoginTypeId,login]` on the table `ManagerLogin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `managerLoginTypeId` to the `ManagerLogin` table without a default value. This is not possible if the table is not empty.

*/

-- CreateTable
CREATE TABLE "ManagerLoginType" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT,

    CONSTRAINT "ManagerLoginType_pkey" PRIMARY KEY ("id")
);

INSERT INTO "ManagerLoginType"
  (id, title)
  VALUES('internal', 'Internal');

-- DropIndex
DROP INDEX "ManagerLogin_login_key";

-- AlterTable
ALTER TABLE "ManagerLogin" ADD COLUMN "managerLoginTypeId" TEXT;

UPDATE "ManagerLogin" SET "managerLoginTypeId"='internal';

ALTER TABLE "ManagerLogin" ALTER COLUMN "managerLoginTypeId" SET NOT NULL;

ALTER TABLE "ManagerLogin" DROP COLUMN "initialPasswordChanged",
ALTER COLUMN "passwordHash" DROP NOT NULL,
ALTER COLUMN "emailVerified" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ManagerLogin_managerLoginTypeId_login_key" ON "ManagerLogin"("managerLoginTypeId", "login");

-- AddForeignKey
ALTER TABLE "ManagerLogin" ADD CONSTRAINT "ManagerLogin_managerLoginTypeId_fkey" FOREIGN KEY ("managerLoginTypeId") REFERENCES "ManagerLoginType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
