const Resolver = {
  Query: {
    profiles() {
      return [{id: '1', firstName: 'dsds'},{id: '2', firstName: 'dsds'},{id: '3', firstName: 'dsds'} ]
    },
  },
};
module.exports = Resolver;