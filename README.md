# job-tracker-dashboard

## Overview

-   An application that tracks the status of scheduled jobs that run daily.
-   A "Dashboard" page contains related jobs, grouped into "Sections" (smaller groups of jobs that relate to a specific unit of work)
-   Someone should be able to create their own Dashbaord in the Admin Section
    -   The admin section should be able to create and edit groups of jobs called "Sections" that reside on a dashboard.
    -   A `Dashboard` has many `Sections`.
    -   `Sections` have many `Jobs`
    -   `Jobs` have many `JobRuns` (executions)

## User Views

-   Dashboard view: showing related jobs, grouped into sections. A Job will have a job status (RUNNING, COMPLETED, TERMINATED, etc..) and a start and end time
-   Admin view: Create and Manage Dashbaords, Sections, and Jobs.
