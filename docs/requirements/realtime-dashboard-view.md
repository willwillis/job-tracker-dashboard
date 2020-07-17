## Overview: The Real-time Dashboard View

This is the primary dashboard. The _Structure_ or layout of this page will be defined by the Sections and Steps that are associated with the Dashboard.

The dyanmic data on the page will be associated with the individual job executions, or `JobRuns` for a given day.

## Sections

- Sections should be displayed/sorted by order (`Section.order`)
- Each Section will be a `<Card>` UI type,

  - `Card Header`: Section Name
  - `Card Body`: Contains the following columns.
    1. Step Status [badge](https://getbootstrap.com/docs/4.0/components/badge/): This is the LAST (most recent) `JobRun.status`. Badge has ICON for Status (see mapping below) I can choose an Eva Icon for each Status, I just need you to design the mapping/configuration. There needs to be a COLOR mapping as well for STATUS.
       - If the Step is associated to multiple `JobRun`s for that 24-hour period, the number of runs should be displayed on the [badge](https://getbootstrap.com/docs/4.0/components/badge/)
    2. Step Name (this is an alias to the Job Name) the underlying Job Name should be revealed when a user hovers over the Step Name, by a [tooltip](https://akveo.github.io/nebular/docs/components/tooltip/overview#nbtooltipdirective) (direction up). If there is a `JournalEntry` for the Step created `today()` then display it next to the name, along with the author. It shuold have a background color to help it stand out.
    3. Start Time
    4. End Time (Optional)
    5. Actions/Buttons
       - Button or Link to the `Job.name` example: http://jilcheck.corp/job={{Job.name}}
       - BUtton or Link to another site. Put these URLs into a global config, I can modify the actual values later.
       - Add Journal Entry Button. THe Journal Entry should be associated to the Step, for the day it was given on.
  - While this Card Body is not a DataTable, the spacing should somewhat resemble this:

    | Step Status | Step Name | Start Time | End Time | Action LInks / BUttons |
    | ----------- | --------- | ---------- | -------- | ---------------------- |
    | col-xs1     | col-xs-5  | col-xs-2   | col-xs-2 | col-xs2                |

    I am not very good at "responsive" if you have a better approach, please do what is best.

query:

```
query dashboardView{
  findOneDashboard(where:{id: 66}){
    name
    sections {
      name
      order
      steps {
        name   # alias for the Job
        order
        job {
          name  # display on hover (tooltip)
          runs {
            startTime
            endTime
            status  # associate to Color and Icon Mapping tables
          }
        }
      }
    }
  }
}
```

> Above query is missing JOurnal Entries

## High Priority Features (work on this first)

## Configuration / Variables / Mappings

- STEP STATUS ICON
  These examples below are bootstrap, please make the mapping for Eva Icons, and I can configure what ICON goes to each `JobStatus`

```
   icon_map  = (
     "RUNNING"		=> 'play-circle',
     "STARTING"		=> 'play-circle',
     "SUCCESS"		=> 'ok',
     "FAILURE"		=> 'remove',
     "TERMINATED"	=> 'remove',
     "ON_ICE"		=> 'asterisk',
     "INACTIVE"		=> 'unchecked',
     "ACTIVATED"	=> 'unchecked',
     "RESTART"		=> 'unchecked',
     "ON_HOLD"		=> 'pause',
     "QUE_WAIT"		=> 'unchecked',
     "WAIT_REPLY"	=> 'unchecked',
     "PEND_MACH"	=> 'unchecked',
     "RESWAIT"		=> 'unchecked',
     "ON_NOEXEC"	=> 'unchecked',
     );
```

- STEP STATUS COLOR
  These are bootstrap colors, please make the mapping for Eva Colors, I can fill in the actual values, please just define the mapping in the code.

```
   css_color_map  = (
     "RUNNING"		=> 'warning',
     "STARTING"		=> 'warning',
     "SUCCESS"		=> 'success',
     "FAILURE"		=> 'danger',
     "TERMINATED"	=> 'danger',
     "ON_ICE"		=> 'primary',
     "INACTIVE"		=> 'primary',
     "ACTIVATED"	=> 'warning',
     "RESTART"		=> 'warning',
     "ON_HOLD"		=> 'primary',
     "QUE_WAIT"		=> 'default',
     "WAIT_REPLY"	=> 'default',
     "PEND_MACH"	=> 'default',
     "RESWAIT"		=> 'default',
     "ON_NOEXEC"	=> 'default',
);
```

## Low Priority Features

> Routing

A user will need to access a dashboard with a "slug" URL, something similar to this: `/realtime/id/dashboard-name-here` for the following reasons:

- have a URL that describes the process flow that will be on the page
- have a URL that is not vulnerable to breaking existing links, shared in email, etc..
- so if dashboard with id of 3 has its name changed, regardless of what comes after `/realtime/<id>/` the same dashboard is displayed
