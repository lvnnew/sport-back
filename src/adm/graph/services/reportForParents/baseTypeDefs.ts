/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ReportForParent {
    id: Int!
    title: String!
    playerId: Int!
    matchId: Int!
    parentId: Int!
    lastUpdated: Date
    paid: Boolean
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input ReportForParentFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    playerId: Int
    playerId_in: [Int]
    playerId_not_in: [Int]
    matchId: Int
    matchId_in: [Int]
    matchId_not_in: [Int]
    parentId: Int
    parentId_in: [Int]
    parentId_not_in: [Int]
    lastUpdated: Date
    lastUpdated_lte: Date
    lastUpdated_gte: Date
    lastUpdated_lt: Date
    lastUpdated_gt: Date
    lastUpdated_defined: Boolean
    paid: Boolean
    paid_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    ReportForParent(id: Int!): ReportForParent
    allReportForParents(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ReportForParentFilter): [ReportForParent]
    _allReportForParentsMeta(page: Int, perPage: Int, filter: ReportForParentFilter): ListMetadata
  }

  type Mutation {
    createReportForParent(title: String!, playerId: Int!, matchId: Int!, parentId: Int!, lastUpdated: Date, paid: Boolean): ReportForParent
    updateReportForParent(id: Int!, title: String!, playerId: Int!, matchId: Int!, parentId: Int!, lastUpdated: Date, paid: Boolean): ReportForParent
    removeReportForParent(id: Int!): ReportForParent
  }
`;
