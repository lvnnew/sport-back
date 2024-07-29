import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Organizator {
    id: Int!
    title: String!
    createdByManagerId: Int!
    lastChangedByManagerId: Int
  }

  input OrganizatorFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    createdByManagerId: Int
    createdByManagerId_in: [Int]
    createdByManagerId_not_in: [Int]
    lastChangedByManagerId: Int
    lastChangedByManagerId_in: [Int]
    lastChangedByManagerId_not_in: [Int]
    lastChangedByManagerId_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Organizator(id: Int!): Organizator
    allOrganizators(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: OrganizatorFilter): [Organizator]
    _allOrganizatorsMeta(page: Int, perPage: Int, filter: OrganizatorFilter): ListMetadata
  }

  type Mutation {
    createOrganizator(title: String!, createdByManagerId: Int, lastChangedByManagerId: Int): Organizator
    updateOrganizator(id: Int!, title: String!, createdByManagerId: Int, lastChangedByManagerId: Int): Organizator
    removeOrganizator(id: Int!): Organizator
  }
`;
