import * as R from 'ramda';
import LRUCache from 'lru-cache';
import {
  Manager,
  MutationChangePasswordArgs,
} from '../../../generated/graphql';
import {KeyValuePair} from 'ramda';
import log from '../../../log';
import {Context} from '../types';

// export const BASE_MILES_TO_RECEIVE_FOR_FLIGHT = 1000;
// export const BASE_MILES_TO_UPGRADE_CLASS = 1000;
// export const BASE_MILES_TO_REWARD_FLIGHT = 1000;

// export interface BaseProfileService {
//   getPermissionsOfManager: (managerId: number) => Promise<string[]>;
//   getPermissions: () => Promise<string[]>;
//   getPermissionsOfManagerWithMeta: (managerId: number) => Promise<PermissionsWithMeta[]>;
//   getPermissionsWithMeta: () => Promise<PermissionsWithMeta[]>;
//   getRolesOfManager: (managerId: number) => Promise<string[]>;
//   getRoles: () => Promise<string[]>;

//   changePassword: (params: MutationChangePasswordArgs) => Promise<void>;

//   getUserId: () => number | null,
//   getManagerId: () => number | null,
//   setUserId: (userId: number) => void,
//   setManagerId: (managerId: number) => void,

//   // getLoginByEmail(email: string) => Promise<>;
// }

export type UserData = {
  userId: number | null,
  managerId: number | null,
  managerLogin: string | null,
  ip: string | null,
}

const opt = {
  max: 500,
  ttl: 1000 * 60, // 1 min
};
const managersTenantIdsCache = new LRUCache(opt);
const managersPermissionsCache = new LRUCache(opt);
const managerCache = new LRUCache(opt);
const usersTenantIdsCache = new LRUCache(opt);

class BaseProfileService {
  userId: number | null = null;
  managerId: number | null = null;
  managerLogin: string | null = null;
  ip: string | null = null;

  constructor(protected ctx: Context) {}

  getUserId = () => this.userId;
  getManagerId = () => this.managerId;

  getManagerLogin = () => this.managerLogin;

  setUserId = (newUserId: number) => {
    this.userId = newUserId;
  };

  setManagerId = (newManagerId: number) => {
    this.managerId = newManagerId;
  };

  setManagerLogin = (login: string) => {
    this.managerLogin = login;
  };

  getIp = () => this.ip;

  setIp = (newIp: string) => {
    this.ip = newIp;
  };

