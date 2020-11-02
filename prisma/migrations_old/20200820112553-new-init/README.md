# Migration `20200820112553-new-init`

This migration has been generated at 8/20/2020, 11:25:54 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "JobStatus" AS ENUM ('RUNNING', 'STARTING', 'SUCCESS', 'FAILURE', 'TERMINATED', 'ON_ICE', 'INACTIVE', 'ACTIVATED', 'RESTART', 'ON_HOLD', 'QUE_WAIT', 'WAIT_REPLY', 'PEND_MACH', 'RESWAIT', 'ON_NOEXEC');

CREATE TYPE "JobType" AS ENUM ('AUTOSYS', 'FMC', 'DATABASE', 'INSTRUMENTED');

CREATE TABLE "public"."Group" (
"id" SERIAL,
"name" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Dashboard" (
"id" SERIAL,
"name" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
"published" boolean  NOT NULL DEFAULT false,
"minuteOffset" integer  NOT NULL DEFAULT 0,
PRIMARY KEY ("id"))

CREATE TABLE "public"."User" (
"id" SERIAL,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"email" text  NOT NULL ,
"name" text   ,
"password" text  NOT NULL ,
"groupId" integer   ,
"isAdmin" boolean  NOT NULL DEFAULT false,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Section" (
"id" SERIAL,
"name" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
"published" boolean  NOT NULL DEFAULT false,
"order" integer  NOT NULL DEFAULT 0,
"successCriteria" text   ,
"dashboardId" integer   ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Step" (
"id" SERIAL,
"name" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
"jobId" integer  NOT NULL ,
"order" integer  NOT NULL DEFAULT 0,
"successCriteria" text   ,
"sectionId" integer  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."JournalEntry" (
"id" SERIAL,
"entry" text  NOT NULL ,
"stepId" integer  NOT NULL ,
"authorId" integer  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Job" (
"id" integer  NOT NULL ,
"name" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
"jobType" "JobType"  DEFAULT E'AUTOSYS',
PRIMARY KEY ("id"))

CREATE TABLE "public"."JobRun" (
"id" SERIAL,
"jobRunId" integer   ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
"startTime" timestamp(3)  NOT NULL ,
"endTime" timestamp(3)   ,
"status" "JobStatus" NOT NULL DEFAULT E'ACTIVATED',
"jobId" integer  NOT NULL ,
"exitCode" integer   ,
"moreInfo" text   ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."_DashboardToGroup" (
"A" integer  NOT NULL ,
"B" integer  NOT NULL )

CREATE UNIQUE INDEX "Group.name" ON "public"."Group"("name")

CREATE UNIQUE INDEX "Dashboard.name" ON "public"."Dashboard"("name")

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

CREATE UNIQUE INDEX "Section.name" ON "public"."Section"("name")

CREATE UNIQUE INDEX "Step.name" ON "public"."Step"("name")

CREATE UNIQUE INDEX "Job.name" ON "public"."Job"("name")

CREATE UNIQUE INDEX "_DashboardToGroup_AB_unique" ON "public"."_DashboardToGroup"("A","B")

CREATE  INDEX "_DashboardToGroup_B_index" ON "public"."_DashboardToGroup"("B")

ALTER TABLE "public"."User" ADD FOREIGN KEY ("groupId")REFERENCES "public"."Group"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Section" ADD FOREIGN KEY ("dashboardId")REFERENCES "public"."Dashboard"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Step" ADD FOREIGN KEY ("jobId")REFERENCES "public"."Job"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Step" ADD FOREIGN KEY ("sectionId")REFERENCES "public"."Section"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."JournalEntry" ADD FOREIGN KEY ("stepId")REFERENCES "public"."Step"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."JournalEntry" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."JobRun" ADD FOREIGN KEY ("jobId")REFERENCES "public"."Job"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_DashboardToGroup" ADD FOREIGN KEY ("A")REFERENCES "public"."Dashboard"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_DashboardToGroup" ADD FOREIGN KEY ("B")REFERENCES "public"."Group"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200820112553-new-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,129 @@
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
+  id         Int         @default(autoincrement()) @id
+  name       String      @unique
+  createdAt  DateTime    @default(now())
+  updatedAt  DateTime    @updatedAt
+  dashboards Dashboard[] @relation(references: [id])
+  users      User[]
+}
+
+model Dashboard {
+  id           Int       @default(autoincrement()) @id
+  name         String    @unique
+  groups       Group[]   @relation(references: [id])
+  sections     Section[]
+  createdAt    DateTime  @default(now())
+  updatedAt    DateTime  @updatedAt
+  published    Boolean   @default(false)
+  minuteOffset Int       @default(0)
+}
+
+model User {
+  id             Int            @default(autoincrement()) @id
+  createdAt      DateTime       @default(now())
+  email          String         @unique
+  name           String?
+  password       String
+  group          Group?         @relation(fields: [groupId], references: [id])
+  groupId        Int?
+  isAdmin        Boolean        @default(false)
+  JournalEntries JournalEntry[]
+}
+
+model Section {
+  id              Int        @default(autoincrement()) @id
+  name            String     @unique
+  createdAt       DateTime   @default(now())
+  updatedAt       DateTime   @updatedAt
+  published       Boolean    @default(false)
+  order           Int        @default(0)
+  successCriteria String?
+  dashboard       Dashboard? @relation(fields: [dashboardId], references: [id])
+  dashboardId     Int?
+  steps           Step[]
+}
+
+model Step {
+  id              Int            @default(autoincrement()) @id
+  name            String         @unique
+  createdAt       DateTime       @default(now())
+  updatedAt       DateTime       @updatedAt
+  job             Job            @relation(fields: [jobId], references: [id])
+  jobId           Int
+  order           Int            @default(0)
+  successCriteria String?
+  journalEntries  JournalEntry[]
+  section         Section        @relation(fields: [sectionId], references: [id])
+  sectionId       Int
+}
+
+model JournalEntry {
+  id        Int      @default(autoincrement()) @id
+  entry     String
+  step      Step     @relation(fields: [stepId], references: [id])
+  stepId    Int
+  author    User     @relation(fields: [authorId], references: [id])
+  authorId  Int
+  createdAt DateTime @default(now())
+}
+
+model Job {
+  // Removing id, don't want autoincrement
+  id        Int      @id
+  name      String   @unique
+  // joid is new id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  runs      JobRun[]
+  jobType   JobType? @default(AUTOSYS)
+  Step      Step[]
+}
+
+model JobRun {
+  id        Int       @default(autoincrement()) @id
+  //joid      Int?
+  jobRunId  Int?
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+  startTime DateTime
+  endTime   DateTime?
+  status    JobStatus @default(ACTIVATED)
+  job       Job       @relation(fields: [jobId], references: [id])
+  jobId     Int
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
```

