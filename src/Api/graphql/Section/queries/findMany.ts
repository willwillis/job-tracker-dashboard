import { queryField } from '@nexus/schema'

export const SectionFindManyQuery = queryField('findManySection', {
  type: 'Section',
  nullable: true,
  list: true,
  args: {
    where: 'SectionWhereInput',
    orderBy: 'SectionOrderByInput',
    cursor: 'SectionWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.section.findMany({
      ...args,
      ...select,
    })
  },
})
