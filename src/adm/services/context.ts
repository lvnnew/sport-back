import {getPrisma} from '../../clients/getPrisma';
import {PrismaClient} from '@prisma/client';
import {getKnex} from '../../clients/knex';
import {Knex} from 'knex';
import {getPostgres} from '../../clients/postgres';
import {Client} from 'pg';
import {WorkerUtils} from 'graphile-worker';
import {getQueue} from '../../clients/queue/getQueue';
import {AppLoginsService, getAppLoginsService} from './AppLoginsService/AppLoginsService';
import {AuditLogsService, getAuditLogsService} from './AuditLogsService/AuditLogsService';
import {DelegationsService, getDelegationsService} from './DelegationsService/DelegationsService';
import {FilesService, getFilesService} from './FilesService/FilesService';
import {LanguagesService, getLanguagesService} from './LanguagesService/LanguagesService';
import {ManagerLoginsService, getManagerLoginsService} from './ManagerLoginsService/ManagerLoginsService';
import {ManagersService, getManagersService} from './ManagersService/ManagersService';
import {ManagersToPermissionsService, getManagersToPermissionsService} from './ManagersToPermissionsService/ManagersToPermissionsService';
import {ManagersToRolesService, getManagersToRolesService} from './ManagersToRolesService/ManagersToRolesService';
import {PermissionsService, getPermissionsService} from './PermissionsService/PermissionsService';
import {RolesService, getRolesService} from './RolesService/RolesService';
import {RolesToPermissionsService, getRolesToPermissionsService} from './RolesToPermissionsService/RolesToPermissionsService';
import {StatsService, getStatsService} from './StatsService/StatsService';
import {TagsService, getTagsService} from './TagsService/TagsService';
import {UnitsService, getUnitsService} from './UnitsService/UnitsService';
import {UsersService, getUsersService} from './UsersService/UsersService';
import {AdditionalServices, getAdditionalServices} from './AdditionalServices';

// DO NOT EDIT! THIS IS GENERATED FILE

export interface BaseServices {
  appLogins: AppLoginsService;
  auditLogs: AuditLogsService;
  delegations: DelegationsService;
  files: FilesService;
  languages: LanguagesService;
  managerLogins: ManagerLoginsService;
  managers: ManagersService;
  managersToPermissions: ManagersToPermissionsService;
  managersToRoles: ManagersToRolesService;
  permissions: PermissionsService;
  roles: RolesService;
  rolesToPermissions: RolesToPermissionsService;
  stats: StatsService;
  tags: TagsService;
  units: UnitsService;
  users: UsersService;
}

export type Services = BaseServices & AdditionalServices;

export type BaseContext = {
  prisma: PrismaClient;
  knex: Knex;
  postgres: Client;
  worker: WorkerUtils;
  close: () => Promise<void>;
};

export type Context = BaseContext & Services & {
  getUserId: () => number | null;
  getManagerId: () => number | null;
  getManagerPermissions: () => string[];
};

let baseContext: BaseContext | null = null;

export type GetCtx = () => Context;

let context: Context | null = null;

export const createBaseContext = async (): Promise<BaseContext> => {
  const prisma = await getPrisma();

  const knex = await getKnex();

  const postgres = await getPostgres();

  const worker = await getQueue();

  const close = async () => {
    await prisma.$disconnect();
    await knex.destroy();
    await postgres.end();
  };

  return {
    prisma,
    knex,
    postgres,
    worker,
    close,
  };
};

export const getBaseServices = (getContext: () => Context): BaseServices => ({
  appLogins: getAppLoginsService(getContext),
  auditLogs: getAuditLogsService(getContext),
  delegations: getDelegationsService(getContext),
  files: getFilesService(getContext),
  languages: getLanguagesService(getContext),
  managerLogins: getManagerLoginsService(getContext),
  managers: getManagersService(getContext),
  managersToPermissions: getManagersToPermissionsService(getContext),
  managersToRoles: getManagersToRolesService(getContext),
  permissions: getPermissionsService(getContext),
  roles: getRolesService(getContext),
  rolesToPermissions: getRolesToPermissionsService(getContext),
  stats: getStatsService(getContext),
  tags: getTagsService(getContext),
  units: getUnitsService(getContext),
  users: getUsersService(getContext),
});

export const getServices = (getContext: () => Context): Services => ({
  ...getBaseServices(getContext),
  ...getAdditionalServices(getContext),
});

export const createContext = (baseContext: BaseContext, getContext: () => Context): Context => ({
  ...baseContext,
  ...getServices(getContext),

  getUserId: () => null,
  getManagerId: () => null,
  getManagerPermissions: () => [],
});

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

export const getCtx = (): Context => {
  if (!context) {
    throw new Error('Context is not initialised');
  }

  return context;
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
    managerPermissions?: string[];
  },
): Context => {
  const getUserId = () => users.userId || null;
  const getManagerId = () => users.managerId || null;
  const getManagerPermissions = () => users.managerPermissions || [];

  const userAwareContextGetter = () => {
    const context = getCtx();

    return {
      ...context,
      getUserId,
      getManagerId,
      getManagerPermissions,
    };
  };

  return {
    ...createContext(baseContext, userAwareContextGetter),
    getUserId,
    getManagerId,
    getManagerPermissions,
  };
};

export const closeCtx = async () => {
  if (baseContext) {
    await baseContext.close();
  }
};
