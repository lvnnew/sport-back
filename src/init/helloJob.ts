import {log} from '../log';
import {generalJobsByQueue} from '../workers/generalJobs';

// yarn ts-node src/cli/helloJob.ts

const app = async () => {
  log.info('start');

  await generalJobsByQueue.hello({name: 'Test Name'});

  log.info('finish');
};

app();
