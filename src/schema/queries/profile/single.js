import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import profileType from '../../types/profile';

export default {
  type: profileType,
  args: {
    username: {
      name: 'username',
      type: new GraphQLNonNull(GraphQLString)
    },
  },
  resolve (root, params, { ctrl }) {
    return ctrl.profile.load(params)
  }
};