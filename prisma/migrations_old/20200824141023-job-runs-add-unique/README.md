# Migration `20200824141023-job-runs-add-unique`

This migration has been generated at 8/24/2020, 2:10:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "JobRun.jobId_startTime" ON "public"."JobRun"("jobId","startTime")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200820133434-change-job-step..20200824141023-job-runs-add-unique
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -100,8 +100,9 @@
   job       Job       @relation(fields: [jobId], references: [id])
   jobId     Int
   exitCode  Int?
   moreInfo  String?
+  @@unique([jobId, startTime])// runnum
 }
 enum JobStatus {
   RUNNING
```


