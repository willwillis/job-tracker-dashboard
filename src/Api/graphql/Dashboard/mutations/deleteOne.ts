import { mutationField, arg } from '@nexus/schema'

export const DashboardDeleteOneMutation = mutationField('deleteOneDashboard', {
  type: 'Dashboard',
  nullable: true,
  args: {
    where: arg({
      type: 'DashboardWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Dashboard', where })
    return prisma.dashboard.delete({
      where,
      ...select,
    })
  },
})
