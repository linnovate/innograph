import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import authType from '../../types/auth';  
import userInputType from '../../types/user-input';

export default {
  type: authType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },
    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve (root, params, { ctrl }) {
    return ctrl.auth.login(params);
  }
};
