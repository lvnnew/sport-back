import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type WscContact {
    id: Int!
    name: String!
    phoneNumber: String!
    wscUserId: Int!
  }

  input WscContactFilter {
    q: String
    ids: [Int]
    id: Int
    name: String
    name_in: [String]
    name_not_in: [String]
    phoneNumber: String
    phoneNumber_in: [String]
    phoneNumber_not_in: [String]
    wscUserId: Int
    wscUserId_in: [Int]
    wscUserId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    WscContact(id: Int!): WscContact
    allWscContacts(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: WscContactFilter): [WscContact]
    _allWscContactsMeta(page: Int, perPage: Int, filter: WscContactFilter): ListMetadata
  }

  type Mutation {
    createWscContact(name: String!, phoneNumber: String!, wscUserId: Int!): WscContact
    updateWscContact(id: Int!, name: String!, phoneNumber: String!, wscUserId: Int!): WscContact
    removeWscContact(id: Int!): WscContact
  }
`;
