const gql = require('graphql');

const schema = new gql.GraphQLSchema({
  query: new gql.GraphQLObjectType({
    name: 'Root',
    fields: {
      message: {
        type: gql.GraphQLString,
        resolve: async () => await new Promise((resolve, _reject) => {
          setTimeout(() => resolve('hello'), 3000);
        }),
      },
      messages: {
        type: new gql.GraphQLObjectType({
          name: 'messages',
          fields: {
            message: {
              type: gql.GraphQLString,
            },
          },
        }),
        resolve: () => ({
          message: 'Hello, GraphQL!',
        }),
      },
    },
  }),
});
module.exports = schema;
