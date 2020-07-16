import { mutationField, arg } from '@nexus/schema'

export const DashboardCreateOneMutation = mutationField('createOneDashboard', {
  type: 'Dashboard',
  nullable: false,
  args: {
    data: arg({
      type: 'DashboardCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.dashboard.create({
      data,
      ...select,
    })
  },
})
