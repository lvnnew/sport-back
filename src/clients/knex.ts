import {getConfig} from '../config';
import knex, {Knex} from 'knex';
import log from '../log';
import {addParamsToDatabaseUri} from '../utils/addParamsToPgUri';

// DO NOT EDIT! THIS IS GENERATED FILE

let knexInstance: Knex | null = null;

export const getKnex = async () => {
  const {databaseMainWriteUri} = await getConfig();

  log.info(typeof addParamsToDatabaseUri);

  // const url = addParamsToDatabaseUri(databaseMainWriteUri {
  //   application_name: appName,
  //   ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
  // });

  if (!knexInstance) {
    knexInstance = knex({
      client: 'pg',
      connection: databaseMainWriteUri,
    });
  }

  return knexInstance;
};
