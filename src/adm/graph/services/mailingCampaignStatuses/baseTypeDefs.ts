/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MailingCampaignStatus {
    id: ID!
    title: String!
  }

  input MailingCampaignStatusFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_not_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MailingCampaignStatus(id: ID!): MailingCampaignStatus
    allMailingCampaignStatuses(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MailingCampaignStatusFilter): [MailingCampaignStatus]
    _allMailingCampaignStatusesMeta(page: Int, perPage: Int, filter: MailingCampaignStatusFilter): ListMetadata
  }

  type Mutation {
    createMailingCampaignStatus(id: ID!, title: String!): MailingCampaignStatus
    updateMailingCampaignStatus(id: ID!, title: String!): MailingCampaignStatus
    removeMailingCampaignStatus(id: ID!): MailingCampaignStatus
  }
`;
