import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import postType from '../../types/post';
import postInputType from '../../types/post-input';

/**
 * update a post
 * @example
 * mutation {
 *  update(id: 4,
 *  data: {
 *    title: 'foo bar',
 *    content: 'foo bar is the best!'
 *  }) {
 *   id,
 *   title,
 *   content
 *  }
 * };
 */
export default {
  type: postType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: postInputType
    }
  },
  resolve (root, params, { ctrl }) {
    return ctrl.post.update(params);
  }
};