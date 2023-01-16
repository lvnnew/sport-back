import log from '../log';
import bootstrapKafkaWorkers from './bootstrapKafkaWorkers';
import {Context} from '../adm/services/types';
import initPgParsers from './initPgParsers';
import initBigIntSerialization from './initBigIntSerialization';
import initRoles from '../init/permissions/initRoles';

// Runs on any start of the system: as api backend, as worker, as cli-command, etc.
export const onStart = async (ctx?: Context) => {
  log.info('onStart');

  initPgParsers();
  initBigIntSerialization();

  if (ctx) {
    log.info('bootstrapping');

    // todo: move to deployment script
    await bootstrapKafkaWorkers(ctx);

    await initRoles(ctx);
  }
};
