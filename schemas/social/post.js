import Profile from './profile.js';

const Post = `
  type Post {
    title: String
    author: Post
  }
`;

export default () => [Post, Profile];
