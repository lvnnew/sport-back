/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MailingMessageStatus {
    id: ID!
    title: String
    final: Boolean!
  }

  input MailingMessageStatusFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_defined: Boolean
    final: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MailingMessageStatus(id: ID!): MailingMessageStatus
    allMailingMessageStatuses(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MailingMessageStatusFilter): [MailingMessageStatus]
    _allMailingMessageStatusesMeta(page: Int, perPage: Int, filter: MailingMessageStatusFilter): ListMetadata
  }

  type Mutation {
    createMailingMessageStatus(id: ID!, title: String, final: Boolean!): MailingMessageStatus
    updateMailingMessageStatus(id: ID!, title: String, final: Boolean!): MailingMessageStatus
    removeMailingMessageStatus(id: ID!): MailingMessageStatus
  }
`;
