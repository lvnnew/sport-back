import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type ManagersToRole {
  id: Int!
  title: String
  manageId: Int!
  roleId: String!
}

input ManagersToRoleFilter {
  q: String
  ids: [Int]
  id: Int
  title: String
  title_in: [String]
  manageId: Int
  manageId_in: [Int]
  roleId: String
  roleId_in: [String]
}

type ListMetadata {
  count: Int
}

type Query {
  ManagersToRole(id: Int!): ManagersToRole
  allManagersToRoles(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ManagersToRoleFilter): [ManagersToRole]
  _allManagersToRolesMeta(page: Int, perPage: Int, filter: ManagersToRoleFilter): ListMetadata
}

type Mutation {
  createManagersToRole(title: String, manageId: Int!, roleId: String!): ManagersToRole
  updateManagersToRole(id: Int!, title: String, manageId: Int!, roleId: String!): ManagersToRole
  removeManagersToRole(id: Int!): Boolean
}

`;
