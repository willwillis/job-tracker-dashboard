import { mutationField, arg } from '@nexus/schema'

export const JournalEntryUpsertOneMutation = mutationField('upsertOneJournalEntry', {
  type: 'JournalEntry',
  nullable: false,
  args: {
    where: arg({
      type: 'JournalEntryWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'JournalEntryCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'JournalEntryUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.journalEntry.upsert({
      ...args,
      ...select,
    })
  },
})
