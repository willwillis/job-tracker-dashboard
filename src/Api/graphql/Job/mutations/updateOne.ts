import { mutationField, arg } from '@nexus/schema'

export const JobUpdateOneMutation = mutationField('updateOneJob', {
  type: 'Job',
  nullable: false,
  args: {
    where: arg({
      type: 'JobWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'JobUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.job.update({
      where,
      data,
      ...select,
    })
  },
})
