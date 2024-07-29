import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type WscUser {
    id: Int!
    login: String!
    passwordHash: String!
    accessToken: String
  }

  input WscUserFilter {
    q: String
    ids: [Int]
    id: Int
    login: String
    login_in: [String]
    login_not_in: [String]
    passwordHash: String
    passwordHash_in: [String]
    passwordHash_not_in: [String]
    accessToken: String
    accessToken_in: [String]
    accessToken_not_in: [String]
    accessToken_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    WscUser(id: Int!): WscUser
    allWscUsers(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: WscUserFilter): [WscUser]
    _allWscUsersMeta(page: Int, perPage: Int, filter: WscUserFilter): ListMetadata
  }

  type Mutation {
    createWscUser(login: String!, passwordHash: String!, accessToken: String): WscUser
    updateWscUser(id: Int!, login: String!, passwordHash: String!, accessToken: String): WscUser
    removeWscUser(id: Int!): WscUser
  }
`;
