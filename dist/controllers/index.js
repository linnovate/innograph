'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _post = require('./post.controller');

var _post2 = _interopRequireDefault(_post);

var _profile = require('./profile.controller');

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ctrl = {
    post: _post2.default,
    profile: _profile2.default
};

exports.default = ctrl;