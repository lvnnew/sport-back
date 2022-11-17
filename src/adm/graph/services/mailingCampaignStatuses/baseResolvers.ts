import {
  QueryAllMailingCampaignStatusesArgs,
  Query_AllMailingCampaignStatusesMetaArgs,
  Resolvers,
  MutationCreateMailingCampaignStatusArgs,
  MutationUpdateMailingCampaignStatusArgs,
  MutationRemoveMailingCampaignStatusArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MailingCampaignStatus: (_, {id}, {context}: {context: Context}) =>
      context.service('mailingCampaignStatuses').get(id),
    allMailingCampaignStatuses: (_, params: QueryAllMailingCampaignStatusesArgs, {context}: {context: Context}) =>
      context.service('mailingCampaignStatuses').all(params),
    _allMailingCampaignStatusesMeta: (_, params: Query_AllMailingCampaignStatusesMetaArgs, {context}: {context: Context}) =>
      context.service('mailingCampaignStatuses').meta(params),
  },
  Mutation: {
    createMailingCampaignStatus: (_, params: MutationCreateMailingCampaignStatusArgs, {context}: {context: Context}) =>
      context.service('mailingCampaignStatuses').create(params, true),
    updateMailingCampaignStatus: (_, params: MutationUpdateMailingCampaignStatusArgs, {context}: {context: Context}) =>
      context.service('mailingCampaignStatuses').update(params, true),
    removeMailingCampaignStatus: (_, params: MutationRemoveMailingCampaignStatusArgs, {context}: {context: Context}) =>
      context.service('mailingCampaignStatuses').delete(params),
  },
};

export default queryResolvers;
