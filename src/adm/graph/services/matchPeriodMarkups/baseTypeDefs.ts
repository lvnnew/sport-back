/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MatchPeriodMarkup {
    id: Int!
    timestamp: Int
    periodTypeId: String!
    matchVideoId: Int
  }

  input MatchPeriodMarkupFilter {
    q: String
    ids: [Int]
    id: Int
    timestamp: Int
    timestamp_in: [Int]
    timestamp_not_in: [Int]
    timestamp_lte: Int
    timestamp_gte: Int
    timestamp_lt: Int
    timestamp_gt: Int
    timestamp_defined: Boolean
    periodTypeId: String
    periodTypeId_in: [String]
    periodTypeId_not_in: [String]
    matchVideoId: Int
    matchVideoId_in: [Int]
    matchVideoId_not_in: [Int]
    matchVideoId_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MatchPeriodMarkup(id: Int!): MatchPeriodMarkup
    allMatchPeriodMarkups(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MatchPeriodMarkupFilter): [MatchPeriodMarkup]
    _allMatchPeriodMarkupsMeta(page: Int, perPage: Int, filter: MatchPeriodMarkupFilter): ListMetadata
  }

  type Mutation {
    createMatchPeriodMarkup(timestamp: Int, periodTypeId: String!, matchVideoId: Int): MatchPeriodMarkup
    updateMatchPeriodMarkup(id: Int!, timestamp: Int, periodTypeId: String!, matchVideoId: Int): MatchPeriodMarkup
    removeMatchPeriodMarkup(id: Int!): MatchPeriodMarkup
  }
`;
