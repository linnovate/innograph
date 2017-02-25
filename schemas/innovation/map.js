import Profile from '../social/profile';

const Map = `
  type Map {
    name: String
    type: String
    owner: Profile
    creator: Profile
  }
`;

export default () => [Map, Profile];
