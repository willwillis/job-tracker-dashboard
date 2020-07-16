import { queryField } from '@nexus/schema'

export const JournalEntryFindManyCountQuery = queryField('findManyJournalEntryCount', {
  type: 'Int',
  args: {
    where: 'JournalEntryWhereInput',
    orderBy: 'JournalEntryOrderByInput',
    cursor: 'JournalEntryWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.journalEntry.count(args)
  },
})
