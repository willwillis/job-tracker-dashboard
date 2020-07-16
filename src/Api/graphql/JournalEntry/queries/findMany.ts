import { queryField } from '@nexus/schema'

export const JournalEntryFindManyQuery = queryField('findManyJournalEntry', {
  type: 'JournalEntry',
  nullable: true,
  list: true,
  args: {
    where: 'JournalEntryWhereInput',
    orderBy: 'JournalEntryOrderByInput',
    cursor: 'JournalEntryWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.journalEntry.findMany({
      ...args,
      ...select,
    })
  },
})
