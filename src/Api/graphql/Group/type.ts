import { objectType } from '@nexus/schema'

export const Group = objectType({
  name: 'Group',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('name', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.field('dashboards', {
      nullable: false,
      list: [true],
      type: 'Dashboard',
      args: {
        where: 'DashboardWhereInput',
        orderBy: 'DashboardOrderByInput',
        cursor: 'DashboardWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'DashboardDistinctFieldEnum',
      },
      resolve(parent: any) {
        return parent['dashboards']
      },
    })
    t.field('users', {
      nullable: false,
      list: [true],
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByInput',
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserDistinctFieldEnum',
      },
      resolve(parent: any) {
        return parent['users']
      },
    })
  },
})
