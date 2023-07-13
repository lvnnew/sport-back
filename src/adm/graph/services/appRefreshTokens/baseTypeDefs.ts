/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type AppRefreshToken {
    id: Int!
    create: DateTime!
    userId: Int!
    token: String!
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  input AppRefreshTokenFilter {
    q: String
    ids: [Int]
    id: Int
    create: DateTime
    create_lte: DateTime
    create_gte: DateTime
    create_lt: DateTime
    create_gt: DateTime
    userId: Int
    userId_in: [Int]
    token: String
    token_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    AppRefreshToken(id: Int!): AppRefreshToken
    allAppRefreshTokens(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AppRefreshTokenFilter): [AppRefreshToken]
    _allAppRefreshTokensMeta(page: Int, perPage: Int, filter: AppRefreshTokenFilter): ListMetadata
  }

  type Mutation {
    createAppRefreshToken(create: DateTime!, userId: Int!, token: String!): AppRefreshToken
    updateAppRefreshToken(id: Int!, create: DateTime!, userId: Int!, token: String!): AppRefreshToken
    removeAppRefreshToken(id: Int!): AppRefreshToken
  }
`;
