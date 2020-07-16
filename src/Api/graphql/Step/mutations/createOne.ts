import { mutationField, arg } from '@nexus/schema'

export const StepCreateOneMutation = mutationField('createOneStep', {
  type: 'Step',
  nullable: false,
  args: {
    data: arg({
      type: 'StepCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.step.create({
      data,
      ...select,
    })
  },
})
