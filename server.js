const express = require("express");
const expressGraphql = require("express-graphql");

const schema = require("./schema.js");

const app = express();
app.use(
  "/graphql",
  expressGraphql({
    schema,
    graphiql: true
  })
);

app.listen(4000, () =>
  console.log("Server running at http://localhost:4000/graphql")
);
