import { mutationField, arg } from '@nexus/schema'

export const JobDeleteOneMutation = mutationField('deleteOneJob', {
  type: 'Job',
  nullable: true,
  args: {
    where: arg({
      type: 'JobWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Job', where })
    return prisma.job.delete({
      where,
      ...select,
    })
  },
})
