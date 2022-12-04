import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type AggregateTracking {
    id: Int!
    entityTypeId: String!
    entityId: String!
    lastAggregatesComputed: DateTime!
    lastAggregatesScheduled: DateTime
    lastEntityUpdate: DateTime!
    aggregateVersion: Int!
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  input AggregateTrackingFilter {
    q: String
    ids: [Int]
    id: Int
    entityTypeId: String
    entityTypeId_in: [String]
    entityId: String
    entityId_in: [String]
    lastAggregatesComputed: DateTime
    lastAggregatesComputed_lte: DateTime
    lastAggregatesComputed_gte: DateTime
    lastAggregatesComputed_lt: DateTime
    lastAggregatesComputed_gt: DateTime
    lastAggregatesScheduled: DateTime
    lastAggregatesScheduled_lte: DateTime
    lastAggregatesScheduled_gte: DateTime
    lastAggregatesScheduled_lt: DateTime
    lastAggregatesScheduled_gt: DateTime
    lastEntityUpdate: DateTime
    lastEntityUpdate_lte: DateTime
    lastEntityUpdate_gte: DateTime
    lastEntityUpdate_lt: DateTime
    lastEntityUpdate_gt: DateTime
    aggregateVersion: Int
    aggregateVersion_in: [Int]
    aggregateVersion_lte: Int
    aggregateVersion_gte: Int
    aggregateVersion_lt: Int
    aggregateVersion_gt: Int
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    AggregateTracking(id: Int!): AggregateTracking
    allAggregateTrackings(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AggregateTrackingFilter): [AggregateTracking]
    _allAggregateTrackingsMeta(page: Int, perPage: Int, filter: AggregateTrackingFilter): ListMetadata
  }

  type Mutation {
    createAggregateTracking(entityTypeId: String!, entityId: String!, lastAggregatesComputed: DateTime!, lastAggregatesScheduled: DateTime, lastEntityUpdate: DateTime!, aggregateVersion: Int!): AggregateTracking
    updateAggregateTracking(id: Int!, entityTypeId: String!, entityId: String!, lastAggregatesComputed: DateTime!, lastAggregatesScheduled: DateTime, lastEntityUpdate: DateTime!, aggregateVersion: Int!): AggregateTracking
    removeAggregateTracking(id: Int!): AggregateTracking
  }
`;
