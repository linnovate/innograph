import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,
  } from 'graphql';
  
  export default new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      fullname: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      roles: {
        type: new GraphQLList(GraphQLString)
      },
      isAdmin: {
        type: GraphQLString
      }
    })
  });