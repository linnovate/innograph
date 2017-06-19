'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLObjectType({
  name: 'Post',
  fields: function fields() {
    return {
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
      },
      title: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      content: {
        type: _graphql.GraphQLString
      }

    };
  }
});