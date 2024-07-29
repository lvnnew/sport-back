/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type PlayerMatchRating {
    id: Int!
    matchId: Int!
    playerId: Int!
    rating: Int!
    progressivePassAccuracy: Float
    playerRatingAverage: Float
  }

  input PlayerMatchRatingFilter {
    q: String
    ids: [Int]
    id: Int
    matchId: Int
    matchId_in: [Int]
    matchId_not_in: [Int]
    playerId: Int
    playerId_in: [Int]
    playerId_not_in: [Int]
    rating: Int
    rating_in: [Int]
    rating_not_in: [Int]
    rating_lte: Int
    rating_gte: Int
    rating_lt: Int
    rating_gt: Int
    progressivePassAccuracy: Float
    progressivePassAccuracy_in: [Float]
    progressivePassAccuracy_not_in: [Float]
    progressivePassAccuracy_lte: Float
    progressivePassAccuracy_gte: Float
    progressivePassAccuracy_lt: Float
    progressivePassAccuracy_gt: Float
    progressivePassAccuracy_defined: Boolean
    playerRatingAverage: Float
    playerRatingAverage_in: [Float]
    playerRatingAverage_not_in: [Float]
    playerRatingAverage_lte: Float
    playerRatingAverage_gte: Float
    playerRatingAverage_lt: Float
    playerRatingAverage_gt: Float
    playerRatingAverage_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    PlayerMatchRating(id: Int!): PlayerMatchRating
    allPlayerMatchRatings(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PlayerMatchRatingFilter): [PlayerMatchRating]
    _allPlayerMatchRatingsMeta(page: Int, perPage: Int, filter: PlayerMatchRatingFilter): ListMetadata
  }

  type Mutation {
    createPlayerMatchRating(matchId: Int!, playerId: Int!, rating: Int!, progressivePassAccuracy: Float, playerRatingAverage: Float): PlayerMatchRating
    updatePlayerMatchRating(id: Int!, matchId: Int!, playerId: Int!, rating: Int!, progressivePassAccuracy: Float, playerRatingAverage: Float): PlayerMatchRating
    removePlayerMatchRating(id: Int!): PlayerMatchRating
  }
`;
