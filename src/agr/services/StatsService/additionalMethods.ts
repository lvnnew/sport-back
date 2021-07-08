/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseStatsMethods} from './StatsService';
import {MutationUpdateStatArgs, Stat} from '../../../generated/graphql';
import {Gauge} from 'prom-client';
import R from 'ramda';

export interface AdditionalStatsMethods {
  recalculate: () => Promise<Stat>;
  updateGauges: () => Promise<void>;
}

const gauge = new Gauge({
  name: 'stats_gauge',
  help: 'stats_gauge',
  labelNames: ['label'],
});

export const getAdditionalMethods = (getCtx: () => Context, _baseMethods: BaseStatsMethods): AdditionalStatsMethods => {
  const recalculate = async () => {
    const ctx = getCtx();

    const stats: MutationUpdateStatArgs = {
      id: 'stats',
      updated: new Date(),
      helloCount: 0,
    };

    await ctx.stats.upsert(stats);

    await updateGauges();

    return stats;
  };

  const updateGauges = async () => {
    const ctx = getCtx();

    const stats = await ctx.stats.get('stats');

    if (!stats) {
      return;
    }

    R.toPairs(stats)
      .filter(([key]) => !['id', 'updated', 'search'].includes(key))
      .forEach(([key, value]) => {
        gauge.set({label: key}, value);
      });
  };

  return {
    recalculate,
    updateGauges,
  };
};
