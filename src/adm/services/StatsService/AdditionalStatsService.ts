import {StatsService} from './StatsService';
import {MutationUpdateStatArgs} from '../../../generated/graphql';
import {Gauge} from 'prom-client';
import * as R from 'ramda';

const gauge = new Gauge({
  name: 'stats_gauge',
  help: 'stats_gauge',
  labelNames: ['label'],
});

export class AdditionalStatsService extends StatsService {
  async updateGauges() {
    const stats = await this.ctx.service('stats').get('stats');

    if (!stats) {
      return;
    }

    R.toPairs(stats)
      .filter(([key]) => !['id', 'updated', 'search'].includes(key))
      .forEach(([key, value]) => {
        gauge.set({label: key}, value || 0);
      });
  }

  async recalculate() {
    const stats: MutationUpdateStatArgs = {
      id: 'stats',
      updated: new Date(),
      helloCount: 0,
    };

    await this.ctx.service('stats').upsert(stats);

    await this.updateGauges();

    return stats;
  }
}
