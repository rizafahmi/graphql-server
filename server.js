const express = require('express');
const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => 'Hello, GraphQL',
};

const app = express();
app.use(
  '/graphql',
  expressGraphql({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000, () => console.log('Server running at http://localhost:4000/graphql'));
