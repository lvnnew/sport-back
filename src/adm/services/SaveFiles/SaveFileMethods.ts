import {Context} from '../types';
import {v4 as uuidv4} from 'uuid';
import {getConfig} from '../../../config';
import {createUploaderFromStream} from '../../../clients/s3';
import {FileUpload} from 'graphql-upload';
import log from '../../../log';

export type FileUploadResult = { id: number; url: string };

export interface SaveFileMethods {
  saveFile: (file: Promise<FileUpload>) => Promise<FileUploadResult>;
  saveFiles: (file: Promise<FileUpload>[]) => Promise<FileUploadResult[]>;
}

const createFilePath = (userFileName: string) => `${uuidv4()}/${decodeURI(userFileName)}`;

const makeFileSaver = async (context: Context) => {
  const {s3BucketTmpFilesToDownload} = await getConfig();
  if (!s3BucketTmpFilesToDownload) {
    throw new Error('s3BucketTmpFilesToDownload not provided');
  }

  const uploaderFromStream = createUploaderFromStream(s3BucketTmpFilesToDownload);

  return async (file: Promise<FileUpload>): Promise<FileUploadResult> => {
    const {createReadStream, filename, mimetype} = await file;
    const filePath = createFilePath(filename);
    const stream = createReadStream();

    const resUpload = await uploaderFromStream(filePath, stream);

    const dbFile = await context.service('files').create({
      eTag: resUpload.ETag,
      mimetype,
      originalName: filename,
      s3Key: resUpload.Key,
      url: resUpload.Location,
    });

    return {id: dbFile.id, url: dbFile.url};
  };
};

export const getSaveFileService = (ctx: Context): SaveFileMethods => {
  const saveFile: SaveFileMethods['saveFile'] = async (file) => {
    const fileSaver = await makeFileSaver(ctx);

    return fileSaver(file);
  };

  const saveFiles: SaveFileMethods['saveFiles'] = async (files) => {
    const fileList: FileUploadResult[] = [];
    const needAwait: Promise<any>[] = [];

    try {
      const fileSaver = await makeFileSaver(ctx);

      // @ts-ignore
      for await (const [idx, file] of files) {
        const promise = fileSaver(file);

        promise.then((res: FileUploadResult) => {
          fileList[idx] = res;
        });

        needAwait.push(promise);
      }

      await Promise.all(needAwait);
    } catch (error: any) {
      log.error(`Fail load files: ${error.toString()}`);
      throw error;
    }

    return fileList;
  };

  return {
    saveFile,
    saveFiles,
  };
};
