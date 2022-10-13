import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MailingCampaign {
    id: Int!
    title: String!
    mailingTypeId: String!
    priority: Int!
  }

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
    createMailingCampaign(title: String!, mailingTypeId: String!, priority: Int!): MailingCampaign
    updateMailingCampaign(id: Int!, title: String!, mailingTypeId: String!, priority: Int!): MailingCampaign
    removeMailingCampaign(id: Int!): MailingCampaign
  }
`;
