import log from '../log';

type Callback = () => Promise<void> | void;
const callbacks = new Set<Callback>();

const errorTypes = ['unhandledRejection', 'uncaughtException'];
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

errorTypes.forEach(type => {
  process.on(type, async e => {
    try {
      log.error(e?.toString());

      const promises = [];

      for (const callback of callbacks) {
        promises.push(Promise.resolve(callback()));
      }

      await Promise.all(promises);

      process.exit(0);
    } catch {
      process.exit(1);
    }
  });
});

signalTraps.forEach(type => {
  process.once(type, async () => {
    try {
      const promises = [];

      for (const callback of callbacks) {
        promises.push(Promise.resolve(callback()));
      }

      await Promise.all(promises);
    } finally {
      process.kill(process.pid, type);
    }
  });
});

export const exitHook = (onExit: Callback) => {
  if (typeof onExit !== 'function') {
    throw new TypeError('onExit must be a function');
  }

  callbacks.add(onExit);
  return () => {
    callbacks.delete(onExit);
  };
};
