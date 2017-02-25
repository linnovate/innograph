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
import Product from './schemas/innovation/product.js';
import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './schemas/innovation/resolvers';


const RootQuery = `
  type RootQuery {
    product(name: String): Product
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;



export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Product],
  resolvers: Resolvers
})
