/*
  Warnings:

  - You are about to drop the column `photo` on the `Manager` table. All the data in the column will be lost.
  - The primary key for the `MessageTemplate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MessageTemplate` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Manager" DROP COLUMN "photo",
ADD COLUMN     "photoId" INTEGER;

-- AlterTable
ALTER TABLE "MessageTemplate" DROP CONSTRAINT "MessageTemplate_pkey",
ADD COLUMN     "templateStyleId" INTEGER,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MessageTemplate_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "TemplateStyle" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "style" TEXT NOT NULL,

    CONSTRAINT "TemplateStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageTemplateLangVariant" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "subjectTemplate" TEXT NOT NULL,
    "bodyTemplate" TEXT NOT NULL,
    "messageTemplateId" INTEGER NOT NULL,
    "languageId" TEXT NOT NULL,
    "additionalStyle" TEXT,

    CONSTRAINT "MessageTemplateLangVariant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MessageTemplateLangVariant_messageTemplateId_languageId_key" ON "MessageTemplateLangVariant"("messageTemplateId", "languageId");

-- AddForeignKey
ALTER TABLE "Manager" ADD CONSTRAINT "Manager_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTemplate" ADD CONSTRAINT "MessageTemplate_templateStyleId_fkey" FOREIGN KEY ("templateStyleId") REFERENCES "TemplateStyle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTemplateLangVariant" ADD CONSTRAINT "MessageTemplateLangVariant_messageTemplateId_fkey" FOREIGN KEY ("messageTemplateId") REFERENCES "MessageTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTemplateLangVariant" ADD CONSTRAINT "MessageTemplateLangVariant_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
