import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MatchRequest {
    id: Int!
    matchId: Int!
    teamForCompetitionId: Int!
  }

  input MatchRequestFilter {
    q: String
    ids: [Int]
    id: Int
    matchId: Int
    matchId_in: [Int]
    matchId_not_in: [Int]
    teamForCompetitionId: Int
    teamForCompetitionId_in: [Int]
    teamForCompetitionId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MatchRequest(id: Int!): MatchRequest
    allMatchRequests(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MatchRequestFilter): [MatchRequest]
    _allMatchRequestsMeta(page: Int, perPage: Int, filter: MatchRequestFilter): ListMetadata
  }

  type Mutation {
    createMatchRequest(matchId: Int!, teamForCompetitionId: Int!): MatchRequest
    updateMatchRequest(id: Int!, matchId: Int!, teamForCompetitionId: Int!): MatchRequest
    removeMatchRequest(id: Int!): MatchRequest
  }
`;
