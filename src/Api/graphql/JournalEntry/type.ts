import { objectType } from '@nexus/schema'

export const JournalEntry = objectType({
  name: 'JournalEntry',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('entry', { nullable: false })
    t.field('step', {
      nullable: false,
      type: 'Step',
      resolve(parent: any) {
        return parent['step']
      },
    })
    t.int('stepId', { nullable: false })
    t.field('author', {
      nullable: false,
      type: 'User',
      resolve(parent: any) {
        return parent['author']
      },
    })
    t.int('authorId', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
  },
})
