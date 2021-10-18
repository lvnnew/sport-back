import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type AuditLog {
  id: Int!
  date: Date!
  title: String!
  entityType: String!
  entityId: String!
  action: String!
  managerId: Int
  userId: Int
  foreign: Boolean
  foreignEntityType: String
  foreignEntityId: String
  actionData: String
}

"""
A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar Date

input AuditLogFilter {
  q: String
  ids: [Int]
  id: Int
  date: Date
  date_lte: Date
  date_gte: Date
  date_lt: Date
  date_gt: Date
  title: String
  title_in: [String]
  entityType: String
  entityType_in: [String]
  entityId: String
  entityId_in: [String]
  action: String
  action_in: [String]
  managerId: Int
  managerId_in: [Int]
  userId: Int
  userId_in: [Int]
  foreign: Boolean
  foreignEntityType: String
  foreignEntityType_in: [String]
  foreignEntityId: String
  foreignEntityId_in: [String]
  actionData: String
  actionData_in: [String]
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
  createAuditLog(date: Date!, title: String!, entityType: String!, entityId: String!, action: String!, managerId: Int, userId: Int, foreign: Boolean, foreignEntityType: String, foreignEntityId: String, actionData: String): AuditLog
  updateAuditLog(id: Int!, date: Date!, title: String!, entityType: String!, entityId: String!, action: String!, managerId: Int, userId: Int, foreign: Boolean, foreignEntityType: String, foreignEntityId: String, actionData: String): AuditLog
  removeAuditLog(id: Int!): Boolean
}

`;
