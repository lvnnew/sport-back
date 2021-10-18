-- CreateTable
CREATE TABLE "AuditLog" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "date" DATE NOT NULL,
    "title" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "actionData" TEXT,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);
