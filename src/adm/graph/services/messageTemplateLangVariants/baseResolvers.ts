import {
  QueryAllMessageTemplateLangVariantsArgs,
  Query_AllMessageTemplateLangVariantsMetaArgs,
  Resolvers,
  MutationCreateMessageTemplateLangVariantArgs,
  MutationUpdateMessageTemplateLangVariantArgs,
  MutationRemoveMessageTemplateLangVariantArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MessageTemplateLangVariant: (_, {id}, {context}: {context: Context}) =>
      context.service('messageTemplateLangVariants').get(id),
    allMessageTemplateLangVariants: (_, params: QueryAllMessageTemplateLangVariantsArgs, {context}: {context: Context}) =>
      context.service('messageTemplateLangVariants').all(params),
    _allMessageTemplateLangVariantsMeta: (_, params: Query_AllMessageTemplateLangVariantsMetaArgs, {context}: {context: Context}) =>
      context.service('messageTemplateLangVariants').meta(params),
  },
  Mutation: {
    createMessageTemplateLangVariant: (_, params: MutationCreateMessageTemplateLangVariantArgs, {context}: {context: Context}) =>
      context.service('messageTemplateLangVariants').create(params, true),
    updateMessageTemplateLangVariant: (_, params: MutationUpdateMessageTemplateLangVariantArgs, {context}: {context: Context}) =>
      context.service('messageTemplateLangVariants').update(params, true),
    removeMessageTemplateLangVariant: (_, params: MutationRemoveMessageTemplateLangVariantArgs, {context}: {context: Context}) =>
      context.service('messageTemplateLangVariants').delete(params),
  },
};

export default queryResolvers;
