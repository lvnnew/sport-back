import {getAgrContext} from '../agr/services/context';

export const recalculateStats = async () => {
  const ctx = await getAgrContext();
  await ctx.stats.recalculate();
};
