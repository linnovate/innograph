import Post from './post.js';

const Profile = `
  type Profile {
    firstName: String
    lastName: String
    name: String
    email: String
    posts: [Post]
  }
`;

export default () => [Profile, Post ];
