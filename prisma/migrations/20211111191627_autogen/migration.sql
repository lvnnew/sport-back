-- CreateTable
CREATE TABLE "AutogenerationHistoryEntry" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "date" DATE NOT NULL,
    "originalEntityType" TEXT NOT NULL,
    "originalEntityId" TEXT NOT NULL,
    "autogenerationRuleId" TEXT NOT NULL,
    "version" DATE NOT NULL,
    "errorOccurred" BOOLEAN NOT NULL,
    "error" TEXT,

    CONSTRAINT "AutogenerationHistoryEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutogenerationRule" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "version" DATE,
    "originalEntityType" TEXT NOT NULL,
    "generatingEntityType" TEXT NOT NULL,
    "originalEntityFilter" TEXT NOT NULL,
    "generatingEntityConstructionRules" TEXT NOT NULL,
    "ignoreVersionOnHistory" BOOLEAN NOT NULL,

    CONSTRAINT "AutogenerationRule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AutogenerationHistoryEntry" ADD CONSTRAINT "AutogenerationHistoryEntry_autogenerationRuleId_fkey" FOREIGN KEY ("autogenerationRuleId") REFERENCES "AutogenerationRule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
