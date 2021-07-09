/*
  Warnings:

  - Added the required column `managerId` to the `ManagerLogin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ManagerLogin" ADD COLUMN     "managerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "title" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ManagerLogin" ADD FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE CASCADE ON UPDATE CASCADE;
