const resolvers = {
  RootQuery: {
    profile(root, args){
      return { 
		id: 1,
		firstName: 'Hello',
		lastName: 'World' };
    },
  },
  Profile: {
    posts(profile){
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2},
        { id: 2, title: 'Another post', text: 'Some other text', views: 200}
      ];
    },
  },
  Post: {
    author(post){
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    },
  },
};

export default resolvers;
