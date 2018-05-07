import {
    GraphQLNonNull
  } from 'graphql';

  import authType from '../../types/auth';  
  import userInputType from '../../types/user-input';
  
  export default {
    type: authType,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(userInputType)
      }
    },
    resolve (root, params, { ctrl }) {
      return ctrl.user.create(params);
    }
  };