import { queryField } from '@nexus/schema'

export const DashboardFindManyCountQuery = queryField('findManyDashboardCount', {
  type: 'Int',
  args: {
    where: 'DashboardWhereInput',
    orderBy: 'DashboardOrderByInput',
    cursor: 'DashboardWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.dashboard.count(args)
  },
})
