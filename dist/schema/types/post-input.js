'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'PostInput',
  fields: function fields() {
    return {
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      content: { type: _graphql.GraphQLString }
    };
  }
});