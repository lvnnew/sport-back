import * as R from 'ramda';
import {v4 as uuid} from 'uuid';
import {createStreamCreatorForUpload} from '../clients/s3';
import createPdfItemsTable from './fileGeneration/pdf/createPdfItemsTable';
import createPdfItemsList from './fileGeneration/pdf/createPdfItemsList';
import {File} from '../generated/graphql';
import {WriteStream} from 'fs-extra';

export interface FileData {
  contentType: string;
  fileName: string;
  s3FileName: string;
}

export const getPdfCreatorOnObjectArray = <T>(
  items: T[],
  fields?: string[],
  isTable?: boolean,
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
        await createPdfItemsTable(filteredFields, stream);
      } else {
        await createPdfItemsList(filteredFields, stream);
      }
    };

export const uploadPdfToS3ByPdfCreator = async (
  bucket: string,
  fileName: string,
  creator: (stream: WriteStream) => Promise<void>,
): Promise<Omit<File, 'id'>> => {
  const fileNameWithExtension = `${fileName}.pdf`;
  const s3FileName = `${uuid()}/${fileNameWithExtension}`;
  const streamCreator = createStreamCreatorForUpload(bucket);
  const {stream, promise} = await streamCreator(s3FileName);

  await creator(stream);

  const resUpload = await promise;

  return {
    eTag: resUpload.ETag,
    mimetype: 'application/pdf',
    originalName: fileNameWithExtension,
    s3Key: resUpload.Key,
    url: resUpload.Location,
    bytes: resUpload.sizeInBytes,
  };
};

const uploadPdfOnObjectArrayToS3 = async <T extends Record<string, any>>(
  items: T[],
  bucket: string,
  fileName: string,
  fields?: string[],
  isTable?: boolean,
): Promise<Omit<File, 'id'>> => uploadPdfToS3ByPdfCreator(bucket, fileName, getPdfCreatorOnObjectArray(items, fields, isTable));

export default uploadPdfOnObjectArrayToS3;
