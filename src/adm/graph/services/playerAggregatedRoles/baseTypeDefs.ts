/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type PlayerAggregatedRole {
    id: ID!
    title: String!
  }

  input PlayerAggregatedRoleFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_not_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    PlayerAggregatedRole(id: ID!): PlayerAggregatedRole
    allPlayerAggregatedRoles(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PlayerAggregatedRoleFilter): [PlayerAggregatedRole]
    _allPlayerAggregatedRolesMeta(page: Int, perPage: Int, filter: PlayerAggregatedRoleFilter): ListMetadata
  }

  type Mutation {
    createPlayerAggregatedRole(id: ID!, title: String!): PlayerAggregatedRole
    updatePlayerAggregatedRole(id: ID!, title: String!): PlayerAggregatedRole
    removePlayerAggregatedRole(id: ID!): PlayerAggregatedRole
  }
`;
