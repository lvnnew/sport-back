/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type EntitiesTracking {
    id: Int!
    entityTypeId: String!
    entityId: String!
    lastEntityComputed: DateTime!
    lastEntityScheduled: DateTime
    lastEntityUpdate: DateTime!
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  input EntitiesTrackingFilter {
    q: String
    ids: [Int]
    id: Int
    entityTypeId: String
    entityTypeId_in: [String]
    entityTypeId_not_in: [String]
    entityId: String
    entityId_in: [String]
    entityId_not_in: [String]
    lastEntityComputed: DateTime
    lastEntityComputed_lte: DateTime
    lastEntityComputed_gte: DateTime
    lastEntityComputed_lt: DateTime
    lastEntityComputed_gt: DateTime
    lastEntityScheduled: DateTime
    lastEntityScheduled_lte: DateTime
    lastEntityScheduled_gte: DateTime
    lastEntityScheduled_lt: DateTime
    lastEntityScheduled_gt: DateTime
    lastEntityScheduled_defined: Boolean
    lastEntityUpdate: DateTime
    lastEntityUpdate_lte: DateTime
    lastEntityUpdate_gte: DateTime
    lastEntityUpdate_lt: DateTime
    lastEntityUpdate_gt: DateTime
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    EntitiesTracking(id: Int!): EntitiesTracking
    allEntitiesTrackings(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: EntitiesTrackingFilter): [EntitiesTracking]
    _allEntitiesTrackingsMeta(page: Int, perPage: Int, filter: EntitiesTrackingFilter): ListMetadata
  }

  type Mutation {
    createEntitiesTracking(entityTypeId: String!, entityId: String!, lastEntityComputed: DateTime!, lastEntityScheduled: DateTime, lastEntityUpdate: DateTime!): EntitiesTracking
    updateEntitiesTracking(id: Int!, entityTypeId: String!, entityId: String!, lastEntityComputed: DateTime!, lastEntityScheduled: DateTime, lastEntityUpdate: DateTime!): EntitiesTracking
    removeEntitiesTracking(id: Int!): EntitiesTracking
  }
`;
