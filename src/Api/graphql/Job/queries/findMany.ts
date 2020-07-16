import { queryField } from '@nexus/schema'

export const JobFindManyQuery = queryField('findManyJob', {
  type: 'Job',
  nullable: true,
  list: true,
  args: {
    where: 'JobWhereInput',
    orderBy: 'JobOrderByInput',
    cursor: 'JobWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.job.findMany({
      ...args,
      ...select,
    })
  },
})
