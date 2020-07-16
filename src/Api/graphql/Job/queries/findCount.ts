import { queryField } from '@nexus/schema'

export const JobFindManyCountQuery = queryField('findManyJobCount', {
  type: 'Int',
  args: {
    where: 'JobWhereInput',
    orderBy: 'JobOrderByInput',
    cursor: 'JobWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.job.count(args)
  },
})
