import fs, {ReadStream, WriteStream} from 'fs-extra';
import AWS from 'aws-sdk';
import S3 from 'aws-sdk/clients/s3';
import log from '../log';
import {getConfig} from '../config';
import {ManagedUpload} from 'aws-sdk/lib/s3/managed_upload';
import {PassThrough, Readable} from 'stream';
import * as stream from 'stream';

const ep = new AWS.Endpoint('s3.eu-central-1.wasabisys.com');

let s3: S3 | null = null;

export const getS3 = async () => {
  if (!s3) {
    const {s3AccessKeyId, s3SecretAccessKey} = await getConfig();

    // const opt = {credentials: amqp.credentials.plain(username, password)};

    if (!s3) {
      s3 = new S3({
        accessKeyId: s3AccessKeyId,
        endpoint: (ep as unknown) as string,
        region: 'eu-central-1',
        secretAccessKey: s3SecretAccessKey,
      });
    }
  }

  if (!s3) {
    throw new Error('There is error while initializing s3');
  }

  return s3;
};

export const createS3Getter = (bucket: string) => async (path: string) => {
  const s3 = await getS3();
  try {
    const data = await s3.getObject({
      Bucket: bucket,
      Key: path,
    }).promise();

    return data.Body as Buffer || null;
  } catch (error: any) {
    log.error(error);
  }

  return null;
};

const createS3BucketIfNotExist = async (Bucket: string): Promise<void> => {
  const s3 = await getS3();

  await new Promise<void>((resolve, reject) => {
    s3.createBucket({Bucket}, (err) => {
      if (err) {
        log.error(err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const createS3StringPutter = (bucket: string) => async (fileNameWithExtension: string, data: string) => {
  const s3 = await getS3();
  await createS3BucketIfNotExist(bucket);

  await new Promise<void>((resolve, reject) => {
    s3.upload(
      {
        Body: data,
        Bucket: bucket,
        Key: fileNameWithExtension,
      },
      (err) => {
        if (err) {
          log.error(err);
          reject(err);
        } else {
          resolve();
        }
      },
    );
  });
};

export const createS3JsonGetter = (bucket: string) => async (path: string): Promise<Record<string, any> | null> => {
  const s3 = await getS3();
  try {
    const data = await s3.getObject({
      Bucket: bucket,
      Key: path,
    }).promise();

    if (!data.Body) {
      return null;
    }

    return JSON.parse(data.Body.toString('utf8'));
  } catch (error: any) {
    log.error(error);
  }

  return null;
};

export const createS3Putter = (bucket: string) => async (file: string, path: string) => {
  const s3 = await getS3();
  await createS3BucketIfNotExist(bucket);

  const fileContent = fs.readFileSync(file);

  await new Promise<void>((resolve, reject) => {
    s3.upload(
      {
        Body: fileContent,
        Bucket: bucket,
        Key: path,
      },
      (err) => {
        if (err) {
          log.error(err);
          reject(err);
        } else {
          resolve();
        }
      },
    );
  });
};

export const createS3PutterWithoutFileSaving = (bucket: string) => async (file: string, path: string) => {
  const s3 = await getS3();
  await createS3BucketIfNotExist(bucket);

  const fileContent = fs.readFileSync(file);

  await new Promise<void>((resolve, reject) => {
    s3.upload(
      {
        Body: fileContent,
        Bucket: bucket,
        Key: path,
      },
      (err) => {
        if (err) {
          log.error(err);
          reject(err);
        } else {
          resolve();
        }
      },
    );
  });
};

export const createS3JsonPutter = (bucket: string) => async (id: string, data: Record<string, any>) => {
  const s3 = await getS3();
  await new Promise<void>((resolve, reject) => {
    s3.createBucket({Bucket: bucket}, (err) => {
      if (err) {
        log.error(err);
        reject(err);
      } else {
        resolve();
      }
    });
  });

  await new Promise<void>((resolve, reject) => {
    s3.upload(
      {
        Body: JSON.stringify(data),
        Bucket: bucket,
        Key: `${id}.json`,
      },
      (err) => {
        if (err) {
          log.error(err);
          reject(err);
        } else {
          resolve();
        }
      },
    );
  });
};

export const createS3LoadStream = async (bucket: string) => {
  const s3 = await getS3();

  return (filename: string): Readable => s3
    .getObject({
      Bucket: bucket,
      Key: filename,
    })
    .createReadStream();
};

export const createS3Downloader = (bucket: string) => async (filename: string, pathToSave: string) => {
  const zipFile = fs.createWriteStream(pathToSave);
  const createLoadStream = await createS3LoadStream(bucket);

  await new Promise<void>((resolve, reject) => {
    const stream = createLoadStream(filename)
      .pipe(zipFile);
    let hadError = false;
    stream.on('error', (err) => {
      hadError = true;
      reject(err);
    });
    stream.on('close', () => {
      if (!hadError) {
        resolve();
      }
    });
  });
};

export const createS3Lister = (bucket: string) => async (prefix?: string): Promise<string[]> => {
  const s3 = await getS3();

  return new Promise((resolve, reject) => {
    const stream = s3
      .listObjects({
        Bucket: bucket,
        Delimiter: '/',
        MaxKeys: 1000000,
        Prefix: prefix,
      }, (err, data: any) => {
        if (err) {
          throw err;
        }

        resolve(data.Contents.map((entry: any) => entry.Key));
      });
    stream.on('error', (err) => {
      reject(err);
    });
  });
};

export const createUploaderFromStream = (bucket: string) => async (key: string, stream: ReadStream | PassThrough): Promise<ManagedUpload.SendData> => {
  const s3 = await getS3();
  await createS3BucketIfNotExist(bucket);

  return s3
    .upload({
      Bucket: bucket,
      Key: key,
      Body: stream,
    })
    .promise();
};

export const createStreamCreatorForUpload = (bucket: string) => async (key: string): Promise<{stream: WriteStream, promise: Promise<ManagedUpload.SendData>}> => {
  const pass = new stream.PassThrough();
  const promise = createUploaderFromStream(bucket)(key, pass);

  return {
    stream: pass as unknown as WriteStream,
    promise,
  };
};
