
const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const bit = require('bit-js');
const port = process.env.PORT || 4000;

const Post = bit('post');
const Profile = bit('profile');

const rootSchema = `
type Query {
  posts: [Post]
}
type Mutation {
  post: String
}
`;

const rootResolver = {
  Query: {
    posts(obj, args, context, info) {
      return [info.schema.getType('Post')];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs: [rootSchema, Post.schema, Profile.schema],
  resolvers: Object.assign(rootResolver, Post.resolver, Profile.resolver)
});


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log('running at http://localhost:' + port + '/graphql');
});
