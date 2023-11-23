/* eslint-disable no-constructor-return */
import {v4 as uuidv4} from 'uuid';
import log from '../log';
import {
  ClientAfterRequestArgs,
  ClientBeforeRequestArgs,
  ClientOnErrorArgs,
} from './hooksTypes';
import {Context} from '../adm/services/types';

class IntegrationClient {
  protected ctx: Context;

  constructor(ctx: Context) {
    this.ctx = ctx;

    return new Proxy(this, {
      get(target, key) {
        const origMethod = target[key];

        log.info(`target: ${target}, key: ${key.toString()}`);

        if (typeof origMethod === 'function') {
          return async function (...args: any[]) {
            if (args[0] === 3) {
              return '3 is unlucky, you didn\'t go anywhere.';
            }

            const requestId = uuidv4();
            log.info(`requestId: ${requestId}`);

            const start = Date.now();

            try {
              await target.beforeRequest({
                requestId,
                methodName: key.toString(),
                args,
              });

              // origMethod.apply(target, args)
              const result = await origMethod.apply(target, args);

              const milliseconds = Date.now() - start;

              await target.afterRequest({
                requestId,
                methodName: key.toString(),
                args,
                result,
                milliseconds,
              });

              return result;
            } catch (error: any) {
              log.error(error);

              const milliseconds = Date.now() - start;

              await target.onError({
                requestId,
                methodName: key.toString(),
                args,
                milliseconds,
                error,
              });

              throw error;
            }

            //

            // await target.beforeRequest({} as any);

            // const result = origMethod.apply(target, args);

            // return result;
          };
        } else {
          return origMethod;
        }
      },
    });
  }

  protected async beforeRequest(_args: ClientBeforeRequestArgs) {}

  protected async afterRequest(_args: ClientAfterRequestArgs) {}

  protected async onError(_args: ClientOnErrorArgs) {}
}

export default IntegrationClient;
