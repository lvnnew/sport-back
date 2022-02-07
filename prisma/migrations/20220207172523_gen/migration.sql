-- CreateTable
CREATE TABLE "AppRefreshToken" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "create" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "AppRefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdmRefreshToken" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "create" TIMESTAMP(3) NOT NULL,
    "managerId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "AdmRefreshToken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AppRefreshToken" ADD CONSTRAINT "AppRefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdmRefreshToken" ADD CONSTRAINT "AdmRefreshToken_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
