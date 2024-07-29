import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type PlayerRole {
    id: ID!
    title: String!
    shortTitle: String!
    playerAggregatedRoleId: String!
  }

  input PlayerRoleFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_not_in: [String]
    shortTitle: String
    shortTitle_in: [String]
    shortTitle_not_in: [String]
    playerAggregatedRoleId: String
    playerAggregatedRoleId_in: [String]
    playerAggregatedRoleId_not_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    PlayerRole(id: ID!): PlayerRole
    allPlayerRoles(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PlayerRoleFilter): [PlayerRole]
    _allPlayerRolesMeta(page: Int, perPage: Int, filter: PlayerRoleFilter): ListMetadata
  }

  type Mutation {
    createPlayerRole(id: ID!, title: String!, shortTitle: String!, playerAggregatedRoleId: String!): PlayerRole
    updatePlayerRole(id: ID!, title: String!, shortTitle: String!, playerAggregatedRoleId: String!): PlayerRole
    removePlayerRole(id: ID!): PlayerRole
  }
`;
