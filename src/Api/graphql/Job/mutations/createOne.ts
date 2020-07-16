import { mutationField, arg } from '@nexus/schema'

export const JobCreateOneMutation = mutationField('createOneJob', {
  type: 'Job',
  nullable: false,
  args: {
    data: arg({
      type: 'JobCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.job.create({
      data,
      ...select,
    })
  },
})
