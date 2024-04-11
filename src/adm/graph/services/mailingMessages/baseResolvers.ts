import {
  QueryAllMailingMessagesArgs,
  Query_AllMailingMessagesMetaArgs,
  Resolvers,
  MutationCreateMailingMessageArgs,
  MutationUpdateMailingMessageArgs,
  MutationRemoveMailingMessageArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MailingMessage: (_, {id}, {context}: {context: Context}) =>
      context.service('mailingMessages').get(id, true),
    allMailingMessages:
      (_, params: QueryAllMailingMessagesArgs, {context}: {context: Context}) =>
        context.service('mailingMessages').all(params, true),
    _allMailingMessagesMeta:
      (_, params: Query_AllMailingMessagesMetaArgs, {context}: {context: Context}) =>
        context.service('mailingMessages').meta(params, true),
  },
  Mutation: {
    createMailingMessage:
      (_, params: MutationCreateMailingMessageArgs, {context}: {context: Context}) =>
        context.service('mailingMessages').create(params, true),
    updateMailingMessage:
      (_, params: MutationUpdateMailingMessageArgs, {context}: {context: Context}) =>
        context.service('mailingMessages').update(params, true),
    removeMailingMessage:
      (_, params: MutationRemoveMailingMessageArgs, {context}: {context: Context}) =>
        context.service('mailingMessages').delete(params, true),
  },
};

export default queryResolvers;
