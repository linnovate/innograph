// schema.js
import template from 'innograph-template';
import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './schemas/social/resolvers';
import Profile from './schemas/social/profile';

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

console.log('profile:',template.Profile());
console.log('----');
console.log('profile2:',Profile());

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Profile],
  resolvers: template.Resolvers
})
