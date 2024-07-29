/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Player {
    id: Int!
    firstname: String!
    lastname: String!
    patronymic: String
    title: String
    playerName: String
    number: Int!
    dateOfBirth: Date!
    age: Int
    teamId: Int
    createdByManagerId: Int!
    lastChangedByManagerId: Int
    parentId: Int
    linkToProfile: String
    playerRating: Int
    photoId: Int
    playerRatingAverage: Float
    commonPlayerRatingGoalkeeper: Int
    commonPlayerRatingAttack: Int
    commonPlayerRatingMidfielder: Int
    commonPlayerRatingDefender: Int
    playedMatches: Int
    averagePlayerRatingGoalkeeper: Float
    averagePlayerRatingAttack: Float
    averagePlayerRatingMidfielder: Float
    averagePlayerRatingDefender: Float
    playerAggregatedRoleId: String
    playerTag: String
    progressivePassAccuracy: Float
    playerRankId: String
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input PlayerFilter {
    q: String
    ids: [Int]
    id: Int
    firstname: String
    firstname_in: [String]
    firstname_not_in: [String]
    lastname: String
    lastname_in: [String]
    lastname_not_in: [String]
    patronymic: String
    patronymic_in: [String]
    patronymic_not_in: [String]
    patronymic_defined: Boolean
    title: String
    title_in: [String]
    title_not_in: [String]
    playerName: String
    playerName_in: [String]
    playerName_not_in: [String]
    playerName_defined: Boolean
    number: Int
    number_in: [Int]
    number_not_in: [Int]
    number_lte: Int
    number_gte: Int
    number_lt: Int
    number_gt: Int
    dateOfBirth: Date
    dateOfBirth_lte: Date
    dateOfBirth_gte: Date
    dateOfBirth_lt: Date
    dateOfBirth_gt: Date
    age: Int
    age_in: [Int]
    age_not_in: [Int]
    age_lte: Int
    age_gte: Int
    age_lt: Int
    age_gt: Int
    age_defined: Boolean
    teamId: Int
    teamId_in: [Int]
    teamId_not_in: [Int]
    teamId_defined: Boolean
    createdByManagerId: Int
    createdByManagerId_in: [Int]
    createdByManagerId_not_in: [Int]
    lastChangedByManagerId: Int
    lastChangedByManagerId_in: [Int]
    lastChangedByManagerId_not_in: [Int]
    lastChangedByManagerId_defined: Boolean
    parentId: Int
    parentId_in: [Int]
    parentId_not_in: [Int]
    parentId_defined: Boolean
    linkToProfile: String
    linkToProfile_in: [String]
    linkToProfile_not_in: [String]
    linkToProfile_defined: Boolean
    playerRating: Int
    playerRating_in: [Int]
    playerRating_not_in: [Int]
    playerRating_lte: Int
    playerRating_gte: Int
    playerRating_lt: Int
    playerRating_gt: Int
    playerRating_defined: Boolean
    photoId: Int
    photoId_in: [Int]
    photoId_not_in: [Int]
    photoId_defined: Boolean
    playerRatingAverage: Float
    playerRatingAverage_in: [Float]
    playerRatingAverage_not_in: [Float]
    playerRatingAverage_lte: Float
    playerRatingAverage_gte: Float
    playerRatingAverage_lt: Float
    playerRatingAverage_gt: Float
    playerRatingAverage_defined: Boolean
    commonPlayerRatingGoalkeeper: Int
    commonPlayerRatingGoalkeeper_in: [Int]
    commonPlayerRatingGoalkeeper_not_in: [Int]
    commonPlayerRatingGoalkeeper_lte: Int
    commonPlayerRatingGoalkeeper_gte: Int
    commonPlayerRatingGoalkeeper_lt: Int
    commonPlayerRatingGoalkeeper_gt: Int
    commonPlayerRatingGoalkeeper_defined: Boolean
    commonPlayerRatingAttack: Int
    commonPlayerRatingAttack_in: [Int]
    commonPlayerRatingAttack_not_in: [Int]
    commonPlayerRatingAttack_lte: Int
    commonPlayerRatingAttack_gte: Int
    commonPlayerRatingAttack_lt: Int
    commonPlayerRatingAttack_gt: Int
    commonPlayerRatingAttack_defined: Boolean
    commonPlayerRatingMidfielder: Int
    commonPlayerRatingMidfielder_in: [Int]
    commonPlayerRatingMidfielder_not_in: [Int]
    commonPlayerRatingMidfielder_lte: Int
    commonPlayerRatingMidfielder_gte: Int
    commonPlayerRatingMidfielder_lt: Int
    commonPlayerRatingMidfielder_gt: Int
    commonPlayerRatingMidfielder_defined: Boolean
    commonPlayerRatingDefender: Int
    commonPlayerRatingDefender_in: [Int]
    commonPlayerRatingDefender_not_in: [Int]
    commonPlayerRatingDefender_lte: Int
    commonPlayerRatingDefender_gte: Int
    commonPlayerRatingDefender_lt: Int
    commonPlayerRatingDefender_gt: Int
    commonPlayerRatingDefender_defined: Boolean
    playedMatches: Int
    playedMatches_in: [Int]
    playedMatches_not_in: [Int]
    playedMatches_lte: Int
    playedMatches_gte: Int
    playedMatches_lt: Int
    playedMatches_gt: Int
    playedMatches_defined: Boolean
    averagePlayerRatingGoalkeeper: Float
    averagePlayerRatingGoalkeeper_in: [Float]
    averagePlayerRatingGoalkeeper_not_in: [Float]
    averagePlayerRatingGoalkeeper_lte: Float
    averagePlayerRatingGoalkeeper_gte: Float
    averagePlayerRatingGoalkeeper_lt: Float
    averagePlayerRatingGoalkeeper_gt: Float
    averagePlayerRatingGoalkeeper_defined: Boolean
    averagePlayerRatingAttack: Float
    averagePlayerRatingAttack_in: [Float]
    averagePlayerRatingAttack_not_in: [Float]
    averagePlayerRatingAttack_lte: Float
    averagePlayerRatingAttack_gte: Float
    averagePlayerRatingAttack_lt: Float
    averagePlayerRatingAttack_gt: Float
    averagePlayerRatingAttack_defined: Boolean
    averagePlayerRatingMidfielder: Float
    averagePlayerRatingMidfielder_in: [Float]
    averagePlayerRatingMidfielder_not_in: [Float]
    averagePlayerRatingMidfielder_lte: Float
    averagePlayerRatingMidfielder_gte: Float
    averagePlayerRatingMidfielder_lt: Float
    averagePlayerRatingMidfielder_gt: Float
    averagePlayerRatingMidfielder_defined: Boolean
    averagePlayerRatingDefender: Float
    averagePlayerRatingDefender_in: [Float]
    averagePlayerRatingDefender_not_in: [Float]
    averagePlayerRatingDefender_lte: Float
    averagePlayerRatingDefender_gte: Float
    averagePlayerRatingDefender_lt: Float
    averagePlayerRatingDefender_gt: Float
    averagePlayerRatingDefender_defined: Boolean
    playerAggregatedRoleId: String
    playerAggregatedRoleId_in: [String]
    playerAggregatedRoleId_not_in: [String]
    playerAggregatedRoleId_defined: Boolean
    playerTag: String
    playerTag_in: [String]
    playerTag_not_in: [String]
    playerTag_defined: Boolean
    progressivePassAccuracy: Float
    progressivePassAccuracy_in: [Float]
    progressivePassAccuracy_not_in: [Float]
    progressivePassAccuracy_lte: Float
    progressivePassAccuracy_gte: Float
    progressivePassAccuracy_lt: Float
    progressivePassAccuracy_gt: Float
    progressivePassAccuracy_defined: Boolean
    playerRankId: String
    playerRankId_in: [String]
    playerRankId_not_in: [String]
    playerRankId_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Player(id: Int!): Player
    allPlayers(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PlayerFilter): [Player]
    _allPlayersMeta(page: Int, perPage: Int, filter: PlayerFilter): ListMetadata
  }

  type Mutation {
    createPlayer(firstname: String!, lastname: String!, patronymic: String, title: String, playerName: String, number: Int!, dateOfBirth: Date!, age: Int, teamId: Int, createdByManagerId: Int, lastChangedByManagerId: Int, parentId: Int, linkToProfile: String, playerRating: Int, photoId: Int, playerRatingAverage: Float, commonPlayerRatingGoalkeeper: Int, commonPlayerRatingAttack: Int, commonPlayerRatingMidfielder: Int, commonPlayerRatingDefender: Int, playedMatches: Int, averagePlayerRatingGoalkeeper: Float, averagePlayerRatingAttack: Float, averagePlayerRatingMidfielder: Float, averagePlayerRatingDefender: Float, playerAggregatedRoleId: String, playerTag: String, progressivePassAccuracy: Float, playerRankId: String): Player
    updatePlayer(id: Int!, firstname: String!, lastname: String!, patronymic: String, title: String, playerName: String, number: Int!, dateOfBirth: Date!, age: Int, teamId: Int, createdByManagerId: Int, lastChangedByManagerId: Int, parentId: Int, linkToProfile: String, playerRating: Int, photoId: Int, playerRatingAverage: Float, commonPlayerRatingGoalkeeper: Int, commonPlayerRatingAttack: Int, commonPlayerRatingMidfielder: Int, commonPlayerRatingDefender: Int, playedMatches: Int, averagePlayerRatingGoalkeeper: Float, averagePlayerRatingAttack: Float, averagePlayerRatingMidfielder: Float, averagePlayerRatingDefender: Float, playerAggregatedRoleId: String, playerTag: String, progressivePassAccuracy: Float, playerRankId: String): Player
    removePlayer(id: Int!): Player
  }
`;
