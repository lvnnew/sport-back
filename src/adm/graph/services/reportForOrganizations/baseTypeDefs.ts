/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ReportForOrganization {
    id: Int!
    title: String!
    competitionId: Int!
    organizatorId: Int!
    lastUpdated: Date
    paid: Boolean
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input ReportForOrganizationFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    competitionId: Int
    competitionId_in: [Int]
    competitionId_not_in: [Int]
    organizatorId: Int
    organizatorId_in: [Int]
    organizatorId_not_in: [Int]
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
    ReportForOrganization(id: Int!): ReportForOrganization
    allReportForOrganizations(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ReportForOrganizationFilter): [ReportForOrganization]
    _allReportForOrganizationsMeta(page: Int, perPage: Int, filter: ReportForOrganizationFilter): ListMetadata
  }

  type Mutation {
    createReportForOrganization(title: String!, competitionId: Int!, organizatorId: Int!, lastUpdated: Date, paid: Boolean): ReportForOrganization
    updateReportForOrganization(id: Int!, title: String!, competitionId: Int!, organizatorId: Int!, lastUpdated: Date, paid: Boolean): ReportForOrganization
    removeReportForOrganization(id: Int!): ReportForOrganization
  }
`;
