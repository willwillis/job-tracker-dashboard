import { mutationField, arg } from '@nexus/schema'

export const DashboardUpdateOneMutation = mutationField('updateOneDashboard', {
  type: 'Dashboard',
  nullable: false,
  args: {
    where: arg({
      type: 'DashboardWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'DashboardUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.dashboard.update({
      where,
      data,
      ...select,
    })
  },
})
