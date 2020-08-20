import { objectType } from '@nexus/schema'

export const JobRun = objectType({
  name: 'JobRun',
  definition(t) {
    t.int('id', { nullable: false })
    t.int('jobRunId', { nullable: true })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.field('startTime', { nullable: false, type: 'DateTime' })
    t.field('endTime', { nullable: true, type: 'DateTime' })
    t.field('status', { nullable: false, type: 'JobStatus' })
    t.field('job', {
      nullable: false,
      type: 'Job',
      resolve(parent: any) {
        return parent['job']
      },
    })
    t.int('jobId', { nullable: false })
    t.int('exitCode', { nullable: true })
    t.string('moreInfo', { nullable: true })
  },
})
