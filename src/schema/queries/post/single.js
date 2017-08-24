import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import postType from '../../types/post';

/**
 * query for a single post
 */
export default {
  type: postType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve (root, params, { ctrl }) {
    return ctrl.post.load(params)
  }
};