  getPermissionsOfManagerWithMeta = async (managerId: number) => {
    const rawPermissions = await this.ctx.prisma.managersToRole.findMany({
      where: {
        managerId,
        OR: [
          {
            expiresAt: {
              gt: new Date(),
            },
          },
          {
            expiresAt: null,
          },
        ],
      },
      include: {
        role: {
          include: {
            rolesToPermissionRoles: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    });

    const roles = rawPermissions
      .map(m => m.role);

    const fullAccessRoles = roles.filter(r => r.hasAllPermissions);

    const permissionsByRoles = R.flatten(
      rawPermissions
        .map(m => m.role)
        .map(
          r => r.rolesToPermissionRoles.map(m => m.permissionId),
        ),
    );

    const permissionsFullAccessRoles = fullAccessRoles.length > 0 ? (await this.ctx.service('permissions').all()).map(p => p.id) : [];

    const managersToPermissions = await this.ctx.service('managersToPermissions').all({filter: {managerId}});
    const permissionsWithoutRoles = managersToPermissions.map(el => el.permissionId);

    const permissions = R.uniq(
      [
        ...permissionsByRoles,
        ...permissionsWithoutRoles,
        ...permissionsFullAccessRoles,
      ],
    );

    const permissionsPairs: Array<KeyValuePair<string, string[]>> = permissions.map(permission => [permission, [] as string[]]);
    const permissionsWithMeta = R.fromPairs(permissionsPairs);

    rawPermissions
      .forEach(rawPermission =>
        rawPermission.role.rolesToPermissionRoles.forEach(link => {
          permissionsWithMeta[link.permissionId] = R.uniq([
            ...permissionsWithMeta[link.permissionId],
            link.roleId,
          ]);
        }),
      );

    const permissionsToPairs = R.toPairs(permissionsWithMeta);

    return permissionsToPairs.map(permissionsToPair => ({
      permissionId: permissionsToPair[0],
      byRoles: permissionsToPair[1],
      byFullAccessRoles: fullAccessRoles.map(r => r.id),
      directly: Boolean(permissionsWithoutRoles.includes(permissionsToPair[0])),
    }));
  };

  getPermissionsOfManager = async(managerId: number): Promise<string[]> => {
    if (!managerId) {
      return [];
    }

    if (!managersPermissionsCache.has(managerId)) {
      const permissions = await this.getPermissionsOfManagerWithMeta(managerId);

      managersPermissionsCache.set(managerId, R.uniq(permissions.map(el => el.permissionId)));
    }

    return managersPermissionsCache.get(managerId) as string[];
  };

  getPermissions = async() => {
    if (!this.managerId) {
      log.error('getPermissions Current manager is unknown');
      throw new Error('getPermissions Current manager is unknown');
    }

    return this.getPermissionsOfManager(this.managerId);
  };

  getPermissionsWithMeta = async() => {
    const managerId = this.getManagerId();

    if (!managerId) {
      throw new Error('getPermissionsWithMeta Current manager is unknown');
    }

    return this.getPermissionsOfManagerWithMeta(managerId);
  };

  getAllowedTenantIdsOfManager = async (managerId: number): Promise<number[]> => {
    if (!managerId) {
      return [];
    }

    if (!managersTenantIdsCache.has(managerId)) {
      let tenantIds: number[] = [];
      const manager = await this.ctx.prisma.manager.findFirst({where: {id: managerId}});
      if (manager && manager.tenantId) {
        tenantIds = [manager.tenantId];
      }

      managersTenantIdsCache.set(managerId, tenantIds);
    }

    return managersTenantIdsCache.get(managerId) as number[];
  };

  getAllowedTenantIdsOfUser = async (userId: number): Promise<number[]> => {
    if (!userId) {
      return [];
    }

    if (!usersTenantIdsCache.has(userId)) {
      let tenantIds: number[] = [];
      const user = await this.ctx.prisma.user.findFirst({where: {id: userId}});
      if (user && user.tenantId) {
        tenantIds = [user.tenantId];
      }

      usersTenantIdsCache.set(userId, tenantIds);
    }

    return usersTenantIdsCache.get(userId) as number[];
  };

  getAllowedTenantIds = async () => {
    const managerId = this.getManagerId();
    let res: number[] = [];
    if (managerId) {
      res = await this.getAllowedTenantIdsOfManager(managerId);
    } else {
      const userId = this.getUserId();
      if (userId) {
        res = await this.getAllowedTenantIdsOfUser(userId);
      }
    }

    return res;
  };

  getRequiredTenantId = async () => {
    const allowed = await this.getAllowedTenantIds();

    if (!allowed.length) {
      throw new Error('There is no allowed tenants. Imposible to provide any.');
    }

    if (allowed.length > 1) {
      throw new Error(`There is more then 1 tenant (${allowed.length}). Imposible to pick one.`);
    }

    return allowed[0];
  };

  getTenantId = async () => {
    const allowed = await this.getAllowedTenantIds();

    return allowed[0];
  };

  getRolesOfManager = async(managerId: number) => {
    const rawPermissions = await this.ctx.prisma.managersToRole.findMany({
      where: {
        managerId,
      },
      select: {
        roleId: true,
      },
    });

    return rawPermissions.map(el => el.roleId);
  };

  getRoles = async () => {
    if (!this.managerId) {
      log.error('getPermissions Current manager is unknown');
      throw new Error('getPermissions Current manager is unknown');
    }

    return this.getRolesOfManager(this.managerId);
  };

  changePassword = async({
    password,
  }: MutationChangePasswordArgs) => {
    const managerId = this.getManagerId();
    if (!managerId) {
      throw new Error('No managers found.');
    }

    return this.ctx.service('managers').changePasswordByManagerId({password, managerId});
  };

  getManagerById = async (managerId: number) => {
    log.info('getManagerById');

    if (!managerId) {
      return null;
    }

    if (!managerCache.has(managerId)) {
      const manager = await this.ctx.service('managers').getRequired(managerId);

      managerCache.set(managerId, manager);
    }

    return managerCache.get(managerId) as Manager;
  };

  getManager = async () => {
    log.info('getManager');
    const managerId = await this.getManagerId();

    if (!managerId) {
      // log.error('getManager Current manager is unknown');
      // throw new Error('getManager Current manager is unknown');
      return null;
    }

    return this.getManagerById(managerId);
  };
}

export default BaseProfileService;
