/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllAgrTagsArgs,
  Query_AllAgrTagsMetaArgs,
  Resolvers,
  MutationCreateAgrTagArgs,
  MutationUpdateAgrTagArgs,
  MutationRemoveAgrTagArgs,
} from '../../../../generated/graphql';

const queryResolvers: Resolvers = {
  Query: {
    AgrTag: (_, {id}, {dataSources}) =>
      dataSources.agrTags.get(id),
    allAgrTags: (_, params: QueryAllAgrTagsArgs, {dataSources}) =>
      dataSources.agrTags.all(params),
    _allAgrTagsMeta: (_, params: Query_AllAgrTagsMetaArgs, {dataSources}) =>
      dataSources.agrTags.meta(params),
  },
  Mutation: {
    createAgrTag: (_, params: MutationCreateAgrTagArgs, {dataSources}) =>
      dataSources.agrTags.create(params),
    updateAgrTag: (_, params: MutationUpdateAgrTagArgs, {dataSources}) =>
      dataSources.agrTags.update(params),
    removeAgrTag: (_, params: MutationRemoveAgrTagArgs, {dataSources}) =>
      dataSources.agrTags.delete(params),
  },
};

export default queryResolvers;
