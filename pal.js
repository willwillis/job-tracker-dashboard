module.exports = {
  backend: {
    generator: 'nexus',
    onDelete: true,
    output: 'src/Api/graphql',
    excludeQueriesAndMutations: ['aggregate', 'deleteMany', 'updateMany'],
  },
  frontend: {
    admin: {
      outPut: 'src/pages/models',
    },
  },
};
