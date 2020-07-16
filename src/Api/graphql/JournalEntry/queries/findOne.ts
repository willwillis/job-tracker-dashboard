import { queryField, arg } from '@nexus/schema'

export const JournalEntryFindOneQuery = queryField('findOneJournalEntry', {
  type: 'JournalEntry',
  nullable: true,
  args: {
    where: arg({
      type: 'JournalEntryWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.journalEntry.findOne({
      where,
      ...select,
    })
  },
})
