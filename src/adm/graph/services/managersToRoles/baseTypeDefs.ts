import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ManagersToRole {
    id: Int!
    managerId: Int!
    roleId: String!
  }

  input ManagersToRoleFilter {
    q: String
    ids: [Int]
    id: Int
    managerId: Int
    managerId_in: [Int]
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
    createManagersToRole(managerId: Int!, roleId: String!): ManagersToRole
    updateManagersToRole(id: Int!, managerId: Int!, roleId: String!): ManagersToRole
    removeManagersToRole(id: Int!): ManagersToRole
  }
`;
