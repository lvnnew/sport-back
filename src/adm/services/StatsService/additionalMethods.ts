import {Context} from '../types';
import {BaseStatsMethods} from './StatsService';
import {MutationUpdateStatArgs, Stat} from '../../../generated/graphql';
import {Gauge} from 'prom-client';
import * as R from 'ramda';

export interface AdditionalStatsMethods {
  recalculate: () => Promise<Stat>;
  updateGauges: () => Promise<void>;
}

const gauge = new Gauge({
  name: 'stats_gauge',
  help: 'stats_gauge',
  labelNames: ['label'],
});

export const getAdditionalMethods = (ctx: Context, _baseMethods: BaseStatsMethods): AdditionalStatsMethods => {
  const updateGauges = async () => {
    const stats = await ctx.service('stats').get('stats');

    if (!stats) {
      return;
    }

    R.toPairs(stats)
      .filter(([key]) => !['id', 'updated', 'search'].includes(key))
      .forEach(([key, value]) => {
        gauge.set({label: key}, value || 0);
      });
  };

  const recalculate = async () => {
    const stats: MutationUpdateStatArgs = {
      id: 'stats',
      updated: new Date(),
      helloCount: 0,
    };

    await ctx.service('stats').upsert(stats);

    await updateGauges();

    return stats;
  };

  return {
    recalculate,
    updateGauges,
  };
};
