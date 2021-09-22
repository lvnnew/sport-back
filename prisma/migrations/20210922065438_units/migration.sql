-- AlterTable
ALTER TABLE "Manager" ADD COLUMN     "headOfUnit" BOOLEAN,
ADD COLUMN     "unitId" INTEGER;

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT,
    "parentId" INTEGER,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Manager" ADD CONSTRAINT "Manager_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
