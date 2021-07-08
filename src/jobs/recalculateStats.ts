import {getContext} from '../agr/services/context';

export const recalculateStats = async () => {
  const ctx = await getContext();
  await ctx.stats.recalculate();
};
