-- AlterTable
ALTER TABLE "Manager" ADD COLUMN     "languageId" TEXT;

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Manager" ADD FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE SET NULL ON UPDATE CASCADE;
