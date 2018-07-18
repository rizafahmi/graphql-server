const gql = require('graphql');

const schema = new gql.GraphQLSchema({
  query: new gql.GraphQLObjectType({
    name: 'Root',
    fields: {
      message: {
        type: gql.GraphQLString,
        resolve: () => 'Hello, GraphQL',
      },
    },
  }),
});
module.exports = schema;
