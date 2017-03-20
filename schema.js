// schema.js
import template from 'innograph-template';
import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './schemas/social/resolvers';
import bit from 'bit-js';

const Profile = bit('innograph/social');
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

console.log('----');

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Profile],
  resolvers: template.Resolvers
})
