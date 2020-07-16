import { queryField } from '@nexus/schema'

export const StepFindManyCountQuery = queryField('findManyStepCount', {
  type: 'Int',
  args: {
    where: 'StepWhereInput',
    orderBy: 'StepOrderByInput',
    cursor: 'StepWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.step.count(args)
  },
})
