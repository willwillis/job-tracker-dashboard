import { queryField } from '@nexus/schema'

export const DashboardFindManyQuery = queryField('findManyDashboard', {
  type: 'Dashboard',
  nullable: true,
  list: true,
  args: {
    where: 'DashboardWhereInput',
    orderBy: 'DashboardOrderByInput',
    cursor: 'DashboardWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dashboard.findMany({
      ...args,
      ...select,
    })
  },
})
