-- AlterTable
ALTER TABLE "MessageTemplate" ADD COLUMN     "messageTypeId" TEXT;

-- CreateTable
CREATE TABLE "MessageType" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "MessageType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MessageTemplate" ADD CONSTRAINT "MessageTemplate_messageTypeId_fkey" FOREIGN KEY ("messageTypeId") REFERENCES "MessageType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
