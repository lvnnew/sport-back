import {getConfig} from '../config';
import {addParamsToDatabaseUri} from '../utils/addParamsToPgUri';
import {Client} from 'pg';

// DO NOT EDIT! THIS IS GENERATED FILE

let postgresInstance: Client | null = null;

export const getPostgres = async (appName = 'someBack_Knex') => {
  if (!postgresInstance) {
    const {databaseMainWriteUri} = await getConfig();
    if (!databaseMainWriteUri) {
      throw new Error('Database Uri is not provided');
    }

    const url = addParamsToDatabaseUri(databaseMainWriteUri, {
      application_name: appName,
      ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
    });

    const client = new Client(url);
    await client.connect();

    if (!postgresInstance) {
      postgresInstance = client;
    }
  }

  return postgresInstance;
};
