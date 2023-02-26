import fs from 'fs-jetpack';
import {v4 as uuid} from 'uuid';
import tmp from 'tmp';
import {createS3Putter} from '../clients/s3';
import exportDataToExcel from './fileGeneration/xlsx/createXlxs';
import {File} from '../generated/graphql';

export interface FileData {
  contentType: string;
  fileName: string;
  s3FileName: string;
}

const uploadXlsxOnObjectArrayToS3 = async <T extends Record<string, any>>(
  items: T[],
  bucket: string,
  fileName: string,
): Promise<Omit<File, 'id'>> => {
  const filePutter = createS3Putter(bucket);
  const fileNameWithExtension = `${fileName}.xlsx`;
  const s3FileName = `${uuid()}/${fileNameWithExtension}`;
  const filePath = tmp.fileSync().name;

  exportDataToExcel(items, fileName, filePath);

  const resUpload = await filePutter(filePath, s3FileName);

  fs.remove(filePath);

  return {
    eTag: '',
    mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    originalName: fileNameWithExtension,
    s3Key: resUpload.Key,
    url: resUpload.Location,
    bytes: resUpload.sizeInBytes,
  };
};

export default uploadXlsxOnObjectArrayToS3;
