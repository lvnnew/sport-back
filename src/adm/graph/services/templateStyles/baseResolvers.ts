import {
  QueryAllTemplateStylesArgs,
  Query_AllTemplateStylesMetaArgs,
  Resolvers,
  MutationCreateTemplateStyleArgs,
  MutationUpdateTemplateStyleArgs,
  MutationRemoveTemplateStyleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    TemplateStyle: (_, {id}, {context}: {context: Context}) =>
      context.service('templateStyles').get(id, true),
    allTemplateStyles:
      (_, params: QueryAllTemplateStylesArgs, {context}: {context: Context}) =>
        context.service('templateStyles').all(params, true),
    _allTemplateStylesMeta:
      (_, params: Query_AllTemplateStylesMetaArgs, {context}: {context: Context}) =>
        context.service('templateStyles').meta(params, true),
  },
  Mutation: {
    createTemplateStyle:
      (_, params: MutationCreateTemplateStyleArgs, {context}: {context: Context}) =>
        context.service('templateStyles').create(params, true),
    updateTemplateStyle:
      (_, params: MutationUpdateTemplateStyleArgs, {context}: {context: Context}) =>
        context.service('templateStyles').update(params, true),
    removeTemplateStyle:
      (_, params: MutationRemoveTemplateStyleArgs, {context}: {context: Context}) =>
        context.service('templateStyles').delete(params, true),
  },
};

export default queryResolvers;
