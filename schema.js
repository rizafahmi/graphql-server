const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

const COURSES = require("./data/courses.js");
const STUDENTS = require("./data/students.js");

const CourseType = new GraphQLObjectType({
  name: "CourseType",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    level: { type: GraphQLString }
  }
});

const StudentType = new GraphQLObjectType({
  name: "StudentType",
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    courses: { type: new GraphQLList(CourseType) }
  }
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      courseById: {
        type: CourseType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (_parent, args, _context) => {
          return COURSES.find(course => course.id === args.id);
        }
      },
      allCourses: {
        type: new GraphQLList(CourseType),
        resolve() {
          return COURSES;
        }
      },
      allStudents: {
        type: new GraphQLList(StudentType),
        resolve() {
          return STUDENTS;
        }
      }
    }
  })
});

module.exports = schema;
