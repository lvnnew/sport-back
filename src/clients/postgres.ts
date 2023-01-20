import {getConfig} from '../config';
import {addParamsToDatabaseUri} from '../utils/addParamsToPgUri';
import {Client} from 'pg';
import log from '../log';

// DO NOT EDIT! THIS IS GENERATED FILE

let postgresInstance: Client | null = null;

export const getPostgres = async () => {
  if (!postgresInstance) {
    const {databaseMainWriteUri} = await getConfig();
    if (!databaseMainWriteUri) {
      throw new Error('Database Uri is not provided');
    }

    log.info(typeof addParamsToDatabaseUri);

    // const url = addParamsToDatabaseUri(databaseMainWriteUri, {
    //   application_name: appName,
    //   ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
    // });

    const client = new Client(databaseMainWriteUri);
    await client.connect();

    if (!postgresInstance) {
      postgresInstance = client;
    }
  }

  return postgresInstance;
};
