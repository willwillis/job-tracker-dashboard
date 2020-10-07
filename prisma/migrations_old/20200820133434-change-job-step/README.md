# Migration `20200820133434-change-job-step`

This migration has been generated at 8/20/2020, 1:34:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200820112553-new-init..20200820133434-change-job-step
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
@@ -84,9 +84,9 @@
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   runs      JobRun[]
   jobType   JobType? @default(AUTOSYS)
-  Step      Step[]
+  Steps     Step[]
 }
 model JobRun {
   id        Int       @default(autoincrement()) @id
```


