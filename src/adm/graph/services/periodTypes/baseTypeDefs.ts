import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type PeriodType {
    id: ID!
    title: String!
    order: Int!
  }

  input PeriodTypeFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_not_in: [String]
    order: Int
    order_in: [Int]
    order_not_in: [Int]
    order_lte: Int
    order_gte: Int
    order_lt: Int
    order_gt: Int
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    PeriodType(id: ID!): PeriodType
    allPeriodTypes(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PeriodTypeFilter): [PeriodType]
    _allPeriodTypesMeta(page: Int, perPage: Int, filter: PeriodTypeFilter): ListMetadata
  }

  type Mutation {
    createPeriodType(id: ID!, title: String!, order: Int!): PeriodType
    updatePeriodType(id: ID!, title: String!, order: Int!): PeriodType
    removePeriodType(id: ID!): PeriodType
  }
`;
