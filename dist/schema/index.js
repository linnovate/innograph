'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _queries = require('./queries');

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: _queries2.default
  }),
  mutation: new _graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: _mutations2.default
  })
});