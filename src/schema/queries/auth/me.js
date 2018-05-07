import {
    GraphQLNonNull,
    GraphQLString,
  } from 'graphql';
  
  import authType from '../../types/auth';  
  import userInputType from '../../types/user-input';
  
  export default {
    type: authType,
    resolve (root, params, { ctrl, user }) {
      return new Promise.resolve({user:user});
    }
  };
  