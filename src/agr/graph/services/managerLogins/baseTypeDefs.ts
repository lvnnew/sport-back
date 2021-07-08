import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type ManagerLogin {
  id: Int!
  login: String!
  passwordHash: String!
  role: String!
  emailVerified: Boolean!
  initialPasswordChanged: Boolean!
  locked: Boolean!
}

input ManagerLoginFilter {
  q: String
  ids: [Int]
  id: Int
  login: String
  login_in: [String]
  passwordHash: String
  passwordHash_in: [String]
  role: String
  role_in: [String]
  emailVerified: Boolean
  initialPasswordChanged: Boolean
  locked: Boolean
}

type ListMetadata {
  count: Int
}

type Query {
  ManagerLogin(id: Int!): ManagerLogin
  allManagerLogins(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ManagerLoginFilter): [ManagerLogin]
  _allManagerLoginsMeta(page: Int, perPage: Int, filter: ManagerLoginFilter): ListMetadata
}

type Mutation {
  createManagerLogin(login: String!, passwordHash: String!, role: String!, emailVerified: Boolean!, initialPasswordChanged: Boolean!, locked: Boolean!): ManagerLogin
  updateManagerLogin(id: Int!, login: String!, passwordHash: String!, role: String!, emailVerified: Boolean!, initialPasswordChanged: Boolean!, locked: Boolean!): ManagerLogin
  removeManagerLogin(id: Int!): Boolean
}

`;
