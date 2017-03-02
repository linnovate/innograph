// schema.js
import  Profile from 'innograph-template';
import { makeExecutableSchema } from 'graphql-tools';

const RootQuery = `
  type RootQuery {
    profile(firstName: String): Profile
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Profile]
})
