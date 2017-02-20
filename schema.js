/*  import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

var  testSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

export {testSchema};
*/


// schema.js
import Author from './schemas/innovation/author.js';
import { makeExecutableSchema } from 'graphql-tools';

const RootQuery = `
  type RootQuery {
    author(name: String): Author
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Author],
  resolvers: {},
})
