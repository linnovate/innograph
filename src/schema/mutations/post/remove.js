import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import postType from '../../types/post';

/**
 * remove a component
 * @example
 * mutation {
 * remove(id: 4) {
 *   id,
 *   title,
 *   content
 * }
 *}
 */
export default {
  type: postType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, { ctrl }) {
    return ctrl.post.remove(params);
  }
};