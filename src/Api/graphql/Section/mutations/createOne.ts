import { mutationField, arg } from '@nexus/schema'

export const SectionCreateOneMutation = mutationField('createOneSection', {
  type: 'Section',
  nullable: false,
  args: {
    data: arg({
      type: 'SectionCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.section.create({
      data,
      ...select,
    })
  },
})
