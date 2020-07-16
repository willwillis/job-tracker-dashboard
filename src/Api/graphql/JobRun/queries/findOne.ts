import { queryField, arg } from '@nexus/schema'

export const JobRunFindOneQuery = queryField('findOneJobRun', {
  type: 'JobRun',
  nullable: true,
  args: {
    where: arg({
      type: 'JobRunWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.jobRun.findOne({
      where,
      ...select,
    })
  },
})
