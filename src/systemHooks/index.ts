import log from '../log';
import bootstrapKafkaWorkers from './bootstrapKafkaWorkers';
import {Context} from '../adm/services/types';
import initPgParsers from './initPgParsers';
import initBigIntSerialization from './initBigIntSerialization';
import initRolesWithPermissions from '../init/roles/initRolesWithPermissions';
import {getConfig} from '../config';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

// Runs on any start of the system: as api backend, as worker, as cli-command, etc.
export const onStart = async (ctx?: Context) => {
  log.info('onStart');

  initPgParsers();
  initBigIntSerialization();

  dayjs.extend(utc);

  if (ctx) {
    log.info('bootstrapping');

    const {bootstrapEnabled} = await getConfig();
    if (bootstrapEnabled) {
      // todo: move to deployment script
      await bootstrapKafkaWorkers(ctx);

      await initRolesWithPermissions(ctx);
    } else {
      log.info('Bootstrap is not enabled, skipping');
    }
  }
};
