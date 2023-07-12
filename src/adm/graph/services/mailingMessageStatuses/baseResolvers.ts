import {
  QueryAllMailingMessageStatusesArgs,
  Query_AllMailingMessageStatusesMetaArgs,
  Resolvers,
  MutationCreateMailingMessageStatusArgs,
  MutationUpdateMailingMessageStatusArgs,
  MutationRemoveMailingMessageStatusArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MailingMessageStatus: (_, {id}, {context}: {context: Context}) =>
      context.service('mailingMessageStatuses').get(id),
    allMailingMessageStatuses:
      (_, params: QueryAllMailingMessageStatusesArgs, {context}: {context: Context}) =>
        context.service('mailingMessageStatuses').all(params),
    _allMailingMessageStatusesMeta:
      (_, params: Query_AllMailingMessageStatusesMetaArgs, {context}: {context: Context}) =>
        context.service('mailingMessageStatuses').meta(params),
  },
  Mutation: {
    createMailingMessageStatus:
      (_, params: MutationCreateMailingMessageStatusArgs, {context}: {context: Context}) =>
        context.service('mailingMessageStatuses').create(params, true),
    updateMailingMessageStatus:
      (_, params: MutationUpdateMailingMessageStatusArgs, {context}: {context: Context}) =>
        context.service('mailingMessageStatuses').update(params, true),
    removeMailingMessageStatus:
      (_, params: MutationRemoveMailingMessageStatusArgs, {context}: {context: Context}) =>
        context.service('mailingMessageStatuses').delete(params),
  },
};

export default queryResolvers;
