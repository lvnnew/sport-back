import {createContext} from '../../../adm/services/context';

const recalculateStats = async () => {
  const ctx = await createContext();
  await ctx.service('stats').recalculate();
};

export default recalculateStats;
