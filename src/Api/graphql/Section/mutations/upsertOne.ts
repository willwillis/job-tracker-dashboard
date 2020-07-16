import { mutationField, arg } from '@nexus/schema'

export const SectionUpsertOneMutation = mutationField('upsertOneSection', {
  type: 'Section',
  nullable: false,
  args: {
    where: arg({
      type: 'SectionWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'SectionCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'SectionUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.section.upsert({
      ...args,
      ...select,
    })
  },
})
