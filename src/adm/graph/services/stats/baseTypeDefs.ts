import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Stat {
    id: ID!
    updated: DateTime
    helloCount: Int
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  input StatFilter {
    q: String
    ids: [ID]
    id: ID
    updated: DateTime
    updated_lte: DateTime
    updated_gte: DateTime
    updated_lt: DateTime
    updated_gt: DateTime
    helloCount: Int
    helloCount_in: [Int]
    helloCount_lte: Int
    helloCount_gte: Int
    helloCount_lt: Int
    helloCount_gt: Int
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Stat(id: ID!): Stat
    allStats(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: StatFilter): [Stat]
    _allStatsMeta(page: Int, perPage: Int, filter: StatFilter): ListMetadata
  }

  type Mutation {
    createStat(id: ID!, updated: DateTime, helloCount: Int): Stat
    updateStat(id: ID!, updated: DateTime, helloCount: Int): Stat
    removeStat(id: ID!): Stat
  }
`;
