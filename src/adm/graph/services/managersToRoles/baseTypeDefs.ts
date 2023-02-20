import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ManagersToRole {
    id: Int!
    managerId: Int!
    roleId: String!
    expiresAt: Date
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input ManagersToRoleFilter {
    q: String
    ids: [Int]
    id: Int
    managerId: Int
    managerId_in: [Int]
    roleId: String
    roleId_in: [String]
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
    ManagersToRole(id: Int!): ManagersToRole
    allManagersToRoles(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ManagersToRoleFilter): [ManagersToRole]
    _allManagersToRolesMeta(page: Int, perPage: Int, filter: ManagersToRoleFilter): ListMetadata
  }

  type Mutation {
    createManagersToRole(managerId: Int!, roleId: String!, expiresAt: Date): ManagersToRole
    updateManagersToRole(id: Int!, managerId: Int!, roleId: String!, expiresAt: Date): ManagersToRole
    removeManagersToRole(id: Int!): ManagersToRole
  }
`;
