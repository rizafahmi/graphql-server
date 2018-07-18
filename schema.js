const gql = require('graphql');

const schema = new gql.GraphQLSchema({
  query: new gql.GraphQLObjectType({
    name: 'Root',
    fields: {
      message: {
        type: gql.GraphQLString,
        resolve: async () => {
          const message = await new Promise((resolve, _reject) => {
            setTimeout(() => resolve('hello'), 3000);
          });
          return message;
        },
      },
    },
  }),
});
module.exports = schema;
