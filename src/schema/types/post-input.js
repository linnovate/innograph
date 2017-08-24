import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

/**
 * GraphQL post input definition
 */
export default new GraphQLInputObjectType({
  name: 'PostInput',
  fields: () => ({
    title: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: GraphQLString}
  })
});