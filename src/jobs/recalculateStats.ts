import {getOrCreateContext} from '../agr/services/context';

export const recalculateStats = async () => {
  const ctx = await getOrCreateContext();
  await ctx.stats.recalculate();
};
