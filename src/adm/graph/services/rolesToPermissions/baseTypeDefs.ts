import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type RolesToPermission {
  id: Int!
  roleId: String!
  permissionId: String!
}

input RolesToPermissionFilter {
  q: String
  ids: [Int]
  id: Int
  roleId: String
  roleId_in: [String]
  permissionId: String
  permissionId_in: [String]
}

type ListMetadata {
  count: Int
}

type Query {
  RolesToPermission(id: Int!): RolesToPermission
  allRolesToPermissions(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: RolesToPermissionFilter): [RolesToPermission]
  _allRolesToPermissionsMeta(page: Int, perPage: Int, filter: RolesToPermissionFilter): ListMetadata
}

type Mutation {
  createRolesToPermission(roleId: String!, permissionId: String!): RolesToPermission
  updateRolesToPermission(id: Int!, roleId: String!, permissionId: String!): RolesToPermission
  removeRolesToPermission(id: Int!): Boolean
}
`;
