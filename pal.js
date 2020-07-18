module.exports = {
  backend: {
    generator: 'nexus-schema',
    onDelete: true,
    output: 'src/Api/graphql',
    excludeQueriesAndMutations: ['aggregate', 'deleteMany', 'updateMany'],
  },
  frontend: {
    admin: {
      outPut: 'src/pages/models',
    },
    graphql: {
      excludeQueriesAndMutations: ['deleteMany', 'updateMany'],
    },
  },
};
