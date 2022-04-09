import express, {Router, Request, Response} from 'express';
import expressRateLimit from 'express-rate-limit';
import {createContext} from '../adm/services/context';
import log from '../log';

const rateLimitWindow = 5;
const rateLimitPerIp = 10;
const limiter = expressRateLimit({
  windowMs: rateLimitWindow * 1000, // 5 sec
  max: rateLimitWindow * rateLimitPerIp, // Limit each IP to 25 requests per 'window' (here, per 5 sec)
  standardHeaders: true, // Return rate limit info in the 'RateLimit-*' headers
  legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
});

const healthRouter: Router = express.Router();

healthRouter.use(limiter);

healthRouter.get('/', async (req: Request, res: Response) => {
  const startDate = Date.now();
  log.info(`health, type: "${req.query.type}", remote id: "${req.headers['x-real-ip'] || req.connection.remoteAddress}"`);
  const ctx = await createContext();

  // check by Knex
  const knexResult = await ctx.knex.raw('SELECT 1 as check');
  // log.info('knexResult');
  // log.info(JSON.stringify(knexResult.rows[0].check));
  if (!knexResult || !knexResult.rows || knexResult.rows.length !== 1 || knexResult.rows[0].check !== 1) {
    log.error('Can not request bd by knex');
    res
      .status(500)
      .send({message: 'Can not request bd by knex'});
    return;
  }

  // check by prisma
  const prismaResult = await ctx.prisma.manager.count();
  // log.info('prismaResult');
  // log.info(`prismaResult: ${prismaResult}`);
  if (!(prismaResult >= 0)) {
    log.error('Can not request bd by prisma');
    res
      .status(500)
      .send({message: 'Can not request bd by prisma'});
    return;
  }

  log.info(`Health check finshed in ${(Date.now() - startDate) / 1000} sec`);

  res
    .status(200)
    .send({message: 'Ok'});
});

export default healthRouter;
