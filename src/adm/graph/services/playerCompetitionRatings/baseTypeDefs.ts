/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type PlayerCompetitionRating {
    id: Int!
    competitionId: Int!
    playerId: Int!
    rating: Int!
  }

  input PlayerCompetitionRatingFilter {
    q: String
    ids: [Int]
    id: Int
    competitionId: Int
    competitionId_in: [Int]
    competitionId_not_in: [Int]
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
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    PlayerCompetitionRating(id: Int!): PlayerCompetitionRating
    allPlayerCompetitionRatings(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PlayerCompetitionRatingFilter): [PlayerCompetitionRating]
    _allPlayerCompetitionRatingsMeta(page: Int, perPage: Int, filter: PlayerCompetitionRatingFilter): ListMetadata
  }

  type Mutation {
    createPlayerCompetitionRating(competitionId: Int!, playerId: Int!, rating: Int!): PlayerCompetitionRating
    updatePlayerCompetitionRating(id: Int!, competitionId: Int!, playerId: Int!, rating: Int!): PlayerCompetitionRating
    removePlayerCompetitionRating(id: Int!): PlayerCompetitionRating
  }
`;
