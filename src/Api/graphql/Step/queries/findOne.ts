import { queryField, arg } from '@nexus/schema'

export const StepFindOneQuery = queryField('findOneStep', {
  type: 'Step',
  nullable: true,
  args: {
    where: arg({
      type: 'StepWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.step.findOne({
      where,
      ...select,
    })
  },
})
