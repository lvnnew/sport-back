import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type AdminLogin {
  id: Int!
  login: String!
  passwordHash: String!
  role: String!
  emailVerified: Boolean!
  initialPasswordChanged: Boolean!
  locked: Boolean!
}

input AdminLoginFilter {
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
  AdminLogin(id: Int!): AdminLogin
  allAdminLogins(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AdminLoginFilter): [AdminLogin]
  _allAdminLoginsMeta(page: Int, perPage: Int, filter: AdminLoginFilter): ListMetadata
}

type Mutation {
  createAdminLogin(login: String!, passwordHash: String!, role: String!, emailVerified: Boolean!, initialPasswordChanged: Boolean!, locked: Boolean!): AdminLogin
  updateAdminLogin(id: Int!, login: String!, passwordHash: String!, role: String!, emailVerified: Boolean!, initialPasswordChanged: Boolean!, locked: Boolean!): AdminLogin
  removeAdminLogin(id: Int!): Boolean
}

`;
