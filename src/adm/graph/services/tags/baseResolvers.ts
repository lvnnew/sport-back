import {
  QueryAllTagsArgs,
  Query_AllTagsMetaArgs,
  Resolvers,
  MutationCreateTagArgs,
  MutationUpdateTagArgs,
  MutationRemoveTagArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Tag: (_, {id}, {context}: {context: Context}) =>
      context.service('tags').get(id),
    allTags:
      (_, params: QueryAllTagsArgs, {context}: {context: Context}) =>
        context.service('tags').all(params),
    _allTagsMeta:
      (_, params: Query_AllTagsMetaArgs, {context}: {context: Context}) =>
        context.service('tags').meta(params),
  },
  Mutation: {
    createTag:
      (_, params: MutationCreateTagArgs, {context}: {context: Context}) =>
        context.service('tags').create(params, true),
    updateTag:
      (_, params: MutationUpdateTagArgs, {context}: {context: Context}) =>
        context.service('tags').update(params, true),
    removeTag:
      (_, params: MutationRemoveTagArgs, {context}: {context: Context}) =>
        context.service('tags').delete(params),
  },
};

export default queryResolvers;
