import { objectType } from '@nexus/schema'

export const Step = objectType({
  name: 'Step',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('name', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.field('job', {
      nullable: false,
      type: 'Job',
      resolve(parent: any) {
        return parent['job']
      },
    })
    t.int('jobId', { nullable: false })
    t.int('order', { nullable: false })
    t.string('successCriteria', { nullable: true })
    t.field('journalEntries', {
      nullable: false,
      list: [true],
      type: 'JournalEntry',
      args: {
        where: 'JournalEntryWhereInput',
        orderBy: 'JournalEntryOrderByInput',
        cursor: 'JournalEntryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'JournalEntryDistinctFieldEnum',
      },
      resolve(parent: any) {
        return parent['journalEntries']
      },
    })
    t.field('section', {
      nullable: false,
      type: 'Section',
      resolve(parent: any) {
        return parent['section']
      },
    })
    t.int('sectionId', { nullable: false })
  },
})
