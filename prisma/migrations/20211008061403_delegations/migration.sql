-- AlterTable
ALTER TABLE "Manager" ALTER COLUMN "headOfUnit" DROP DEFAULT,
ALTER COLUMN "active" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Delegation" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "fromId" INTEGER NOT NULL,
    "toId" INTEGER NOT NULL,
    "expiresAt" DATE,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Delegation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Delegation" ADD CONSTRAINT "Delegation_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegation" ADD CONSTRAINT "Delegation_toId_fkey" FOREIGN KEY ("toId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
