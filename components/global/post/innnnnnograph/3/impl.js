
var schema = `
type Post {
  title: String
  author: Profile
}
`;

var resolver = {
  Post: {
    title() {
      return 'hello world';
    },
    author(obj, args, context, info) {
      return info.schema.getType('Profile');
    }
  }
};

module.exports = {
  schema,
  resolver
};
