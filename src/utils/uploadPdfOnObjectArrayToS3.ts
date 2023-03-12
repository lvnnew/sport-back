import * as R from 'ramda';
import {v4 as uuid} from 'uuid';
import {createStreamCreatorForUpload} from '../clients/s3';
import createPdfItemsTable from './fileGeneration/pdf/createPdfItemsTable';
import createPdfItemsList from './fileGeneration/pdf/createPdfItemsList';
import {File} from '../generated/graphql';
import {WriteStream} from 'fs-extra';
import {getConfig} from '../config';

export interface FileData {
  contentType: string;
  fileName: string;
  s3FileName: string;
}

export const getPdfCreatorOnObjectArray = <T>(
  items: T[],
  fields?: string[],
  isTable?: boolean,
  columnTitles?: Record<string, any>,
) =>
    async (stream: WriteStream) => {
      if (items.length > 10000) {
        throw new Error('Items too much (max 10000)');
      }

      let filteredFields = [];

      if (fields) {
        for (const item of items) {
          filteredFields.push(R.pick(fields, item));
        }
      } else {
        filteredFields = items;
      }

      if (isTable) {
        await createPdfItemsTable(filteredFields, stream, columnTitles);
      } else {
        await createPdfItemsList(filteredFields, stream, columnTitles);
      }
    };

export const uploadPdfToS3ByPdfCreator = async (
  bucket: string,
  fileName: string,
  creator: (stream: WriteStream) => Promise<void>,
): Promise<Omit<File, 'id'>> => {
  const {s3Endpoint, s3PublicEndpoint} = await getConfig();
  const fileNameWithExtension = `${fileName}.pdf`;
  const s3FileName = `${uuid()}/${fileNameWithExtension}`;
  const streamCreator = createStreamCreatorForUpload(bucket);
  const {stream, promise} = await streamCreator(s3FileName);

  await creator(stream);

  const resUpload = await promise;

  const url = resUpload.Location.replace(s3Endpoint, s3PublicEndpoint);

  return {
    eTag: resUpload.ETag,
    mimetype: 'application/pdf',
    originalName: fileNameWithExtension,
    s3Key: resUpload.Key,
    url,
    bytes: resUpload.sizeInBytes,
  };
};

const uploadPdfOnObjectArrayToS3 = async <T extends Record<string, any>>(
  items: T[],
  bucket: string,
  fileName: string,
  fields?: string[],
  isTable?: boolean,
  columnTitles?: Record<string, any>,
): Promise<Omit<File, 'id'>> =>
  uploadPdfToS3ByPdfCreator(bucket, fileName, getPdfCreatorOnObjectArray(items, fields, isTable, columnTitles));

export default uploadPdfOnObjectArrayToS3;
