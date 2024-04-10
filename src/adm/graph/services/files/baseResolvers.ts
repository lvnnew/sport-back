import {
  QueryAllFilesArgs,
  Query_AllFilesMetaArgs,
  Resolvers,
  MutationCreateFileArgs,
  MutationUpdateFileArgs,
  MutationRemoveFileArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    File: (_, {id}, {context}: {context: Context}) =>
      context.service('files').get(id, true),
    allFiles:
      (_, params: QueryAllFilesArgs, {context}: {context: Context}) =>
        context.service('files').all(params, true),
    _allFilesMeta:
      (_, params: Query_AllFilesMetaArgs, {context}: {context: Context}) =>
        context.service('files').meta(params, true),
  },
  Mutation: {
    createFile:
      (_, params: MutationCreateFileArgs, {context}: {context: Context}) =>
        context.service('files').create(params, true),
    updateFile:
      (_, params: MutationUpdateFileArgs, {context}: {context: Context}) =>
        context.service('files').update(params, true),
    removeFile:
      (_, params: MutationRemoveFileArgs, {context}: {context: Context}) =>
        context.service('files').delete(params, true),
  },
};

export default queryResolvers;
