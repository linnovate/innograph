// schema.js //
import { makeExecutableSchema } from 'graphql-tools';
import bit from 'bit-js';

const Profile = bit('profile/schema');
const Resolver = bit('profile/resolver');

const RootQuery = `
  type Query {
    profiles: [Profile]
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Profile],
  resolvers: Resolver,
  allowUndefinedInResolve: false
})
