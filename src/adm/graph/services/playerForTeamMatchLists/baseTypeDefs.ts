/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type PlayerForTeamMatchList {
    id: Int!
    teamMatchListId: Int!
    playerId: Int!
    startingPosition: Boolean
    onField: Boolean
    playerRoleId: String!
    playerOnMatchNumber: Int
  }

  input PlayerForTeamMatchListFilter {
    q: String
    ids: [Int]
    id: Int
    teamMatchListId: Int
    teamMatchListId_in: [Int]
    teamMatchListId_not_in: [Int]
    playerId: Int
    playerId_in: [Int]
    playerId_not_in: [Int]
    startingPosition: Boolean
    startingPosition_defined: Boolean
    onField: Boolean
    onField_defined: Boolean
    playerRoleId: String
    playerRoleId_in: [String]
    playerRoleId_not_in: [String]
    playerOnMatchNumber: Int
    playerOnMatchNumber_in: [Int]
    playerOnMatchNumber_not_in: [Int]
    playerOnMatchNumber_lte: Int
    playerOnMatchNumber_gte: Int
    playerOnMatchNumber_lt: Int
    playerOnMatchNumber_gt: Int
    playerOnMatchNumber_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    PlayerForTeamMatchList(id: Int!): PlayerForTeamMatchList
    allPlayerForTeamMatchLists(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PlayerForTeamMatchListFilter): [PlayerForTeamMatchList]
    _allPlayerForTeamMatchListsMeta(page: Int, perPage: Int, filter: PlayerForTeamMatchListFilter): ListMetadata
  }

  type Mutation {
    createPlayerForTeamMatchList(teamMatchListId: Int!, playerId: Int!, startingPosition: Boolean, onField: Boolean, playerRoleId: String!, playerOnMatchNumber: Int): PlayerForTeamMatchList
    updatePlayerForTeamMatchList(id: Int!, teamMatchListId: Int!, playerId: Int!, startingPosition: Boolean, onField: Boolean, playerRoleId: String!, playerOnMatchNumber: Int): PlayerForTeamMatchList
    removePlayerForTeamMatchList(id: Int!): PlayerForTeamMatchList
  }
`;
