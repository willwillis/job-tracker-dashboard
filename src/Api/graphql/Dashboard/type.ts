import { objectType } from '@nexus/schema'

export const Dashboard = objectType({
  name: 'Dashboard',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('name', { nullable: false })
    t.field('groups', {
      nullable: false,
      list: [true],
      type: 'Group',
      args: {
        where: 'GroupWhereInput',
        orderBy: 'GroupOrderByInput',
        cursor: 'GroupWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'GroupDistinctFieldEnum',
      },
      resolve(parent: any) {
        return parent['groups']
      },
    })
    t.field('sections', {
      nullable: false,
      list: [true],
      type: 'Section',
      args: {
        where: 'SectionWhereInput',
        orderBy: 'SectionOrderByInput',
        cursor: 'SectionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SectionDistinctFieldEnum',
      },
      resolve(parent: any) {
        return parent['sections']
      },
    })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.boolean('published', { nullable: false })
    t.int('minuteOffset', { nullable: false })
  },
})
