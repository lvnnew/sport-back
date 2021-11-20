/*
  Warnings:

  - Made the column `email` on table `Manager` required. This step will fail if there are existing NULL values in that column.

*/

UPDATE public."Manager" SET "email"=md5(random()::text) WHERE "email" IS NULL;

-- AlterTable
ALTER TABLE "Manager" ALTER COLUMN "email" SET NOT NULL;
