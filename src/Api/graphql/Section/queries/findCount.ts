import { queryField } from '@nexus/schema'

export const SectionFindManyCountQuery = queryField('findManySectionCount', {
  type: 'Int',
  args: {
    where: 'SectionWhereInput',
    orderBy: 'SectionOrderByInput',
    cursor: 'SectionWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.section.count(args)
  },
})
