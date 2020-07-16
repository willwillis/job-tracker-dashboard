import { queryField } from '@nexus/schema'

export const JobRunFindManyQuery = queryField('findManyJobRun', {
  type: 'JobRun',
  nullable: true,
  list: true,
  args: {
    where: 'JobRunWhereInput',
    orderBy: 'JobRunOrderByInput',
    cursor: 'JobRunWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.jobRun.findMany({
      ...args,
      ...select,
    })
  },
})
