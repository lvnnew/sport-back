/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ReportForClub {
    id: Int!
    title: String!
    teamId: Int!
    competitionId: Int!
    clubId: Int!
    lastUpdated: Date
    paid: Boolean
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input ReportForClubFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    teamId: Int
    teamId_in: [Int]
    teamId_not_in: [Int]
    competitionId: Int
    competitionId_in: [Int]
    competitionId_not_in: [Int]
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
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    ReportForClub(id: Int!): ReportForClub
    allReportForClubs(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ReportForClubFilter): [ReportForClub]
    _allReportForClubsMeta(page: Int, perPage: Int, filter: ReportForClubFilter): ListMetadata
  }

  type Mutation {
    createReportForClub(title: String!, teamId: Int!, competitionId: Int!, clubId: Int!, lastUpdated: Date, paid: Boolean): ReportForClub
    updateReportForClub(id: Int!, title: String!, teamId: Int!, competitionId: Int!, clubId: Int!, lastUpdated: Date, paid: Boolean): ReportForClub
    removeReportForClub(id: Int!): ReportForClub
  }
`;
