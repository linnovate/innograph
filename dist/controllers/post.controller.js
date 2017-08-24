'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function load(params) {
  return { id: '1', title: 'new post' };
}

function get(req, res) {
  return res.json(req.post);
}

function create(params) {
  return true;
}

function update(params) {
  return { id: '1', title: 'new post' };
}

function list(params) {
  return [{ id: '1', title: 'new post' }, { id: '2', title: 'new post' }];
}

function remove(params) {
  return { id: '1', title: 'new post' };
}

exports.default = { load: load, create: create, update: update, list: list, remove: remove };