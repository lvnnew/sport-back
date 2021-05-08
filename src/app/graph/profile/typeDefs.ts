import {gql} from 'apollo-server';

const typeDefs = gql`
  type Profile {
    email: String!
    lastname: String
    firstname: String
  }
  type Query {
    Profile: Profile
  }
  type Mutation {
    changePassword(prevPassword: String!, newPassword: String!): Profile
  }
`;

export default typeDefs;

