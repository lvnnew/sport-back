import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MailingMessage {
    id: Int!
    mailingCampaignId: Int!
    templateId: Int!
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
    templateId: Int
    templateId_in: [Int]
    languageId: String
    languageId_in: [String]
    to: String
    to_in: [String]
    locals: String
    locals_in: [String]
    localsHash: String
    localsHash_in: [String]
    priority: Int
    priority_in: [Int]
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
    error: String
    error_in: [String]
    html: String
    html_in: [String]
    text: String
    text_in: [String]
    uniqueKey: String
    uniqueKey_in: [String]
    subject: String
    subject_in: [String]
    mailingMessageStatusId: String
    mailingMessageStatusId_in: [String]
    messageTemplateLangVariantId: Int
    messageTemplateLangVariantId_in: [Int]
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
    createMailingMessage(mailingCampaignId: Int!, templateId: Int!, languageId: String!, to: String!, locals: String!, localsHash: String!, priority: Int!, dateCreated: DateTime!, dateSent: DateTime, error: String, html: String, text: String, uniqueKey: String, subject: String, mailingMessageStatusId: String!, messageTemplateLangVariantId: Int!): MailingMessage
    updateMailingMessage(id: Int!, mailingCampaignId: Int!, templateId: Int!, languageId: String!, to: String!, locals: String!, localsHash: String!, priority: Int!, dateCreated: DateTime!, dateSent: DateTime, error: String, html: String, text: String, uniqueKey: String, subject: String, mailingMessageStatusId: String!, messageTemplateLangVariantId: Int!): MailingMessage
    removeMailingMessage(id: Int!): MailingMessage
  }
`;
