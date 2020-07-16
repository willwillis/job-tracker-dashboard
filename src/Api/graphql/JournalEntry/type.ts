import { objectType } from '@nexus/schema'

export const JournalEntry = objectType({
  name: 'JournalEntry',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('entry', { nullable: true })
    t.field('step', {
      nullable: false,
      type: 'Step',
      resolve(parent: any) {
        return parent['step']
      },
    })
    t.int('stepId', { nullable: false })
  },
})
