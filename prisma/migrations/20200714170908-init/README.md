# Migration `20200714170908-init`

This migration has been generated by Will Willis at 7/14/2020, 5:09:08 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "JobStatus" AS ENUM ('RUNNING', 'STARTING', 'SUCCESS', 'FAILURE', 'TERMINATED', 'ON_ICE', 'INACTIVE', 'ACTIVATED', 'RESTART', 'ON_HOLD', 'QUE_WAIT', 'WAIT_REPLY', 'PEND_MACH', 'RESWAIT', 'ON_NOEXEC');

CREATE TYPE "JobType" AS ENUM ('AUTOSYS', 'FMC', 'DATABASE', 'INSTRUMENTED');

CREATE TABLE "public"."Group" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"id" text  NOT NULL ,
"name" text  NOT NULL ,
"updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Dashboard" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"id" text  NOT NULL ,
"name" text  NOT NULL ,
"published" boolean  NOT NULL DEFAULT false,
"updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."User" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"email" text  NOT NULL ,
"groupId" text   ,
"id" text  NOT NULL ,
"name" text   ,
"password" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Section" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"dashboardId" text   ,
"id" text  NOT NULL ,
"name" text  NOT NULL ,
"order" integer   ,
"published" boolean  NOT NULL DEFAULT false,
"successCriteria" text   ,
"updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Step" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"id" text  NOT NULL ,
"jobId" text  NOT NULL ,
"name" text  NOT NULL ,
"order" integer   ,
"sectionId" text  NOT NULL ,
"successCriteria" text   ,
"updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."JournalEntry" (
"entry" text   ,
"id" text  NOT NULL ,
"stepId" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Job" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"id" text  NOT NULL ,
"jobType" "JobType"  DEFAULT E'AUTOSYS',
"joid" integer   ,
"name" text  NOT NULL ,
"updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."JobRun" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"endTime" timestamp(3)   ,
"exitCode" integer   ,
"id" text  NOT NULL ,
"jobId" text  NOT NULL ,
"jobRunId" integer   ,
"joid" integer   ,
"moreInfo" text   ,
"startTime" timestamp(3)  NOT NULL ,
"status" "JobStatus"  ,
"updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."_DashboardToGroup" (
"A" text  NOT NULL ,
"B" text  NOT NULL )

CREATE UNIQUE INDEX "Group.name" ON "public"."Group"("name")

CREATE UNIQUE INDEX "Dashboard.name" ON "public"."Dashboard"("name")

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

CREATE UNIQUE INDEX "Section.name" ON "public"."Section"("name")

CREATE UNIQUE INDEX "Step.name" ON "public"."Step"("name")

CREATE UNIQUE INDEX "Job.name" ON "public"."Job"("name")

CREATE UNIQUE INDEX "Job.joid" ON "public"."Job"("joid")

CREATE UNIQUE INDEX "_DashboardToGroup_AB_unique" ON "public"."_DashboardToGroup"("A","B")

CREATE  INDEX "_DashboardToGroup_B_index" ON "public"."_DashboardToGroup"("B")

ALTER TABLE "public"."User" ADD FOREIGN KEY ("groupId")REFERENCES "public"."Group"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Section" ADD FOREIGN KEY ("dashboardId")REFERENCES "public"."Dashboard"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Step" ADD FOREIGN KEY ("jobId")REFERENCES "public"."Job"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Step" ADD FOREIGN KEY ("sectionId")REFERENCES "public"."Section"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."JournalEntry" ADD FOREIGN KEY ("stepId")REFERENCES "public"."Step"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."JobRun" ADD FOREIGN KEY ("jobId")REFERENCES "public"."Job"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."_DashboardToGroup" ADD FOREIGN KEY ("A")REFERENCES "public"."Dashboard"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."_DashboardToGroup" ADD FOREIGN KEY ("B")REFERENCES "public"."Group"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200714170908-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,139 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Group {
+  id         String      @default(uuid()) @id
+  name       String      @unique
+  createdAt  DateTime    @default(now())
+  updatedAt  DateTime    @updatedAt
+  dashboards Dashboard[] @relation(references: [id])
+  users      User[]
+}
+
+model Dashboard {
+  id        String    @default(uuid()) @id
+  name      String    @unique
+  groups     Group[]   @relation(references: [id])
+  sections  Section[]
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+  published Boolean   @default(false)
+}
+
+model User {
+  id        String   @default(uuid()) @id
+  createdAt DateTime @default(now())
+  email     String   @unique
+  name      String?
+  password  String
+  group     Group?   @relation(fields: [groupId], references: [id])
+  groupId   String?
+}
+
+model Section {
+  id              String     @default(uuid()) @id
+  name            String     @unique
+  createdAt       DateTime   @default(now())
+  updatedAt       DateTime   @updatedAt
+  published       Boolean    @default(false)
+  order           Int?
+  successCriteria String?
+  dashboards      Dashboard? @relation(fields: [dashboardId], references: [id])
+  dashboardId     String?
+  steps           Step[]
+}
+
+model Step {
+  id              String         @default(uuid()) @id
+  name            String         @unique
+  createdAt       DateTime       @default(now())
+  updatedAt       DateTime       @updatedAt
+  job             Job            @relation(fields: [jobId], references: [id])
+  jobId           String
+  order           Int?
+  successCriteria String?
+  journalEntries  JournalEntry[]
+  section         Section        @relation(fields: [sectionId], references: [id])
+  sectionId       String
+}
+
+model JournalEntry {
+  id     String  @default(uuid()) @id
+  entry  String?
+  step   Step    @relation(fields: [stepId], references: [id])
+  stepId String
+  // author   User    @relation(fields: [authorId], references: [id])
+  // authorId String
+}
+
+model Job {
+  id        String   @default(uuid()) @id
+  name      String   @unique
+  joid      Int?     @unique
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  runs      JobRun[]
+  jobType   JobType? @default(AUTOSYS)
+}
+
+model JobRun {
+  id        String     @default(uuid()) @id
+  joid      Int?
+  jobRunId  Int?
+  createdAt DateTime   @default(now())
+  updatedAt DateTime   @updatedAt
+  startTime DateTime
+  endTime   DateTime?
+  status    JobStatus?
+  job       Job        @relation(fields: [jobId], references: [id])
+  jobId     String
+  exitCode  Int?
+  moreInfo  String?
+}
+
+enum JobStatus {
+  RUNNING
+  STARTING
+  SUCCESS
+  FAILURE
+  TERMINATED
+  ON_ICE
+  INACTIVE
+  ACTIVATED
+  RESTART
+  ON_HOLD
+  QUE_WAIT
+  WAIT_REPLY
+  PEND_MACH
+  RESWAIT
+  ON_NOEXEC
+}
+
+enum JobType {
+  AUTOSYS
+  FMC
+  DATABASE
+  INSTRUMENTED
+}
+
+// model SectionsOnDashboards {
+//   dashboard   Dashboard @relation(fields: [dashboardId], references: [id])
+//   dashboardId String
+//   section     Section   @relation(fields: [sectionId], references: [id])
+//   sectionId   String
+//   createdAt   DateTime  @default(now())
+//   updatedAt   DateTime  @updatedAt
+//   order       Int?
+//   sla         Int?
+//   alias       String?
+//   @@id([sectionId, dashboardId])
+// }
```


