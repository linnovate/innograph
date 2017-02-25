// schema.js
import Profile from './schemas/social/profile.js';
import Resolvers from './schemas/social/resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const RootQuery = `
  type RootQuery {
    profile(name: String): Profile
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Profile],
  resolvers: Resolvers
})
