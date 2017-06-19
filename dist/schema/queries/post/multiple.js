'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _post = require('../../types/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: new _graphql.GraphQLList(_post2.default),
  args: {
    limit: {
      name: 'limit',
      type: _graphql.GraphQLInt
    },
    skip: {
      name: 'skip',
      type: _graphql.GraphQLInt
    }
  },
  resolve: function resolve(root, params, _ref) {
    var ctrl = _ref.ctrl;

    return ctrl.post.list(params);
  }
};