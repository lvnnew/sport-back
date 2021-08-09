import {
  QueryAllFilesArgs,
  Query_AllFilesMetaArgs,
  Resolvers,
  MutationCreateFileArgs,
  MutationUpdateFileArgs,
  MutationRemoveFileArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    File: (_, {id}, {context}: {context: Context}) =>
      context.files.get(id),
    allFiles: (_, params: QueryAllFilesArgs, {context}: {context: Context}) =>
      context.files.all(params),
    _allFilesMeta: (_, params: Query_AllFilesMetaArgs, {context}: {context: Context}) =>
      context.files.meta(params),
  },
  Mutation: {
    createFile: (_, params: MutationCreateFileArgs, {context}: {context: Context}) =>
      context.files.create(params),
    updateFile: (_, params: MutationUpdateFileArgs, {context}: {context: Context}) =>
      context.files.update(params),
    removeFile: (_, params: MutationRemoveFileArgs, {context}: {context: Context}) =>
      context.files.delete(params),
  },
};

export default queryResolvers;
