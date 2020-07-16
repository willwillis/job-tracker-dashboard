import { queryField, arg } from '@nexus/schema'

export const DashboardFindOneQuery = queryField('findOneDashboard', {
  type: 'Dashboard',
  nullable: true,
  args: {
    where: arg({
      type: 'DashboardWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.dashboard.findOne({
      where,
      ...select,
    })
  },
})
