import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type AppLogin {
  id: Int!
  login: String!
  passwordHash: String!
  userId: Int!
}

input AppLoginFilter {
  q: String
  ids: [Int]
  id: Int
  login: String
  login_in: [String]
  passwordHash: String
  passwordHash_in: [String]
  userId: Int
  userId_in: [Int]
}

type ListMetadata {
  count: Int
}

type Query {
  AppLogin(id: Int!): AppLogin
  allAppLogins(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AppLoginFilter): [AppLogin]
  _allAppLoginsMeta(page: Int, perPage: Int, filter: AppLoginFilter): ListMetadata
}

type Mutation {
  createAppLogin(login: String!, passwordHash: String!, userId: Int!): AppLogin
  updateAppLogin(id: Int!, login: String!, passwordHash: String!, userId: Int!): AppLogin
  removeAppLogin(id: Int!): Boolean
}

`;
