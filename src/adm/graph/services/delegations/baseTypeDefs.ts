import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type Delegation {
  id: Int!
  fromId: Int!
  toId: Int!
  expiresAt: Date
  active: Boolean!
}

"""
A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar Date

input DelegationFilter {
  q: String
  ids: [Int]
  id: Int
  fromId: Int
  fromId_in: [Int]
  toId: Int
  toId_in: [Int]
  expiresAt: Date
  expiresAt_lte: Date
  expiresAt_gte: Date
  expiresAt_lt: Date
  expiresAt_gt: Date
  active: Boolean
}

type ListMetadata {
  count: Int
}

type Query {
  Delegation(id: Int!): Delegation
  allDelegations(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: DelegationFilter): [Delegation]
  _allDelegationsMeta(page: Int, perPage: Int, filter: DelegationFilter): ListMetadata
}

type Mutation {
  createDelegation(fromId: Int!, toId: Int!, expiresAt: Date, active: Boolean!): Delegation
  updateDelegation(id: Int!, fromId: Int!, toId: Int!, expiresAt: Date, active: Boolean!): Delegation
  removeDelegation(id: Int!): Boolean
}

`;
