import log from '../../log';
import defaultContainer from './defaultContainer';
import {getProfileService, ProfileService, UserData} from './ProfileService/ProfileService';
import {interfaces} from 'inversify/lib/interfaces/interfaces';
import serviceConstrictors from './serviceConstrictors';
import {Context, Services} from './types';
import * as R from 'ramda';
import {onStart} from '../../systemHooks';

export const createContext = async (container: interfaces.Container = defaultContainer): Promise<Context> => {
  const close = async () => {
    await Promise.all([
      container.unbindAsync('Prisma'),
      container.unbindAsync('Knex'),
      container.unbindAsync('Postgres'),
    ]);
  };

  const context: Context = {
    prisma: await container.getAsync('Prisma'),
    knex: await container.getAsync('Knex'),
    postgres: await container.getAsync('Postgres'),
    worker: await container.getAsync('Queue'),
    log,
    close,
    service: (name: keyof Services) => container.get(name),
    container,
  };

  const pairs = R.toPairs(serviceConstrictors);

  for (const [name, constructor] of pairs) {
    if (!container.isBound(name)) {
      container.bind(name)
        .toConstantValue(constructor(context));
    }
  }

  onStart();

  return context;
};

export const createUserAwareContext = (context: Context, userId: number): Context => {
  const Context = {
    ...context,
    userId,
  };

  return Context;
};

export const сreateUsersAwareContext = async (
  {userId, managerId}: UserData,
  container: interfaces.Container = defaultContainer,
): Promise<Context> => {
  const child = container.createChild();

  const created = await createContext(child);

  const profile = getProfileService(created);

  if (userId) {
    profile.setUserId(userId);
  }

  if (managerId) {
    profile.setManagerId(managerId);
  }

  child.bind<ProfileService>('profile')
    .toConstantValue(profile);

  return {
    ...created,
    container: child,
  };
};
