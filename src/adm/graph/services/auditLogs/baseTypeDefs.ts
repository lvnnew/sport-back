/* eslint-disable max-len */
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
    managerLogin: String
    userId: Int
    foreign: Boolean
    foreignEntityType: String
    foreignEntityId: String
    actionData: JSON
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  """
  The 'JSON' scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
  """
  scalar JSON @specifiedBy(url: "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf")

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
    managerLogin: String
    managerLogin_in: [String]
    managerLogin_defined: Boolean
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
    actionData: JSON
    actionData_in: [JSON]
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
    createAuditLog(date: DateTime!, title: String!, success: Boolean, error: String, entityTypeId: String!, entityId: String!, actionTypeId: String!, managerId: Int, managerLogin: String, userId: Int, foreign: Boolean, foreignEntityType: String, foreignEntityId: String, actionData: JSON): AuditLog
    updateAuditLog(id: Int!, date: DateTime!, title: String!, success: Boolean, error: String, entityTypeId: String!, entityId: String!, actionTypeId: String!, managerId: Int, managerLogin: String, userId: Int, foreign: Boolean, foreignEntityType: String, foreignEntityId: String, actionData: JSON): AuditLog
    removeAuditLog(id: Int!): AuditLog
  }
`;
