import Profile from './profile.js';

const Post = `
  type Post {
    title: String
    author: Profile
  }
`;

export default () => [Post, Profile];
