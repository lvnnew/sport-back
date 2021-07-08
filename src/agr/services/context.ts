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
import {ManagerLoginsService, getManagerLoginsService} from './ManagerLoginsService/ManagerLoginsService';
import {StatsService, getStatsService} from './StatsService/StatsService';
import {TagsService, getTagsService} from './TagsService/TagsService';
import {AdditionalServices, getAdditionalServices} from './AdditionalServices';

// DO NOT EDIT! THIS IS GENERATED FILE

export interface BaseServices {
  prisma: PrismaClient;
  knex: Knex;
  worker: WorkerUtils;
  files: FilesService;
  users: UsersService;
  admins: AdminsService;
  appLogins: AppLoginsService;
  managerLogins: ManagerLoginsService;
  stats: StatsService;
  tags: TagsService;
  close: () => Promise<void>;
}

export type AgrContext = BaseServices & AdditionalServices;

let context: AgrContext | null = null;

export const createAgrContext = async () => {
  const prisma = await getPrisma();

  const knex = await getKnex();

  const worker = await getQueue();

  const close = async () => {
    await prisma.$disconnect();
    await knex.destroy();

    // context = null;
  };

  const baseServices: BaseServices = {
    prisma,
    knex,
    worker,

    files: getFilesService(getCtx),
    users: getUsersService(getCtx),
    admins: getAdminsService(getCtx),
    appLogins: getAppLoginsService(getCtx),
    managerLogins: getManagerLoginsService(getCtx),
    stats: getStatsService(getCtx),
    tags: getTagsService(getCtx),

    close,
  };

  const additionalServices = getAdditionalServices(getCtx);

  context = {
    ...baseServices,
    ...additionalServices,
  };

  return context;
};

export const getAgrContext = async (): Promise<AgrContext> => {
  if (!context) {
    context = await createAgrContext();
  }

  return context;
};

export const getCtx = (): AgrContext => {
  if (!context) {
    throw new Error('Context is not initialised');
  }

  return context;
};

export const closeCtx = async () => {
  if (context) {
    await context.close();
  }
};
