function load(params) {
  return {id: '1', title: 'new post'}
}

function get(req, res) {
  return res.json(req.post);
}

function create(params) {
  return true;
}

function update(params) {
  return {id: '1', title: 'new post'}
}

function list(params) {
  return [{id: '1', title: 'new post'}, {id: '2', title: 'new post'}]
}

function remove(params) {
  return {id: '1', title: 'new post'}
}

export default { load, create, update, list, remove };
