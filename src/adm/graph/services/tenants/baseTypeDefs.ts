import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Tenant {
    id: Int!
    title: String
  }

  input TenantFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
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
    createTenant(title: String): Tenant
    updateTenant(id: Int!, title: String): Tenant
    removeTenant(id: Int!): Tenant
  }
`;
