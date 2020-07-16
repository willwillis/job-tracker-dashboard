import { objectType } from '@nexus/schema'

export const Job = objectType({
  name: 'Job',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('name', { nullable: false })
    t.int('joid', { nullable: true })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.field('runs', {
      nullable: false,
      list: [true],
      type: 'JobRun',
      args: {
        where: 'JobRunWhereInput',
        orderBy: 'JobRunOrderByInput',
        cursor: 'JobRunWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['runs']
      },
    })
    t.field('jobType', { nullable: true, type: 'JobType' })
    t.field('Step', {
      nullable: false,
      list: [true],
      type: 'Step',
      args: {
        where: 'StepWhereInput',
        orderBy: 'StepOrderByInput',
        cursor: 'StepWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['Step']
      },
    })
  },
})
