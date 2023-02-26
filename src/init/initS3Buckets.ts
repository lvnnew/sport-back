import {createS3BucketIfNotExist} from '../clients/s3';
import {getConfig} from '../config';

const initS3Buckets = async () => {
  const {s3BucketEmailFiles, s3BucketTmpFilesToDownload} = await getConfig();

  createS3BucketIfNotExist(s3BucketEmailFiles, true);
  createS3BucketIfNotExist(s3BucketTmpFilesToDownload, true);
};

export default initS3Buckets;
