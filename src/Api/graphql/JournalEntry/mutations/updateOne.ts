import { mutationField, arg } from '@nexus/schema'

export const JournalEntryUpdateOneMutation = mutationField('updateOneJournalEntry', {
  type: 'JournalEntry',
  nullable: false,
  args: {
    where: arg({
      type: 'JournalEntryWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'JournalEntryUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.journalEntry.update({
      where,
      data,
      ...select,
    })
  },
})
