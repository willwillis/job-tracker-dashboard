import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.string('email', { nullable: false })
    t.string('name', { nullable: true })
    t.string('password', { nullable: false })
    t.field('group', {
      nullable: true,
      type: 'Group',
      resolve(parent: any) {
        return parent['group']
      },
    })
    t.int('groupId', { nullable: true })
  },
})
