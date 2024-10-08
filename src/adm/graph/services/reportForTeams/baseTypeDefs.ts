/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ReportForTeam {
    id: Int!
    created: DateTime!
    title: String!
    teamForCompetitionId: Int!
    matchId: Int!
    clubId: Int!
    lastUpdated: Date
    paid: Boolean
    fileId: Int
    htmlFileId: Int
    jsonFileId: Int
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

  input ReportForTeamFilter {
    q: String
    ids: [Int]
    id: Int
    created: DateTime
    created_lte: DateTime
    created_gte: DateTime
    created_lt: DateTime
    created_gt: DateTime
    title: String
    title_in: [String]
    title_not_in: [String]
    teamForCompetitionId: Int
    teamForCompetitionId_in: [Int]
    teamForCompetitionId_not_in: [Int]
    matchId: Int
    matchId_in: [Int]
    matchId_not_in: [Int]
    clubId: Int
    clubId_in: [Int]
    clubId_not_in: [Int]
    lastUpdated: Date
    lastUpdated_lte: Date
    lastUpdated_gte: Date
    lastUpdated_lt: Date
    lastUpdated_gt: Date
    lastUpdated_defined: Boolean
    paid: Boolean
    paid_defined: Boolean
    fileId: Int
    fileId_in: [Int]
    fileId_not_in: [Int]
    fileId_defined: Boolean
    htmlFileId: Int
    htmlFileId_in: [Int]
    htmlFileId_not_in: [Int]
    htmlFileId_defined: Boolean
    jsonFileId: Int
    jsonFileId_in: [Int]
    jsonFileId_not_in: [Int]
    jsonFileId_defined: Boolean
    needRecalculate: Boolean
    needRecalculate_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    ReportForTeam(id: Int!): ReportForTeam
    allReportForTeams(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ReportForTeamFilter): [ReportForTeam]
    _allReportForTeamsMeta(page: Int, perPage: Int, filter: ReportForTeamFilter): ListMetadata
  }

  type Mutation {
    createReportForTeam(created: DateTime!, title: String!, teamForCompetitionId: Int!, matchId: Int!, clubId: Int!, lastUpdated: Date, paid: Boolean, fileId: Int, htmlFileId: Int, jsonFileId: Int, needRecalculate: Boolean): ReportForTeam
    updateReportForTeam(id: Int!, created: DateTime!, title: String!, teamForCompetitionId: Int!, matchId: Int!, clubId: Int!, lastUpdated: Date, paid: Boolean, fileId: Int, htmlFileId: Int, jsonFileId: Int, needRecalculate: Boolean): ReportForTeam
    removeReportForTeam(id: Int!): ReportForTeam
  }
`;
