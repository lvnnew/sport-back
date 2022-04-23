-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "utcOffset" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "AggregateTracking" (
    "id" SERIAL NOT NULL,
    "entityTypeId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "lastAggregatesComputed" TIMESTAMP(3) NOT NULL,
    "lastEntityUpdate" TIMESTAMP(3) NOT NULL,
    "aggregateVersion" INTEGER NOT NULL,

    CONSTRAINT "AggregateTracking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AggregateTracking_entityTypeId_entityId_key" ON "AggregateTracking"("entityTypeId", "entityId");

-- AddForeignKey
ALTER TABLE "AggregateTracking" ADD CONSTRAINT "AggregateTracking_entityTypeId_fkey" FOREIGN KEY ("entityTypeId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
