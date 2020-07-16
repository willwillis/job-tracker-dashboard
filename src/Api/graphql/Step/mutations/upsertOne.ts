import { mutationField, arg } from '@nexus/schema'

export const StepUpsertOneMutation = mutationField('upsertOneStep', {
  type: 'Step',
  nullable: false,
  args: {
    where: arg({
      type: 'StepWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'StepCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'StepUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.step.upsert({
      ...args,
      ...select,
    })
  },
})
