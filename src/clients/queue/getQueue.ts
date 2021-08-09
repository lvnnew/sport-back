import {getConfig} from '../../config';
import {makeWorkerUtils, WorkerUtils} from 'graphile-worker';
import {addParamsToPgUri} from '../../utils/addParamsToPgUri';

// DO NOT EDIT! THIS IS GENERATED FILE

let queue: WorkerUtils | null = null;

export const getQueue = async (appName = 'someBack_Queue') => {
  if (!queue) {
    const config = await getConfig();
    const url = addParamsToPgUri(config.pgUri, {
      application_name: appName,
      ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
    });

    queue = await makeWorkerUtils({
      connectionString: url,
    });
  }

  return queue;
};
