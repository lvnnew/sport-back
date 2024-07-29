/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type PlayerForCompetitionTeam {
    id: Int!
    teamForCompetitionId: Int!
    playerId: Int!
  }

  input PlayerForCompetitionTeamFilter {
    q: String
    ids: [Int]
    id: Int
    teamForCompetitionId: Int
    teamForCompetitionId_in: [Int]
    teamForCompetitionId_not_in: [Int]
    playerId: Int
    playerId_in: [Int]
    playerId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    PlayerForCompetitionTeam(id: Int!): PlayerForCompetitionTeam
    allPlayerForCompetitionTeams(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PlayerForCompetitionTeamFilter): [PlayerForCompetitionTeam]
    _allPlayerForCompetitionTeamsMeta(page: Int, perPage: Int, filter: PlayerForCompetitionTeamFilter): ListMetadata
  }

  type Mutation {
    createPlayerForCompetitionTeam(teamForCompetitionId: Int!, playerId: Int!): PlayerForCompetitionTeam
    updatePlayerForCompetitionTeam(id: Int!, teamForCompetitionId: Int!, playerId: Int!): PlayerForCompetitionTeam
    removePlayerForCompetitionTeam(id: Int!): PlayerForCompetitionTeam
  }
`;
