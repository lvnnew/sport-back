import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Tenant {
    id: Int!
    title: String
    utcOffset: Int!
  }

  input TenantFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    title_defined: Boolean
    utcOffset: Int
    utcOffset_in: [Int]
    utcOffset_not_in: [Int]
    utcOffset_lte: Int
    utcOffset_gte: Int
    utcOffset_lt: Int
    utcOffset_gt: Int
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Tenant(id: Int!): Tenant
    allTenants(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: TenantFilter): [Tenant]
    _allTenantsMeta(page: Int, perPage: Int, filter: TenantFilter): ListMetadata
  }

  type Mutation {
    createTenant(title: String, utcOffset: Int!): Tenant
    updateTenant(id: Int!, title: String, utcOffset: Int!): Tenant
    removeTenant(id: Int!): Tenant
  }
`;
