/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type EventTypeCategory {
    id: ID!
    title: String!
  }

  input EventTypeCategoryFilter {
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
    EventTypeCategory(id: ID!): EventTypeCategory
    allEventTypeCategories(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: EventTypeCategoryFilter): [EventTypeCategory]
    _allEventTypeCategoriesMeta(page: Int, perPage: Int, filter: EventTypeCategoryFilter): ListMetadata
  }

  type Mutation {
    createEventTypeCategory(id: ID!, title: String!): EventTypeCategory
    updateEventTypeCategory(id: ID!, title: String!): EventTypeCategory
    removeEventTypeCategory(id: ID!): EventTypeCategory
  }
`;
