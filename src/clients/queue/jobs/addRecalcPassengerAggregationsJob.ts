import log from '../../../log';
import getQueue from '../getQueue';

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
