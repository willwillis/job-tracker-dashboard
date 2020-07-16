import { mutationField, arg } from '@nexus/schema'

export const StepDeleteOneMutation = mutationField('deleteOneStep', {
  type: 'Step',
  nullable: true,
  args: {
    where: arg({
      type: 'StepWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Step', where })
    return prisma.step.delete({
      where,
      ...select,
    })
  },
})
