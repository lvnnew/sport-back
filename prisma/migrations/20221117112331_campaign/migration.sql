/*
  Warnings:

  - The primary key for the `MessageTemplate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[managerId,roleId,expiresAt]` on the table `ManagersToRole` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "MessageTemplateLangVariant" DROP CONSTRAINT "MessageTemplateLangVariant_messageTemplateId_fkey";

-- DropIndex
DROP INDEX "ManagersToRole_managerId_roleId_key";

-- AlterTable
ALTER TABLE "AuditLog" ADD COLUMN     "error" TEXT,
ADD COLUMN     "success" BOOLEAN;

-- AlterTable
ALTER TABLE "ManagersToPermission" ADD COLUMN     "expiresAt" DATE;

-- AlterTable
ALTER TABLE "ManagersToRole" ADD COLUMN     "expiresAt" DATE;

-- AlterTable
ALTER TABLE "MessageTemplate" DROP CONSTRAINT "MessageTemplate_pkey",
ADD COLUMN     "dataExample" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MessageTemplate_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MessageTemplate_id_seq";

-- AlterTable
ALTER TABLE "MessageTemplateLangVariant" ADD COLUMN     "title" TEXT,
ALTER COLUMN "messageTemplateId" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "MailingCampaign" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "mailingTypeId" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "date" DATE,
    "mailingCampaignStatusId" TEXT,
    "messageTemplateId" TEXT NOT NULL,

    CONSTRAINT "MailingCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MailingMessage" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "mailingCampaignId" INTEGER NOT NULL,
    "templateId" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "locals" TEXT NOT NULL,
    "localsHash" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "dateSent" TIMESTAMP(3),
    "error" TEXT,
    "html" TEXT,
    "text" TEXT,
    "uniqueKey" TEXT,
    "subject" TEXT,
    "mailingMessageStatusId" TEXT NOT NULL,
    "messageTemplateLangVariantId" INTEGER NOT NULL,

    CONSTRAINT "MailingMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MailingCampaignStatus" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,

    CONSTRAINT "MailingCampaignStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MailingMessageStatus" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT,
    "final" BOOLEAN NOT NULL,

    CONSTRAINT "MailingMessageStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MailingType" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,

    CONSTRAINT "MailingType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MailingMessage_mailingCampaignId_to_uniqueKey_key" ON "MailingMessage"("mailingCampaignId", "to", "uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "ManagersToRole_managerId_roleId_expiresAt_key" ON "ManagersToRole"("managerId", "roleId", "expiresAt");

-- AddForeignKey
ALTER TABLE "MailingCampaign" ADD CONSTRAINT "MailingCampaign_mailingTypeId_fkey" FOREIGN KEY ("mailingTypeId") REFERENCES "MailingType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailingCampaign" ADD CONSTRAINT "MailingCampaign_mailingCampaignStatusId_fkey" FOREIGN KEY ("mailingCampaignStatusId") REFERENCES "MailingCampaignStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailingCampaign" ADD CONSTRAINT "MailingCampaign_messageTemplateId_fkey" FOREIGN KEY ("messageTemplateId") REFERENCES "MessageTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailingMessage" ADD CONSTRAINT "MailingMessage_mailingCampaignId_fkey" FOREIGN KEY ("mailingCampaignId") REFERENCES "MailingCampaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailingMessage" ADD CONSTRAINT "MailingMessage_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "MessageTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailingMessage" ADD CONSTRAINT "MailingMessage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailingMessage" ADD CONSTRAINT "MailingMessage_mailingMessageStatusId_fkey" FOREIGN KEY ("mailingMessageStatusId") REFERENCES "MailingMessageStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailingMessage" ADD CONSTRAINT "MailingMessage_messageTemplateLangVariantId_fkey" FOREIGN KEY ("messageTemplateLangVariantId") REFERENCES "MessageTemplateLangVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTemplateLangVariant" ADD CONSTRAINT "MessageTemplateLangVariant_messageTemplateId_fkey" FOREIGN KEY ("messageTemplateId") REFERENCES "MessageTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
