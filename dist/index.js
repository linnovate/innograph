'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(path, _app, _ctrl) {
  var app = _app || (0, _express2.default)();
  path = path || '/graphql';
  app.use(path, function (req, res) {
    var ctrl = {
      post: {
        load: _ctrl && _ctrl.post ? _ctrl.post.load : _controllers2.default.post.load,
        list: _ctrl && _ctrl.post ? _ctrl.post.list : _controllers2.default.post.list,
        create: _ctrl && _ctrl.post ? _ctrl.post.create : _controllers2.default.post.create,
        remove: _ctrl && _ctrl.post ? _ctrl.post.remove : _controllers2.default.post.remove,
        update: _ctrl && _ctrl.post ? _ctrl.post.update : _controllers2.default.post.update
      },
      profile: {
        load: _ctrl && _ctrl.profile ? _ctrl.profile.load : _controllers2.default.profile.load
      }
    };
    (0, _expressGraphql2.default)({
      schema: _schema2.default,
      graphiql: true,
      context: { ctrl: ctrl }
    })(req, res);
  });
  if (!_app) app.listen(1111);
}

module.exports = { init: init };