/*
  Warnings:

  - Made the column `messageTypeId` on table `MessageTemplate` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "MessageTemplate" DROP CONSTRAINT "MessageTemplate_messageTypeId_fkey";

-- AlterTable
ALTER TABLE "MessageTemplate" ALTER COLUMN "messageTypeId" SET NOT NULL,
ALTER COLUMN "messageTypeId" SET DEFAULT E'plain';

-- AddForeignKey
ALTER TABLE "MessageTemplate" ADD CONSTRAINT "MessageTemplate_messageTypeId_fkey" FOREIGN KEY ("messageTypeId") REFERENCES "MessageType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
