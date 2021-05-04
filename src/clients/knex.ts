/* eslint-disable @typescript-eslint/camelcase */
import {getConfig} from '../config';
import knex, {Knex} from 'knex';
import {addParamsToPgUri} from '../utils/addParamsToPgUri';

// DO NOT EDIT! THIS IS GENERATED FILE

let knexInstance: Knex | null = null;

export const getKnex = async (appName = 'someBack_Knex') => {
  const config = await getConfig();
  const url = addParamsToPgUri(config.pgUri, {
    application_name: appName,
    ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
  });

  if (!knexInstance) {
    knexInstance = knex({
      client: 'pg',
      connection: url,
    });
  }

  return knexInstance;
};
