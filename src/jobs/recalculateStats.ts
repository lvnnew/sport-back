import {getOrCreateContext} from '../adm/services/context';

export const recalculateStats = async () => {
  const ctx = await getOrCreateContext();
  await ctx.stats.recalculate();
};
