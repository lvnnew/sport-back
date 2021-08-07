import {getOrCreateContext} from '../adm/services/context';
import {log} from '../log';
import {getQueue} from '../clients/queue/getQueue';
import {join} from 'path';

const wrap = async () => {
  log.info('start');

  const queue = await getQueue();
  await queue.migrate();

  const ctx = await getOrCreateContext();

  const needRunFile = process.argv.filter((arg) => !~arg.indexOf('/node_modules/.bin/ts-node') && !~arg.indexOf('src/init/wrap.ts'));

  for (const file of needRunFile) {
    try {
      const res = await import(join(process.cwd(), file));
      for (const [name, method] of Object.entries(res)) {
        if (typeof method === 'function') {
          try {
            await method(ctx);
          } catch (error) {
            log.error(`Method "${name || method?.name}" from file "${file}" run with error`);
            log.error(error);
          }
        }
      }
    } catch (error) {
      log.error(`Fail run file: ${file} ${error.toString()}`);
    }
  }

  await ctx.close();

  log.info('finish');

  process.exit();
};

wrap();
