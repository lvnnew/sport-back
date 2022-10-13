import {
  QueryAllMailingCampaignsArgs,
  Query_AllMailingCampaignsMetaArgs,
  Resolvers,
  MutationCreateMailingCampaignArgs,
  MutationUpdateMailingCampaignArgs,
  MutationRemoveMailingCampaignArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MailingCampaign: (_, {id}, {context}: {context: Context}) =>
      context.service('mailingCampaigns').get(id),
    allMailingCampaigns: (_, params: QueryAllMailingCampaignsArgs, {context}: {context: Context}) =>
      context.service('mailingCampaigns').all(params),
    _allMailingCampaignsMeta: (_, params: Query_AllMailingCampaignsMetaArgs, {context}: {context: Context}) =>
      context.service('mailingCampaigns').meta(params),
  },
  Mutation: {
    createMailingCampaign: (_, params: MutationCreateMailingCampaignArgs, {context}: {context: Context}) =>
      context.service('mailingCampaigns').create(params, true),
    updateMailingCampaign: (_, params: MutationUpdateMailingCampaignArgs, {context}: {context: Context}) =>
      context.service('mailingCampaigns').update(params, true),
    removeMailingCampaign: (_, params: MutationRemoveMailingCampaignArgs, {context}: {context: Context}) =>
      context.service('mailingCampaigns').delete(params),
  },
};

export default queryResolvers;
