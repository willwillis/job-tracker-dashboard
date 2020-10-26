import { objectType } from '@nexus/schema'

export const Section = objectType({
  name: 'Section',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('name', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.boolean('published', { nullable: false })
    t.int('order', { nullable: false })
    t.string('successCriteria', { nullable: true })
    t.field('dashboard', {
      nullable: true,
      type: 'Dashboard',
      resolve(parent: any) {
        return parent['dashboard']
      },
    })
    t.int('dashboardId', { nullable: true })
    t.field('steps', {
      nullable: false,
      list: [true],
      type: 'Step',
      args: {
        where: 'StepWhereInput',
        orderBy: 'StepOrderByInput',
        cursor: 'StepWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'StepDistinctFieldEnum',
      },
      resolve(parent: any) {
        return parent['steps']
      },
    })
  },
})
