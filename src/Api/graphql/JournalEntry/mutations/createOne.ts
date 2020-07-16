import { mutationField, arg } from '@nexus/schema'

export const JournalEntryCreateOneMutation = mutationField('createOneJournalEntry', {
  type: 'JournalEntry',
  nullable: false,
  args: {
    data: arg({
      type: 'JournalEntryCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.journalEntry.create({
      data,
      ...select,
    })
  },
})
