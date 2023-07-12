/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type AdmRefreshToken {
    id: Int!
    create: DateTime!
    managerId: Int!
    token: String!
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  input AdmRefreshTokenFilter {
    q: String
    ids: [Int]
    id: Int
    create: DateTime
    create_lte: DateTime
    create_gte: DateTime
    create_lt: DateTime
    create_gt: DateTime
    managerId: Int
    managerId_in: [Int]
    token: String
    token_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    AdmRefreshToken(id: Int!): AdmRefreshToken
    allAdmRefreshTokens(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AdmRefreshTokenFilter): [AdmRefreshToken]
    _allAdmRefreshTokensMeta(page: Int, perPage: Int, filter: AdmRefreshTokenFilter): ListMetadata
  }

  type Mutation {
    createAdmRefreshToken(create: DateTime!, managerId: Int!, token: String!): AdmRefreshToken
    updateAdmRefreshToken(id: Int!, create: DateTime!, managerId: Int!, token: String!): AdmRefreshToken
    removeAdmRefreshToken(id: Int!): AdmRefreshToken
  }
`;
