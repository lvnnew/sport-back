import fs from 'fs-jetpack';
import AWS from 'aws-sdk';
import S3 from 'aws-sdk/clients/s3';
import log from '../log';
import {getConfig} from '../config';
import {ManagedUpload} from 'aws-sdk/lib/s3/managed_upload';
import {PassThrough, Readable} from 'stream';
import * as stream from 'stream';
import getSizeTransform from 'stream-size';
import {WriteStream} from 'fs';

let s3: S3 | null = null;

export const getS3 = async () => {
  if (!s3) {
    const {s3AccessKeyId, s3SecretAccessKey, s3Endpoint, s3Region} = await getConfig();
    const ep = new AWS.Endpoint(s3Endpoint);

    // const opt = {credentials: amqp.credentials.plain(username, password)};

    if (!s3) {
      s3 = new S3({
        accessKeyId: s3AccessKeyId,
        endpoint: (ep as unknown) as string,
        region: s3Region,
        secretAccessKey: s3SecretAccessKey,
        s3ForcePathStyle: true,
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

export const createS3BucketIfNotExist = async (bucket: string, publicBucket = false): Promise<void> => {
  const s3 = await getS3();

  await new Promise<void>((resolve, reject) => {
    s3.createBucket({Bucket: bucket}, (err) => {
      if (err) {
        if (err.statusCode === 409) {
          log.info(`Bucket "${bucket}" has been created already`);
          resolve();
        } else {
          log.error(err);
          reject(err);
        }
      } else {
        resolve();
      }
    });
  });

  if (publicBucket) {
    const policy = {
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Principal: {
            AWS: [
              '*',
            ],
          },
          Action: [
            's3:GetObject',
          ],
          Resource: [
            `arn:aws:s3:::${bucket}/*`,
          ],
        },
      ],
    };

    await new Promise<void>((resolve, reject) => {
      s3.putBucketPolicy({Bucket: bucket, Policy: JSON.stringify(policy, null, 1)}, (err) => {
        if (err) {
          log.error(err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
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

export const createS3Putter = (bucket: string) => async (localFilePath: string, s3FilePath: string) => {
  const size = fs.inspect(localFilePath);

  const s3 = await getS3();
  await createS3BucketIfNotExist(bucket);

  const fileContent = fs.read(localFilePath, 'buffer');

  return new Promise<S3.ManagedUpload.SendData & {sizeInBytes: number}>((resolve, reject) => {
    s3.upload(
      {
        Body: fileContent,
        Bucket: bucket,
        Key: s3FilePath,
      },
      (err, data) => {
        if (err) {
          log.error(err);
          reject(err);
        } else {
          resolve({
            ...data,
            sizeInBytes: size?.size ?? 0,
          });
        }
      },
    );
  });
};

export const createS3PutterWithoutFileSaving = (bucket: string) => async (file: string, path: string) => {
  const s3 = await getS3();
  await createS3BucketIfNotExist(bucket);

  const fileContent = fs.read(file, 'buffer');

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
    const stream = createLoadStream(filename);
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

    stream.pipe(zipFile);
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

export const createUploaderFromStream = (bucket: string) => async (key: string, stream: Readable | PassThrough): Promise<ManagedUpload.SendData & {sizeInBytes: number}> => {
  const s3 = await getS3();
  await createS3BucketIfNotExist(bucket);

  const pipedStream = stream.pipe(
    getSizeTransform(),
  );

  const result = await s3
    .upload({
      Bucket: bucket,
      Key: key,
      Body: pipedStream,
    })
    .promise();

  return {
    ...result,
    sizeInBytes: pipedStream.sizeInBytes,
  };
};

export const createStreamCreatorForUpload = (bucket: string) => async (key: string) => {
  const pass = new stream.PassThrough();
  const promise = createUploaderFromStream(bucket)(key, pass);

  return {
    stream: pass as unknown as WriteStream,
    promise,
  };
};
