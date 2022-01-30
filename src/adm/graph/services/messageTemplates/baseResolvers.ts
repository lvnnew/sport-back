import {
  QueryAllMessageTemplatesArgs,
  Query_AllMessageTemplatesMetaArgs,
  Resolvers,
  MutationCreateMessageTemplateArgs,
  MutationUpdateMessageTemplateArgs,
  MutationRemoveMessageTemplateArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MessageTemplate: (_, {id}, {context}: {context: Context}) =>
      context.service('messageTemplates').get(id),
    allMessageTemplates: (_, params: QueryAllMessageTemplatesArgs, {context}: {context: Context}) =>
      context.service('messageTemplates').all(params),
    _allMessageTemplatesMeta: (_, params: Query_AllMessageTemplatesMetaArgs, {context}: {context: Context}) =>
      context.service('messageTemplates').meta(params),
  },
  Mutation: {
    createMessageTemplate: (_, params: MutationCreateMessageTemplateArgs, {context}: {context: Context}) =>
      context.service('messageTemplates').create(params, true),
    updateMessageTemplate: (_, params: MutationUpdateMessageTemplateArgs, {context}: {context: Context}) =>
      context.service('messageTemplates').update(params, true),
    removeMessageTemplate: (_, params: MutationRemoveMessageTemplateArgs, {context}: {context: Context}) =>
      context.service('messageTemplates').delete(params),
  },
};

export default queryResolvers;
