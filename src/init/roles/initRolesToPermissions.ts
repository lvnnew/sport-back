import {Context} from '../../adm/services/types';
import log from '../../log';

const initRolesToPermissions = async (_ctx: Context) => {
  log.info('initRolesToPermissions started');
  const startedAt = Date.now();

  log.info(`initRolesToPermissions finished, took: ${Math.ceil((Date.now() - startedAt) / 1000)} sec`);
};

export default initRolesToPermissions;
