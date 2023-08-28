import {knex, Knex} from 'knex';

let knexInstance: Knex | null = null;

export const getKnexByUri = (uri: string) => {
  if (!knexInstance) {
    knexInstance = knex({
      client: 'pg',
      connection: uri,
    });
  }

  return knexInstance;
};
