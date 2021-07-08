/*
  Warnings:

  - You are about to drop the `AdminLogin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AdminLogin";

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "originalName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "s3Key" TEXT NOT NULL,
    "eTag" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManagerLogin" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "login" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL,
    "initialPasswordChanged" BOOLEAN NOT NULL,
    "locked" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ManagerLogin.login_unique" ON "ManagerLogin"("login");
