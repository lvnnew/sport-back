/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MailingMessage {
    id: Int!
    mailingCampaignId: Int!
    templateId: String!
    languageId: String!
    to: String!
    locals: String!
    localsHash: String!
    priority: Int!
    dateCreated: DateTime!
    dateSent: DateTime
    error: String
    html: String
    text: String
    uniqueKey: String
    subject: String
    mailingMessageStatusId: String!
    messageTemplateLangVariantId: Int!
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  input MailingMessageFilter {
    q: String
    ids: [Int]
    id: Int
    mailingCampaignId: Int
    mailingCampaignId_in: [Int]
    mailingCampaignId_not_in: [Int]
    templateId: String
    templateId_in: [String]
    templateId_not_in: [String]
    languageId: String
    languageId_in: [String]
    languageId_not_in: [String]
    to: String
    to_in: [String]
    to_not_in: [String]
    locals: String
    locals_in: [String]
    locals_not_in: [String]
    localsHash: String
    localsHash_in: [String]
    localsHash_not_in: [String]
    priority: Int
    priority_in: [Int]
    priority_not_in: [Int]
    priority_lte: Int
    priority_gte: Int
    priority_lt: Int
    priority_gt: Int
    dateCreated: DateTime
    dateCreated_lte: DateTime
    dateCreated_gte: DateTime
    dateCreated_lt: DateTime
    dateCreated_gt: DateTime
    dateSent: DateTime
    dateSent_lte: DateTime
    dateSent_gte: DateTime
    dateSent_lt: DateTime
    dateSent_gt: DateTime
    dateSent_defined: Boolean
    error: String
    error_in: [String]
    error_not_in: [String]
    error_defined: Boolean
    html: String
    html_in: [String]
    html_not_in: [String]
    html_defined: Boolean
    text: String
    text_in: [String]
    text_not_in: [String]
    text_defined: Boolean
    uniqueKey: String
    uniqueKey_in: [String]
    uniqueKey_not_in: [String]
    uniqueKey_defined: Boolean
    subject: String
    subject_in: [String]
    subject_not_in: [String]
    subject_defined: Boolean
    mailingMessageStatusId: String
    mailingMessageStatusId_in: [String]
    mailingMessageStatusId_not_in: [String]
    messageTemplateLangVariantId: Int
    messageTemplateLangVariantId_in: [Int]
    messageTemplateLangVariantId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MailingMessage(id: Int!): MailingMessage
    allMailingMessages(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MailingMessageFilter): [MailingMessage]
    _allMailingMessagesMeta(page: Int, perPage: Int, filter: MailingMessageFilter): ListMetadata
  }

  type Mutation {
    createMailingMessage(mailingCampaignId: Int!, templateId: String!, languageId: String!, to: String!, locals: String!, localsHash: String!, priority: Int!, dateCreated: DateTime!, dateSent: DateTime, error: String, html: String, text: String, uniqueKey: String, subject: String, mailingMessageStatusId: String!, messageTemplateLangVariantId: Int!): MailingMessage
    updateMailingMessage(id: Int!, mailingCampaignId: Int!, templateId: String!, languageId: String!, to: String!, locals: String!, localsHash: String!, priority: Int!, dateCreated: DateTime!, dateSent: DateTime, error: String, html: String, text: String, uniqueKey: String, subject: String, mailingMessageStatusId: String!, messageTemplateLangVariantId: Int!): MailingMessage
    removeMailingMessage(id: Int!): MailingMessage
  }
`;
