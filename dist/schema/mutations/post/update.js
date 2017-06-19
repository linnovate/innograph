'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _post = require('../../types/post');

var _post2 = _interopRequireDefault(_post);

var _postInput = require('../../types/post-input');

var _postInput2 = _interopRequireDefault(_postInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _post2.default,
  args: {
    id: {
      name: 'id',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    },
    data: {
      name: 'data',
      type: _postInput2.default
    }
  },
  resolve: function resolve(root, params, _ref) {
    var ctrl = _ref.ctrl;

    return ctrl.post.update(params);
  }
};