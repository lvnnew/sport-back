import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MailingCampaign {
    id: Int!
    title: String!
    mailingTypeId: String!
    priority: Int!
    date: Date
    mailingCampaignStatusId: String
    messageTemplateId: String!
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input MailingCampaignFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    mailingTypeId: String
    mailingTypeId_in: [String]
    priority: Int
    priority_in: [Int]
    priority_lte: Int
    priority_gte: Int
    priority_lt: Int
    priority_gt: Int
    date: Date
    date_lte: Date
    date_gte: Date
    date_lt: Date
    date_gt: Date
    date_defined: Boolean
    mailingCampaignStatusId: String
    mailingCampaignStatusId_in: [String]
    mailingCampaignStatusId_defined: Boolean
    messageTemplateId: String
    messageTemplateId_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MailingCampaign(id: Int!): MailingCampaign
    allMailingCampaigns(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MailingCampaignFilter): [MailingCampaign]
    _allMailingCampaignsMeta(page: Int, perPage: Int, filter: MailingCampaignFilter): ListMetadata
  }

  type Mutation {
    createMailingCampaign(title: String!, mailingTypeId: String!, priority: Int!, date: Date, mailingCampaignStatusId: String, messageTemplateId: String!): MailingCampaign
    updateMailingCampaign(id: Int!, title: String!, mailingTypeId: String!, priority: Int!, date: Date, mailingCampaignStatusId: String, messageTemplateId: String!): MailingCampaign
    removeMailingCampaign(id: Int!): MailingCampaign
  }
`;
