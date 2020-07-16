import { mutationField, arg } from '@nexus/schema'

export const JobRunUpsertOneMutation = mutationField('upsertOneJobRun', {
  type: 'JobRun',
  nullable: false,
  args: {
    where: arg({
      type: 'JobRunWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'JobRunCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'JobRunUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.jobRun.upsert({
      ...args,
      ...select,
    })
  },
})
