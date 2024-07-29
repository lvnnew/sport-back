import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type TeamForPlayer {
    id: Int!
    playerId: Int!
    teamId: Int!
  }

  input TeamForPlayerFilter {
    q: String
    ids: [Int]
    id: Int
    playerId: Int
    playerId_in: [Int]
    playerId_not_in: [Int]
    teamId: Int
    teamId_in: [Int]
    teamId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    TeamForPlayer(id: Int!): TeamForPlayer
    allTeamForPlayers(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: TeamForPlayerFilter): [TeamForPlayer]
    _allTeamForPlayersMeta(page: Int, perPage: Int, filter: TeamForPlayerFilter): ListMetadata
  }

  type Mutation {
    createTeamForPlayer(playerId: Int!, teamId: Int!): TeamForPlayer
    updateTeamForPlayer(id: Int!, playerId: Int!, teamId: Int!): TeamForPlayer
    removeTeamForPlayer(id: Int!): TeamForPlayer
  }
`;
