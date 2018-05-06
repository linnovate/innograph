import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import userType from './user';


export default new GraphQLObjectType({
  name: 'Auth',
  fields: () => ({
    token: {
      type: GraphQLString,
      resolve: (root) =>{
        return root.token;
      }
    },
    user: {
      type: userType,
      resolve: (root) => {
        return root;
      }
    }
  })
});