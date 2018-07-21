const express = require("express");
const expressGraphql = require("express-graphql");

const schema = require("./schema.js");
const { getCourse, getCourses } = require("./data.js");

const root = {
  course: getCourse,
  courses: getCourses
};

const app = express();
app.use(
  "/graphql",
  expressGraphql({
    schema,
    graphiql: true
  })
);

app.listen(4000, () =>
  console.log("GraphQL running at http://localhost:4000/graphql")
);
