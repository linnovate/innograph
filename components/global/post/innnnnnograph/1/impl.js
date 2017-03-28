
const { parse } = require('graphql');

var Post = `
type Post {
  title: String
  author: Profile
}
`;

module.exports = parse(Post);
