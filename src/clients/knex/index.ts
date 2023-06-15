import {getConfig} from '../../config';
import {getKnexByUri} from './getKnexByUri';

export const getKnex = async () => {
  const {databaseMainWriteUri} = await getConfig();

  return getKnexByUri(databaseMainWriteUri);
};
