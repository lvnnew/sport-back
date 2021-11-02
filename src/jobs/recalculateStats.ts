import {getOrCreateContext} from '../adm/services/context';

const recalculateStats = async () => {
  const ctx = await getOrCreateContext();
  await ctx.stats.recalculate();
};

export default recalculateStats;
