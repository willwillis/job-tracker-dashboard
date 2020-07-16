import { mutationField, arg } from '@nexus/schema'

export const SectionDeleteOneMutation = mutationField('deleteOneSection', {
  type: 'Section',
  nullable: true,
  args: {
    where: arg({
      type: 'SectionWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Section', where })
    return prisma.section.delete({
      where,
      ...select,
    })
  },
})
