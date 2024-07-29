/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type PlayerForMatchRequest {
    id: Int!
    matchRequestId: Int!
    playerId: Int!
  }

  input PlayerForMatchRequestFilter {
    q: String
    ids: [Int]
    id: Int
    matchRequestId: Int
    matchRequestId_in: [Int]
    matchRequestId_not_in: [Int]
    playerId: Int
    playerId_in: [Int]
    playerId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    PlayerForMatchRequest(id: Int!): PlayerForMatchRequest
    allPlayerForMatchRequests(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PlayerForMatchRequestFilter): [PlayerForMatchRequest]
    _allPlayerForMatchRequestsMeta(page: Int, perPage: Int, filter: PlayerForMatchRequestFilter): ListMetadata
  }

  type Mutation {
    createPlayerForMatchRequest(matchRequestId: Int!, playerId: Int!): PlayerForMatchRequest
    updatePlayerForMatchRequest(id: Int!, matchRequestId: Int!, playerId: Int!): PlayerForMatchRequest
    removePlayerForMatchRequest(id: Int!): PlayerForMatchRequest
  }
`;
