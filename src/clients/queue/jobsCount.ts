import {Context} from '../../adm/services/types';
import {Job} from './Job';

export const jobsCount = async (ctx: Context, taskIdentifier: Job): Promise<number> => {
  const res = await ctx.knex
    .withSchema('graphile_worker')
    .table('jobs')
    .where('task_identifier', taskIdentifier)
    .whereRaw('attempts < max_attempts')
    .count('id');

  return Number.parseInt((res[0] as any).count, 10);
};
