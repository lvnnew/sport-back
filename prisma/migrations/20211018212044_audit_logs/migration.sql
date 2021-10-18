-- AlterTable
ALTER TABLE "AuditLog" ADD COLUMN     "foreign" BOOLEAN,
ADD COLUMN     "foreignEntityId" TEXT,
ADD COLUMN     "foreignEntityType" TEXT,
ADD COLUMN     "managerId" INTEGER,
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
