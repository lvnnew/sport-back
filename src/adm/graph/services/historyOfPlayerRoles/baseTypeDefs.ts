/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type HistoryOfPlayerRole {
    id: Int!
    matchId: Int!
    playerId: Int!
    playerRoleId: String!
    status: Boolean
    order: Int!
  }

  input HistoryOfPlayerRoleFilter {
    q: String
    ids: [Int]
    id: Int
    matchId: Int
    matchId_in: [Int]
    matchId_not_in: [Int]
    playerId: Int
    playerId_in: [Int]
    playerId_not_in: [Int]
    playerRoleId: String
    playerRoleId_in: [String]
    playerRoleId_not_in: [String]
    status: Boolean
    status_defined: Boolean
    order: Int
    order_in: [Int]
    order_not_in: [Int]
    order_lte: Int
    order_gte: Int
    order_lt: Int
    order_gt: Int
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    HistoryOfPlayerRole(id: Int!): HistoryOfPlayerRole
    allHistoryOfPlayerRoles(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: HistoryOfPlayerRoleFilter): [HistoryOfPlayerRole]
    _allHistoryOfPlayerRolesMeta(page: Int, perPage: Int, filter: HistoryOfPlayerRoleFilter): ListMetadata
  }

  type Mutation {
    createHistoryOfPlayerRole(matchId: Int!, playerId: Int!, playerRoleId: String!, status: Boolean, order: Int!): HistoryOfPlayerRole
    updateHistoryOfPlayerRole(id: Int!, matchId: Int!, playerId: Int!, playerRoleId: String!, status: Boolean, order: Int!): HistoryOfPlayerRole
    removeHistoryOfPlayerRole(id: Int!): HistoryOfPlayerRole
  }
`;
