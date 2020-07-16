import { mutationField, arg } from '@nexus/schema'

export const JobRunDeleteOneMutation = mutationField('deleteOneJobRun', {
  type: 'JobRun',
  nullable: true,
  args: {
    where: arg({
      type: 'JobRunWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'JobRun', where })
    return prisma.jobRun.delete({
      where,
      ...select,
    })
  },
})
