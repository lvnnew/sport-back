import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type AuditLog {
    id: Int!
    date: DateTime!
    title: String!
    success: Boolean
    error: String
    entityTypeId: String!
    entityId: String!
    actionTypeId: String!
    managerId: Int
    userId: Int
    foreign: Boolean
    foreignEntityType: String
    foreignEntityId: String
    actionData: String
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  input AuditLogFilter {
    q: String
    ids: [Int]
    id: Int
    date: DateTime
    date_lte: DateTime
    date_gte: DateTime
    date_lt: DateTime
    date_gt: DateTime
    title: String
    title_in: [String]
    success: Boolean
    success_defined: Boolean
    error: String
    error_in: [String]
    error_defined: Boolean
    entityTypeId: String
    entityTypeId_in: [String]
    entityId: String
    entityId_in: [String]
    actionTypeId: String
    actionTypeId_in: [String]
    managerId: Int
    managerId_in: [Int]
    managerId_defined: Boolean
    userId: Int
    userId_in: [Int]
    userId_defined: Boolean
    foreign: Boolean
    foreign_defined: Boolean
    foreignEntityType: String
    foreignEntityType_in: [String]
    foreignEntityType_defined: Boolean
    foreignEntityId: String
    foreignEntityId_in: [String]
    foreignEntityId_defined: Boolean
    actionData: String
    actionData_in: [String]
    actionData_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    AuditLog(id: Int!): AuditLog
    allAuditLogs(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AuditLogFilter): [AuditLog]
    _allAuditLogsMeta(page: Int, perPage: Int, filter: AuditLogFilter): ListMetadata
  }

  type Mutation {
    createAuditLog(date: DateTime!, title: String!, success: Boolean, error: String, entityTypeId: String!, entityId: String!, actionTypeId: String!, managerId: Int, userId: Int, foreign: Boolean, foreignEntityType: String, foreignEntityId: String, actionData: String): AuditLog
    updateAuditLog(id: Int!, date: DateTime!, title: String!, success: Boolean, error: String, entityTypeId: String!, entityId: String!, actionTypeId: String!, managerId: Int, userId: Int, foreign: Boolean, foreignEntityType: String, foreignEntityId: String, actionData: String): AuditLog
    removeAuditLog(id: Int!): AuditLog
  }
`;
