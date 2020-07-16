import { queryField, arg } from '@nexus/schema'

export const JobFindOneQuery = queryField('findOneJob', {
  type: 'Job',
  nullable: true,
  args: {
    where: arg({
      type: 'JobWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.job.findOne({
      where,
      ...select,
    })
  },
})
