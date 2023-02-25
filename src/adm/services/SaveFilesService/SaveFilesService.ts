/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Context} from '../types';
import {v4 as uuidv4} from 'uuid';
import {getConfig} from '../../../config';
import {createUploaderFromStream} from '../../../clients/s3';
import {FileUpload} from 'graphql-upload';
import log from '../../../log';

export type FileUploadResult = {id: number; url: string};

const createFilePath = (userFileName: string) => `${uuidv4()}/${decodeURI(userFileName)}`;

class SaveFilesService {
  constructor(protected ctx: Context) {}

  makeFileSaver = async () => {
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

      const dbFile = await this.ctx.service('files').create({
        eTag: resUpload.ETag,
        mimetype,
        originalName: filename,
        s3Key: resUpload.Key,
        url: resUpload.Location,
        bytes: resUpload.sizeInBytes,
      });

      return {id: dbFile.id, url: dbFile.url};
    };
  };

  saveFile = async (file: Promise<FileUpload>): Promise<FileUploadResult> => {
    const fileSaver = await this.makeFileSaver();

    return fileSaver(file);
  };

  saveFiles = async (files: Promise<FileUpload>[]): Promise<FileUploadResult[]> => {
    const fileList: FileUploadResult[] = [];
    const needAwait: Promise<any>[] = [];

    try {
      const fileSaver = await this.makeFileSaver();

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
}

export default SaveFilesService;
