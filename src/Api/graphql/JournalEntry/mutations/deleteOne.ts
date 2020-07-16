import { mutationField, arg } from '@nexus/schema'

export const JournalEntryDeleteOneMutation = mutationField('deleteOneJournalEntry', {
  type: 'JournalEntry',
  nullable: true,
  args: {
    where: arg({
      type: 'JournalEntryWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'JournalEntry', where })
    return prisma.journalEntry.delete({
      where,
      ...select,
    })
  },
})
