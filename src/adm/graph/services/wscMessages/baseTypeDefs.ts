/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type WscMessage {
    id: Int!
    externalId: String!
    dateTimeRaw: String!
    sender: String!
    content: String!
    wscUserId: Int!
    wscContactId: Int!
  }

  input WscMessageFilter {
    q: String
    ids: [Int]
    id: Int
    externalId: String
    externalId_in: [String]
    externalId_not_in: [String]
    dateTimeRaw: String
    dateTimeRaw_in: [String]
    dateTimeRaw_not_in: [String]
    sender: String
    sender_in: [String]
    sender_not_in: [String]
    content: String
    content_in: [String]
    content_not_in: [String]
    wscUserId: Int
    wscUserId_in: [Int]
    wscUserId_not_in: [Int]
    wscContactId: Int
    wscContactId_in: [Int]
    wscContactId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    WscMessage(id: Int!): WscMessage
    allWscMessages(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: WscMessageFilter): [WscMessage]
    _allWscMessagesMeta(page: Int, perPage: Int, filter: WscMessageFilter): ListMetadata
  }

  type Mutation {
    createWscMessage(externalId: String!, dateTimeRaw: String!, sender: String!, content: String!, wscUserId: Int!, wscContactId: Int!): WscMessage
    updateWscMessage(id: Int!, externalId: String!, dateTimeRaw: String!, sender: String!, content: String!, wscUserId: Int!, wscContactId: Int!): WscMessage
    removeWscMessage(id: Int!): WscMessage
  }
`;
