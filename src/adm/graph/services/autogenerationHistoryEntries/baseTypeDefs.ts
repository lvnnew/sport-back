import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type AutogenerationHistoryEntry {
    id: Int!
    date: Date!
    originalEntityType: String!
    originalEntityId: String!
    autogenerationRuleId: String!
    version: Date!
    errorOccurred: Boolean!
    error: String
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input AutogenerationHistoryEntryFilter {
    q: String
    ids: [Int]
    id: Int
    date: Date
    date_lte: Date
    date_gte: Date
    date_lt: Date
    date_gt: Date
    originalEntityType: String
    originalEntityType_in: [String]
    originalEntityId: String
    originalEntityId_in: [String]
    autogenerationRuleId: String
    autogenerationRuleId_in: [String]
    version: Date
    version_lte: Date
    version_gte: Date
    version_lt: Date
    version_gt: Date
    errorOccurred: Boolean
    error: String
    error_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    AutogenerationHistoryEntry(id: Int!): AutogenerationHistoryEntry
    allAutogenerationHistoryEntries(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AutogenerationHistoryEntryFilter): [AutogenerationHistoryEntry]
    _allAutogenerationHistoryEntriesMeta(page: Int, perPage: Int, filter: AutogenerationHistoryEntryFilter): ListMetadata
  }

  type Mutation {
    createAutogenerationHistoryEntry(date: Date!, originalEntityType: String!, originalEntityId: String!, autogenerationRuleId: String!, version: Date!, errorOccurred: Boolean!, error: String): AutogenerationHistoryEntry
    updateAutogenerationHistoryEntry(id: Int!, date: Date!, originalEntityType: String!, originalEntityId: String!, autogenerationRuleId: String!, version: Date!, errorOccurred: Boolean!, error: String): AutogenerationHistoryEntry
    removeAutogenerationHistoryEntry(id: Int!): AutogenerationHistoryEntry
  }
`;
