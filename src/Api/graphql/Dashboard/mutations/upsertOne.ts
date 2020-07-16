import { mutationField, arg } from '@nexus/schema'

export const DashboardUpsertOneMutation = mutationField('upsertOneDashboard', {
  type: 'Dashboard',
  nullable: false,
  args: {
    where: arg({
      type: 'DashboardWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'DashboardCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'DashboardUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dashboard.upsert({
      ...args,
      ...select,
    })
  },
})
