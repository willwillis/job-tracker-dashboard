import { queryField, arg } from '@nexus/schema'

export const SectionFindOneQuery = queryField('findOneSection', {
  type: 'Section',
  nullable: true,
  args: {
    where: arg({
      type: 'SectionWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.section.findOne({
      where,
      ...select,
    })
  },
})
