import Entity from '../../types/Entity';
import {getElastic, getFullIndexName} from '../../clients/elastic';
import log from '../../log';
import {jobs} from './jobs';

export const bootstrap = async (deleteAllAtServer = false) => {
  const elastic = await getElastic();

  const elasticClient = elastic.client;

  for (const [job, properties] of Object.entries(jobs)) {
    const index = await getFullIndexName(job as Entity);

    log.info(`index: ${index}`);
    let indexExist = await elasticClient.indices.exists({index});

    if (deleteAllAtServer && indexExist) {
      await elasticClient.indices.delete({index});
      indexExist = false;
    }

    if (indexExist) {
      log.info(`index ${index} is exist, so skipping bootstrapping`);
    } else {
      await elasticClient.indices.create({index});

      await elasticClient.indices.putMapping({
        index,
        body: {
          properties,
        },
      })
        .then((arg1) => {
          log.info(JSON.stringify(arg1));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
  }
};
