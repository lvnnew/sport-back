import {Context} from '../../adm/services/types';

export const jobsCountGroupedByIdentifier = async (ctx: Context): Promise<number> => {
  const res = await ctx.knex
    .withSchema('graphile_worker')
    .table('jobs')
    .groupBy('task_identifier')
    .count('id')
    .select(ctx.knex.ref('task_identifier').as('id'));

  return (res as any).map((el: any) => ({
    ...el,
    count: Number.parseInt(el.count, 10),
  }));
};
