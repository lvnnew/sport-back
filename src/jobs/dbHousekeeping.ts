import {getOrCreateContext} from '../adm/services/context';

const dbHousekeeping = async () => {
  const ctx = await getOrCreateContext();

  await ctx.knex.raw('VACUUM ANALYZE');
};

export default dbHousekeeping;
