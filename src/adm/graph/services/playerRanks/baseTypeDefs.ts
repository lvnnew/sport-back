import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type PlayerRank {
    id: ID!
    title: String!
    rating: Int!
    fileId: Int
  }

  input PlayerRankFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_not_in: [String]
    rating: Int
    rating_in: [Int]
    rating_not_in: [Int]
    rating_lte: Int
    rating_gte: Int
    rating_lt: Int
    rating_gt: Int
    fileId: Int
    fileId_in: [Int]
    fileId_not_in: [Int]
    fileId_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    PlayerRank(id: ID!): PlayerRank
    allPlayerRanks(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PlayerRankFilter): [PlayerRank]
    _allPlayerRanksMeta(page: Int, perPage: Int, filter: PlayerRankFilter): ListMetadata
  }

  type Mutation {
    createPlayerRank(id: ID!, title: String!, rating: Int!, fileId: Int): PlayerRank
    updatePlayerRank(id: ID!, title: String!, rating: Int!, fileId: Int): PlayerRank
    removePlayerRank(id: ID!): PlayerRank
  }
`;
