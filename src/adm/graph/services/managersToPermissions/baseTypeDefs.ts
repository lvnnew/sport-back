import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ManagersToPermission {
    id: Int!
    managerId: Int!
    permissionId: String!
  }

  input ManagersToPermissionFilter {
    q: String
    ids: [Int]
    id: Int
    managerId: Int
    managerId_in: [Int]
    permissionId: String
    permissionId_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    ManagersToPermission(id: Int!): ManagersToPermission
    allManagersToPermissions(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ManagersToPermissionFilter): [ManagersToPermission]
    _allManagersToPermissionsMeta(page: Int, perPage: Int, filter: ManagersToPermissionFilter): ListMetadata
  }

  type Mutation {
    createManagersToPermission(managerId: Int!, permissionId: String!): ManagersToPermission
    updateManagersToPermission(id: Int!, managerId: Int!, permissionId: String!): ManagersToPermission
    removeManagersToPermission(id: Int!): ManagersToPermission
  }
`;
