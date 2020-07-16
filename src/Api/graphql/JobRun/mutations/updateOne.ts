import { mutationField, arg } from '@nexus/schema'

export const JobRunUpdateOneMutation = mutationField('updateOneJobRun', {
  type: 'JobRun',
  nullable: false,
  args: {
    where: arg({
      type: 'JobRunWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'JobRunUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.jobRun.update({
      where,
      data,
      ...select,
    })
  },
})
