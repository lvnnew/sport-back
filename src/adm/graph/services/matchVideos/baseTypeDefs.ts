import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MatchVideo {
    id: Int!
    videoTitle: String!
    videoLink: String!
    matchId: Int
    order: Int
  }

  input MatchVideoFilter {
    q: String
    ids: [Int]
    id: Int
    videoTitle: String
    videoTitle_in: [String]
    videoTitle_not_in: [String]
    videoLink: String
    videoLink_in: [String]
    videoLink_not_in: [String]
    matchId: Int
    matchId_in: [Int]
    matchId_not_in: [Int]
    matchId_defined: Boolean
    order: Int
    order_in: [Int]
    order_not_in: [Int]
    order_lte: Int
    order_gte: Int
    order_lt: Int
    order_gt: Int
    order_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MatchVideo(id: Int!): MatchVideo
    allMatchVideos(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MatchVideoFilter): [MatchVideo]
    _allMatchVideosMeta(page: Int, perPage: Int, filter: MatchVideoFilter): ListMetadata
  }

  type Mutation {
    createMatchVideo(videoTitle: String!, videoLink: String!, matchId: Int, order: Int): MatchVideo
    updateMatchVideo(id: Int!, videoTitle: String!, videoLink: String!, matchId: Int, order: Int): MatchVideo
    removeMatchVideo(id: Int!): MatchVideo
  }
`;
