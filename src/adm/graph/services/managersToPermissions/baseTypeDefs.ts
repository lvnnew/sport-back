/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ManagersToPermission {
    id: Int!
    managerId: Int!
    permissionId: String!
    expiresAt: Date
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input ManagersToPermissionFilter {
    q: String
    ids: [Int]
    id: Int
    managerId: Int
    managerId_in: [Int]
    permissionId: String
    permissionId_in: [String]
    expiresAt: Date
    expiresAt_lte: Date
    expiresAt_gte: Date
    expiresAt_lt: Date
    expiresAt_gt: Date
    expiresAt_defined: Boolean
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
    createManagersToPermission(managerId: Int!, permissionId: String!, expiresAt: Date): ManagersToPermission
    updateManagersToPermission(id: Int!, managerId: Int!, permissionId: String!, expiresAt: Date): ManagersToPermission
    removeManagersToPermission(id: Int!): ManagersToPermission
  }
`;
