import { queryField } from '@nexus/schema'

export const StepFindManyQuery = queryField('findManyStep', {
  type: 'Step',
  nullable: true,
  list: true,
  args: {
    where: 'StepWhereInput',
    orderBy: 'StepOrderByInput',
    cursor: 'StepWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.step.findMany({
      ...args,
      ...select,
    })
  },
})
