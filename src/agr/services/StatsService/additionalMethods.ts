/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {AgrContext} from '../context';
import {BaseStatsMethods} from './StatsService';
import {log} from '../../../log';
import {MutationUpdateStatArgs} from '../../../generated/graphql';

export interface AdditionalStatsMethods {
  recalculate: () => Promise<void>;
}

export const getAdditionalMethods = (getCtx: () => AgrContext, _baseMethods: BaseStatsMethods): AdditionalStatsMethods => {
  const recalculate = async () => {
    const ctx = getCtx();

    const stats: MutationUpdateStatArgs = {
      id: 'stats',
      updated: new Date(),
      helloCount: 0,
    };

    await ctx.stats.upsert(stats);

    log.info(stats);
  };

  return {
    recalculate,
  };
};
