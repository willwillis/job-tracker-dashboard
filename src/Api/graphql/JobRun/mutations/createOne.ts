import { mutationField, arg } from '@nexus/schema'

export const JobRunCreateOneMutation = mutationField('createOneJobRun', {
  type: 'JobRun',
  nullable: false,
  args: {
    data: arg({
      type: 'JobRunCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.jobRun.create({
      data,
      ...select,
    })
  },
})
