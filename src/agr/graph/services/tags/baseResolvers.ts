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
import {AgrContext} from '../../../services/context';

const queryResolvers: Resolvers = {
  Query: {
    Tag: (_, {id}, {dataSources}) =>
      dataSources.tags.get(id),
    allTags: (_, params: QueryAllTagsArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.tags.all(params),
    _allTagsMeta: (_, params: Query_AllTagsMetaArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.tags.meta(params),
  },
  Mutation: {
    createTag: (_, params: MutationCreateTagArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.tags.create(params),
    updateTag: (_, params: MutationUpdateTagArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.tags.update(params),
    removeTag: (_, params: MutationRemoveTagArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.tags.delete(params),
  },
};

export default queryResolvers;
