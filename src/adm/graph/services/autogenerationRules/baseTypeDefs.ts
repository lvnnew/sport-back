/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type AutogenerationRule {
    id: ID!
    title: String!
    version: Date
    originalEntityType: String!
    generatingEntityType: String!
    originalEntityFilter: String!
    generatingEntityConstructionRules: String!
    ignoreVersionOnHistory: Boolean!
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input AutogenerationRuleFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    version: Date
    version_lte: Date
    version_gte: Date
    version_lt: Date
    version_gt: Date
    version_defined: Boolean
    originalEntityType: String
    originalEntityType_in: [String]
    generatingEntityType: String
    generatingEntityType_in: [String]
    originalEntityFilter: String
    originalEntityFilter_in: [String]
    generatingEntityConstructionRules: String
    generatingEntityConstructionRules_in: [String]
    ignoreVersionOnHistory: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    AutogenerationRule(id: ID!): AutogenerationRule
    allAutogenerationRules(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AutogenerationRuleFilter): [AutogenerationRule]
    _allAutogenerationRulesMeta(page: Int, perPage: Int, filter: AutogenerationRuleFilter): ListMetadata
  }

  type Mutation {
    createAutogenerationRule(id: ID!, title: String!, version: Date, originalEntityType: String!, generatingEntityType: String!, originalEntityFilter: String!, generatingEntityConstructionRules: String!, ignoreVersionOnHistory: Boolean!): AutogenerationRule
    updateAutogenerationRule(id: ID!, title: String!, version: Date, originalEntityType: String!, generatingEntityType: String!, originalEntityFilter: String!, generatingEntityConstructionRules: String!, ignoreVersionOnHistory: Boolean!): AutogenerationRule
    removeAutogenerationRule(id: ID!): AutogenerationRule
  }
`;
