import log from '../../../log';
import {getQueue} from '../getQueue';

export type SendEmailLocals = Record<string, any>;

export const addRecalcPassengerAggregationsJob = async (passengerId: number) => {
  log.info('recalcPassengerAggregations');
  const queue = await getQueue();

  await queue.addJob(
    'recalcPassengerAggregations',
    {
      passengerId,
    },
  );
};
