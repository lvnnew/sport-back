import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type Admin {
  id: Int!
  lastname: String!
  firstname: String!
  email: String!
}

input AdminFilter {
  q: String
  ids: [Int]
  id: Int
  lastname: String
  lastname_in: [String]
  firstname: String
  firstname_in: [String]
  email: String
  email_in: [String]
}

type ListMetadata {
  count: Int
}

type Query {
  Admin(id: Int!): Admin
  allAdmins(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AdminFilter): [Admin]
  _allAdminsMeta(page: Int, perPage: Int, filter: AdminFilter): ListMetadata
}

type Mutation {
  createAdmin(lastname: String!, firstname: String!, email: String!): Admin
  updateAdmin(id: Int!, lastname: String!, firstname: String!, email: String!): Admin
  removeAdmin(id: Int!): Boolean
}

`;
