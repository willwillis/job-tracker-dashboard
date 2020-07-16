import { mutationField, arg } from '@nexus/schema'

export const StepUpdateOneMutation = mutationField('updateOneStep', {
  type: 'Step',
  nullable: false,
  args: {
    where: arg({
      type: 'StepWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'StepUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.step.update({
      where,
      data,
      ...select,
    })
  },
})
