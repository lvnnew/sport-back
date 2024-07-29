import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MatchStatus {
    id: ID!
    title: String!
  }

  input MatchStatusFilter {
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
    MatchStatus(id: ID!): MatchStatus
    allMatchStatuses(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MatchStatusFilter): [MatchStatus]
    _allMatchStatusesMeta(page: Int, perPage: Int, filter: MatchStatusFilter): ListMetadata
  }

  type Mutation {
    createMatchStatus(id: ID!, title: String!): MatchStatus
    updateMatchStatus(id: ID!, title: String!): MatchStatus
    removeMatchStatus(id: ID!): MatchStatus
  }
`;
