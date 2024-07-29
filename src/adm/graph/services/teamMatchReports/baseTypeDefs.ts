/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type TeamMatchReport {
    id: Int!
    created: DateTime!
    matchId: Int!
    lastUpdated: Date
    fileId: Int
    needRecalculate: Boolean
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input TeamMatchReportFilter {
    q: String
    ids: [Int]
    id: Int
    created: DateTime
    created_lte: DateTime
    created_gte: DateTime
    created_lt: DateTime
    created_gt: DateTime
    matchId: Int
    matchId_in: [Int]
    matchId_not_in: [Int]
    lastUpdated: Date
    lastUpdated_lte: Date
    lastUpdated_gte: Date
    lastUpdated_lt: Date
    lastUpdated_gt: Date
    lastUpdated_defined: Boolean
    fileId: Int
    fileId_in: [Int]
    fileId_not_in: [Int]
    fileId_defined: Boolean
    needRecalculate: Boolean
    needRecalculate_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    TeamMatchReport(id: Int!): TeamMatchReport
    allTeamMatchReports(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: TeamMatchReportFilter): [TeamMatchReport]
    _allTeamMatchReportsMeta(page: Int, perPage: Int, filter: TeamMatchReportFilter): ListMetadata
  }

  type Mutation {
    createTeamMatchReport(created: DateTime!, matchId: Int!, lastUpdated: Date, fileId: Int, needRecalculate: Boolean): TeamMatchReport
    updateTeamMatchReport(id: Int!, created: DateTime!, matchId: Int!, lastUpdated: Date, fileId: Int, needRecalculate: Boolean): TeamMatchReport
    removeTeamMatchReport(id: Int!): TeamMatchReport
  }
`;
