/* eslint-disable sort-keys-fix/sort-keys-fix */
import {getPrisma} from '../../prisma/prisma';
import {PrismaClient} from '@prisma/client';
import {getKnex} from '../../clients/knex';
import {Knex} from 'knex';
import {WorkerUtils} from 'graphile-worker';
import {getQueue} from '../../clients/queue/getQueue';
import {FilesService, getFilesService} from './FilesService/FilesService';
import {UsersService, getUsersService} from './UsersService/UsersService';
import {AdminsService, getAdminsService} from './AdminsService/AdminsService';
import {AppLoginsService, getAppLoginsService} from './AppLoginsService/AppLoginsService';
import {ManagersService, getManagersService} from './ManagersService/ManagersService';
import {ManagerLoginsService, getManagerLoginsService} from './ManagerLoginsService/ManagerLoginsService';
import {StatsService, getStatsService} from './StatsService/StatsService';
import {TagsService, getTagsService} from './TagsService/TagsService';
import {AdditionalServices, getAdditionalServices} from './AdditionalServices';

// DO NOT EDIT! THIS IS GENERATED FILE

export interface BaseServices {
  files: FilesService;
  users: UsersService;
  admins: AdminsService;
  appLogins: AppLoginsService;
  managers: ManagersService;
  managerLogins: ManagerLoginsService;
  stats: StatsService;
  tags: TagsService;
}

export type BaseContext = {
  prisma: PrismaClient;
  knex: Knex;
  worker: WorkerUtils;
  close: () => Promise<void>;
};

export type Context = BaseContext & BaseServices & AdditionalServices & {
  prisma: PrismaClient;
  knex: Knex;
  worker: WorkerUtils;
  close: () => Promise<void>;
  getUserId: () => number | null;
  getManagerId: () => number | null;
};

let baseContext: BaseContext | null = null;

export type GetCtx = () => Context;

let context: Context | null = null;

export const createBaseContext = async (): Promise<BaseContext> => {
  const prisma = await getPrisma();

  const knex = await getKnex();

  const worker = await getQueue();

  const close = async () => {
    await prisma.$disconnect();
    await knex.destroy();
  };

  return {
    prisma,
    knex,
    worker,
    close,
  };
};

export const createContext = (baseContext: BaseContext, getContext: () => Context): Context => {
  const baseServices: BaseServices = {
    files: getFilesService(getContext),
    users: getUsersService(getContext),
    admins: getAdminsService(getContext),
    appLogins: getAppLoginsService(getContext),
    managers: getManagersService(getContext),
    managerLogins: getManagerLoginsService(getContext),
    stats: getStatsService(getContext),
    tags: getTagsService(getContext),
  };

  const additionalServices = getAdditionalServices(getContext);

  const context = {
    ...baseContext,
    ...baseServices,
    ...additionalServices,

    getUserId: () => null,
    getManagerId: () => null,
  };

  return context;
};

export const createUserAwareContext = (context: Context, userId: number): Context => {
  const Context = {
    ...context,
    userId,
  };

  return Context;
};

export const getOrCreateBaseContext = async (): Promise<BaseContext> => {
  if (!baseContext) {
    baseContext = await createBaseContext();
  }

  return baseContext;
};

export const getOrCreateContext = async (): Promise<Context> => {
  if (!context) {
    const baseContext = await getOrCreateBaseContext();
    context = createContext(baseContext, getCtx);
  }

  return context;
};

export const getOrCreateUsersAwareContext = (
  baseContext: BaseContext,
  users: {
    userId?: number;
    managerId?: number;
  },
): Context => {
  const getUserId = () => users.userId || null;
  const getManagerId = () => users.managerId || null;

  const userAwareContextGetter = () => {
    const context = getCtx();

    return {
      ...context,
      getUserId,
      getManagerId,
    };
  };

  return {
    ...createContext(baseContext, userAwareContextGetter),
    getUserId,
    getManagerId,
  };
};

export const getCtx = (): Context => {
  if (!context) {
    throw new Error('Context is not initialised');
  }

  return context;
};

export const closeCtx = async () => {
  if (baseContext) {
    await baseContext.close();
  }
};
