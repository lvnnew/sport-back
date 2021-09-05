import {getConfig} from '../config';
import knex from 'knex';
import {log} from '../log';
import {addParamsToPgUri} from '../utils/addParamsToPgUri';

// DO NOT EDIT! THIS IS GENERATED FILE

let knexInstance: knex | null = null;

export const getKnex = async (appName = 'someBack_Knex') => {
  const config = await getConfig();

  log.info(appName, typeof addParamsToPgUri);

  // const url = addParamsToPgUri(config.pgUri, {
  //   application_name: appName,
  //   ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
  // });

  const url = config.pgUri;

  if (!knexInstance) {
    knexInstance = knex({
      client: 'pg',
      connection: url,
    });
  }

  return knexInstance;
};
