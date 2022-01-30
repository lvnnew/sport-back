import {createContext} from '../adm/services/context';
import log from '../log';
import {join} from 'path';

const wrap = async () => {
  log.info('start');

  const ctx = await createContext();

  const needRunFile = process.argv.filter((arg) =>
    !arg.includes('/node_modules/ts-node/dist/bin') &&
    !arg.includes('/node_modules/.bin/ts-node') &&
    !arg.includes('src/init/wrap.ts'),
  );

  for (const file of needRunFile) {
    try {
      const path = join(process.cwd(), file);
      const res = await import(path);
      for (const [name, method] of Object.entries(res)) {
        if (typeof method === 'function') {
          try {
            await method(ctx);
          } catch (error: any) {
            log.error(`Method "${name || method?.name}" from file "${file}" run with error`);
            log.error(error);
          }
        }
      }
    } catch (error: any) {
      log.error(`Fail run file: ${file} ${error.toString()}`);
    }
  }

  await ctx.close();

  log.info('finish');

  process.exit();
};

wrap();
