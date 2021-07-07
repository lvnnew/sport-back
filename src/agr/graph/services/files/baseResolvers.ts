/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllFilesArgs,
  Query_AllFilesMetaArgs,
  Resolvers,
  MutationCreateFileArgs,
  MutationUpdateFileArgs,
  MutationRemoveFileArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    File: (_, {id}, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.files.get(id),
    allFiles: (_, params: QueryAllFilesArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.files.all(params),
    _allFilesMeta: (_, params: Query_AllFilesMetaArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.files.meta(params),
  },
  Mutation: {
    createFile: (_, params: MutationCreateFileArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.files.create(params),
    updateFile: (_, params: MutationUpdateFileArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.files.update(params),
    removeFile: (_, params: MutationRemoveFileArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.files.delete(params),
  },
};

export default queryResolvers;
