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
      context.service('mailingMessages').get(id),
    allMailingMessages:
      (_, params: QueryAllMailingMessagesArgs, {context}: {context: Context}) =>
        context.service('mailingMessages').all(params),
    _allMailingMessagesMeta:
      (_, params: Query_AllMailingMessagesMetaArgs, {context}: {context: Context}) =>
        context.service('mailingMessages').meta(params),
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
        context.service('mailingMessages').delete(params),
  },
};

export default queryResolvers;
