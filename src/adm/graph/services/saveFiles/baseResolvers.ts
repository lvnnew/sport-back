import {
  Resolvers,
} from '../../../../generated/graphql';
import {FileUpload, GraphQLUpload} from 'graphql-upload';
import {Context} from '../../../services/types';
import {FileUploadResult} from '../../../services/SaveFiles/SaveFileMethods';

const queryResolvers: Resolvers = {
  Mutation: {
    saveFile: async (_, {file}: { file: Promise<FileUpload> }, {context}: { context: Context }): Promise<FileUploadResult> =>
      context.service('saveFiles').saveFile(file),
    saveFiles: async (_, {files}: { files: Promise<FileUpload>[] }, {context}: { context: Context }): Promise<FileUploadResult[]> =>
      context.service('saveFiles').saveFiles(files),
  },
  Upload: GraphQLUpload as any,
};

export default queryResolvers;
