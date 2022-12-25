import Graceful, {GracefulListener} from 'node-graceful';

Graceful.captureRejections = true;
Graceful.captureExceptions = true;
Graceful.exitOnDouble = false;

export const exitHook = (onExit: GracefulListener) => Graceful.on('exit', onExit);
