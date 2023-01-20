import {RequestHandler} from 'express';
import {collectDefaultMetrics, register} from 'prom-client';
import {Context} from '../adm/services/types';

collectDefaultMetrics();

const getMetricsHandler = (ctx: Context): RequestHandler => async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    const prismaMetrics = await ctx.prisma.$metrics.prometheus({
      globalLabels: {sqlClient: 'prisma'},
    });
    const appMetrics = await register.metrics();
    res.end('\n' + prismaMetrics + appMetrics);
  } catch (error: any) {
    res.status(500).end(error);
  }
};

export default getMetricsHandler;
