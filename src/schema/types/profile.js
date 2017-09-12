import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});