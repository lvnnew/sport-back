/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {AgrContext} from '../context';
import {BaseStatsMethods} from './StatsService';
import {log} from '../../../log';
import {MutationUpdateStatArgs} from '../../../generated/graphql';
import {Gauge} from 'prom-client';
import R from 'ramda';

export interface AdditionalStatsMethods {
  recalculate: () => Promise<Stat>;
}

const gauge = new Gauge({
  name: 'stats_gauge',
  help: 'stats_gauge',
  labelNames: ['label'],
});

export const getAdditionalMethods = (getCtx: () => AgrContext, _baseMethods: BaseStatsMethods): AdditionalStatsMethods => {
  const recalculate = async () => {
    const ctx = getCtx();

    const stats: MutationUpdateStatArgs = {
      id: 'stats',
      updated: new Date(),
      helloCount: 0,
    };

    await ctx.stats.upsert(stats);

    R.toPairs(stats)
      .filter(([key]) => key !== 'id' && key !== 'updated')
      .forEach(([key, value]) => {
        gauge.set({label: key}, value);
      });

    log.info(stats);

    return stats;
  };

  return {
    recalculate,
  };
};
