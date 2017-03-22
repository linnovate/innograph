// schema.js //
import template from 'innograph-template';
import { makeExecutableSchema } from 'graphql-tools';
import bit from 'bit-js';

const { ProfileSchema, Resolver } = bit('social/profile')();
console.log ('---');
console.log( typeof(ProfileSchema) );
console.log ('---');
console.log( Resolver );


const RootQuery = `
  type RootQuery {
    profile(firstName: String): ProfileSchema
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;
console.log('----');

console.log(SchemaDefinition);


export default makeExecutableSchema({
  typeDefs: [ SchemaDefinition, RootQuery, ProfileSchema ],
  resolvers: Resolver
})
