'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _postInput = require('../../types/post-input');

var _postInput2 = _interopRequireDefault(_postInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _graphql.GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_postInput2.default)
    }
  },
  resolve: function resolve(root, params, _ref) {
    var ctrl = _ref.ctrl;

    return ctrl.post.create(params);
  }
};