import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import postInputType from '../../types/post-input';

/**
 * add a new post 
 */
export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(postInputType)
    }
  },
  resolve (root, params, { ctrl }) {
    return ctrl.post.create(params);
  }
};

