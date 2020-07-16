import { queryField } from '@nexus/schema'

export const JobRunFindManyCountQuery = queryField('findManyJobRunCount', {
  type: 'Int',
  args: {
    where: 'JobRunWhereInput',
    orderBy: 'JobRunOrderByInput',
    cursor: 'JobRunWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.jobRun.count(args)
  },
})
