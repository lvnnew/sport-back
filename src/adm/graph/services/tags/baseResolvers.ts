/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllTagsArgs,
  Query_AllTagsMetaArgs,
  Resolvers,
  MutationCreateTagArgs,
  MutationUpdateTagArgs,
  MutationRemoveTagArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Tag: (_, {id}, {context}: {context: Context}) =>
      context.tags.get(id),
    allTags: (_, params: QueryAllTagsArgs, {context}: {context: Context}) =>
      context.tags.all(params),
    _allTagsMeta: (_, params: Query_AllTagsMetaArgs, {context}: {context: Context}) =>
      context.tags.meta(params),
  },
  Mutation: {
    createTag: (_, params: MutationCreateTagArgs, {context}: {context: Context}) =>
      context.tags.create(params),
    updateTag: (_, params: MutationUpdateTagArgs, {context}: {context: Context}) =>
      context.tags.update(params),
    removeTag: (_, params: MutationRemoveTagArgs, {context}: {context: Context}) =>
      context.tags.delete(params),
  },
};

export default queryResolvers;
