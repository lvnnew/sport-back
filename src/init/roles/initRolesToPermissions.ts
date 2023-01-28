import {Context} from '../../adm/services/types';
import {Role} from '../../types/enums';
import {getRuntimePermissions} from '../../adm/services/getRuntimePermissions';
import log from '../../log';

const initRolesToPermissions = async (ctx: Context) => {
  log.info('initRolesToPermissions started');
  const startedAt = Date.now();

  log.info(`initRolesToPermissions finished, took: ${Math.ceil((Date.now() - startedAt) / 1000)} sec`);
};

export default initRolesToPermissions;
