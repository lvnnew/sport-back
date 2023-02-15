import Graceful, {GracefulListener} from 'node-graceful';
import log from '../log';

Graceful.captureRejections = true;
Graceful.captureExceptions = true;
Graceful.exitOnDouble = false;

Graceful.on('exit', (event, error) => {
  log.info(`Exit with event: ${event}`);
  if (error) {
    log.error(error);
  }
});

export const exitHook = (onExit: GracefulListener) => Graceful.on('exit', onExit);
