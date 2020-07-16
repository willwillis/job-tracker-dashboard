import { mutationField, arg } from '@nexus/schema'

export const JobUpsertOneMutation = mutationField('upsertOneJob', {
  type: 'Job',
  nullable: false,
  args: {
    where: arg({
      type: 'JobWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'JobCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'JobUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.job.upsert({
      ...args,
      ...select,
    })
  },
})
