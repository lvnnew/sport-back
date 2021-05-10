/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `AdminLogin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login]` on the table `AppLogin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AdminLogin.login_unique" ON "AdminLogin"("login");

-- CreateIndex
CREATE UNIQUE INDEX "AppLogin.login_unique" ON "AppLogin"("login");
