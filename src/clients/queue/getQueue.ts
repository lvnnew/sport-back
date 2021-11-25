import {getConfig} from '../../config';
import {makeWorkerUtils, WorkerUtils} from 'graphile-worker';
import log from '../../log';
import {addParamsToDatabaseUri} from '../../utils/addParamsToPgUri';

// DO NOT EDIT! THIS IS GENERATED FILE

let queue: WorkerUtils | null = null;

export const getQueue = async (appName = 'someBack_Queue') => {
  if (!queue) {
    const config = await getConfig();

    log.info(appName, typeof addParamsToDatabaseUri);

    // const url = addParamsToDatabaseUri(config.databaseUri, {
    //   application_name: appName,
    //   ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
    // });

    const url = config.databaseUri;

    queue = await makeWorkerUtils({
      connectionString: url,
    });
  }

  return queue;
};
