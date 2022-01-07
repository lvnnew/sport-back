import {closeCtx} from '../adm/services/context';
import log from '../log';

export default async () => {
  log.info('!!!!!!!!!!!!!! runAfterAllTests !!!!!!!!!!!!!!!!');
  await closeCtx();
};
