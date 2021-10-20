import {
  QueryAllMessageTemplatesArgs,
  Query_AllMessageTemplatesMetaArgs,
  Resolvers,
  MutationCreateMessageTemplateArgs,
  MutationUpdateMessageTemplateArgs,
  MutationRemoveMessageTemplateArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MessageTemplate: (_, {id}, {context}: {context: Context}) =>
      context.messageTemplates.get(id),
    allMessageTemplates: (_, params: QueryAllMessageTemplatesArgs, {context}: {context: Context}) =>
      context.messageTemplates.all(params),
    _allMessageTemplatesMeta: (_, params: Query_AllMessageTemplatesMetaArgs, {context}: {context: Context}) =>
      context.messageTemplates.meta(params),
  },
  Mutation: {
    createMessageTemplate: (_, params: MutationCreateMessageTemplateArgs, {context}: {context: Context}) =>
      context.messageTemplates.create(params),
    updateMessageTemplate: (_, params: MutationUpdateMessageTemplateArgs, {context}: {context: Context}) =>
      context.messageTemplates.update(params),
    removeMessageTemplate: (_, params: MutationRemoveMessageTemplateArgs, {context}: {context: Context}) =>
      context.messageTemplates.delete(params),
  },
};

export default queryResolvers;
