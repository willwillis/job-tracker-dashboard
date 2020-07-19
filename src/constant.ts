import { JobStatus } from 'generated';
import { Status } from '@paljs/ui/types';
import { Icons } from '@paljs/icons';

export const statusIcons: { [key in JobStatus]: keyof Icons } = {
  RUNNING: 'play-circle',
  STARTING: 'play-circle',
  SUCCESS: 'checkmark-circle-2-outline',
  FAILURE: 'close-outline',
  TERMINATED: 'close-outline',
  ON_ICE: 'alert-triangle-outline',
  INACTIVE: 'clock-outline',
  ACTIVATED: 'clock-outline',
  RESTART: 'clock-outline',
  ON_HOLD: 'stop-circle-outline',
  QUE_WAIT: 'clock-outline',
  WAIT_REPLY: 'clock-outline',
  PEND_MACH: 'clock-outline',
  RESWAIT: 'clock-outline',
  ON_NOEXEC: 'clock-outline',
};

export const status: { [key in JobStatus]: Status } = {
  RUNNING: 'Warning',
  STARTING: 'Warning',
  SUCCESS: 'Success',
  FAILURE: 'Danger',
  TERMINATED: 'Danger',
  ON_ICE: 'Primary',
  INACTIVE: 'Primary',
  ACTIVATED: 'Warning',
  RESTART: 'Warning',
  ON_HOLD: 'Primary',
  QUE_WAIT: 'Info',
  WAIT_REPLY: 'Info',
  PEND_MACH: 'Info',
  RESWAIT: 'Info',
  ON_NOEXEC: 'Info',
};
