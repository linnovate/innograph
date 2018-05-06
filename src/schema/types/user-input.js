import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    fullname: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
    repeatPassword: {
      type: new GraphQLNonNull(GraphQLString)
    },
  })
});