import { mutationField, arg } from '@nexus/schema'

export const SectionUpdateOneMutation = mutationField('updateOneSection', {
  type: 'Section',
  nullable: false,
  args: {
    where: arg({
      type: 'SectionWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'SectionUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.section.update({
      where,
      data,
      ...select,
    })
  },
})
