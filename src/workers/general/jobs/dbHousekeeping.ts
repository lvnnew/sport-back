import {createContext} from '../../../adm/services/context';

const dbHousekeeping = async () => {
  const ctx = await createContext();

  await ctx.knex.raw('VACUUM ANALYZE');
};

export default dbHousekeeping;
