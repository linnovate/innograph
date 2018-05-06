import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
  } from 'graphql';
  
  export default new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      fullname: {
        type: GraphQLString
      }
    })
  });