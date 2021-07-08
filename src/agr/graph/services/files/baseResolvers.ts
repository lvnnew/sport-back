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
<<<<<<< HEAD
import {AgrContext} from '../../../services/context';
=======
import {Context} from '../../../services/context';
>>>>>>> 6375169 (gen)

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
<<<<<<< HEAD
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
=======
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
>>>>>>> 6375169 (gen)
  },
};

export default queryResolvers;
