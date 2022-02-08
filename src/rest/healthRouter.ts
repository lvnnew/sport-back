import express, {Router, Request, Response} from 'express';
import expressRateLimit from 'express-rate-limit';
import {createContext} from '../adm/services/context';
import log from '../log';

const limiter = expressRateLimit({
  windowMs: 5 * 1000, // 5 sec
  max: 5 * 5, // Limit each IP to 25 requests per 'window' (here, per 5 sec)
  standardHeaders: true, // Return rate limit info in the 'RateLimit-*' headers
  legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
});

const healthRouter: Router = express.Router();

healthRouter.use(limiter);

healthRouter.get('/', async (_: Request, res: Response) => {
  const ctx = await createContext();

  // check by Knex
  const knexResult = await ctx.knex.raw('SELECT 1 as check');
  log.info('knexResult');
  log.info(JSON.stringify(knexResult.rows[0].check));
  if (!knexResult || !knexResult.rows || knexResult.rows.length !== 1 || knexResult.rows[0].check !== 1) {
    res
      .status(500)
      .send({message: 'Can not request bd by knex'});
    return;
  }

  res
    .status(200)
    .send({message: 'Ok'});
});

export default healthRouter;
