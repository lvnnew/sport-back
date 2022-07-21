import * as R from 'ramda';
import LRUCache from 'lru-cache';
import {
  PermissionsWithMeta,
  MutationChangePasswordArgs,
} from '../../../generated/graphql';
import {KeyValuePair} from 'ramda';
import log from '../../../log';
import {PrismaClient} from '@prisma/client';
import {Context} from '../types';

export const BASE_MILES_TO_RECEIVE_FOR_FLIGHT = 1000;
export const BASE_MILES_TO_UPGRADE_CLASS = 1000;
export const BASE_MILES_TO_REWARD_FLIGHT = 1000;

export interface ProfileService {
  getPermissionsOfManager: (managerId: number) => Promise<string[]>;
  getPermissions: () => Promise<string[]>;
  getPermissionsOfManagerWithMeta: (managerId: number) => Promise<PermissionsWithMeta[]>;
  getPermissionsWithMeta: () => Promise<PermissionsWithMeta[]>;

  changePassword: (params: MutationChangePasswordArgs) => Promise<void>;

  getUserId: () => number | null,
  getManagerId: () => number | null,
  setUserId: (userId: number) => void,
  setManagerId: (managerId: number) => void,
  getAllowedTenantIdsOfManager: (managerId: number) => Promise<number[]>;
  getAllowedTenantIdsOfUser: (userId: number) => Promise<number[]>;
  getAllowedTenantIds: () => Promise<number[]>;
  getRequiredTenantId: () => Promise<number>;
  getTenantId: () => Promise<number | null>;
}

export type UserData = {
  userId: number | null,
  managerId: number | null,
}

const opt = {
  max: 500,
  ttl: 1000 * 60, // 1 min
};
const managersTenantIdsCache = new LRUCache(opt);
const managersPermissionsCache = new LRUCache(opt);
const usersTenantIdsCache = new LRUCache(opt);

export const getProfileService = (ctx: Context): ProfileService => {
  let userId: number | null = null;
  let managerId: number | null = null;

  const getUserId = () => userId;
  const getManagerId = () => managerId;

  const setUserId = (newUserId: number) => {
    userId = newUserId;
  };

  const setManagerId = (newManagerId: number) => {
    managerId = newManagerId;
  };

  const getPermissionsOfManagerWithMeta = async (managerId: number) => {
    const prisma = await ctx.container.getAsync('Prisma') as PrismaClient;

    const rawPermissions = await prisma.managersToRole.findMany({
      where: {
        managerId,
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

    const permissionsFullAccessRoles = fullAccessRoles.length > 0 ? (await ctx.service('permissions').all()).map(p => p.id) : [];

    const managersToPermissions = await ctx.service('managersToPermissions').all({filter: {managerId}});
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

  const getPermissionsOfManager = async (managerId: number) => {
    if (!managerId) {
      return [];
    }

    if (!managersPermissionsCache.has(managerId)) {
      const permissions = await ctx.service('profile').getPermissionsOfManagerWithMeta(managerId);

      managersPermissionsCache.set(managerId, R.uniq(permissions.map(el => el.permissionId)));
    }

    return managersPermissionsCache.get(managerId);
  };

  const getPermissions = async () => {
    if (!managerId) {
      log.error('getPermissions Current manager is unknown');
      throw new Error('getPermissions Current manager is unknown');
    }

    return getPermissionsOfManager(managerId);
  };

  const getPermissionsWithMeta = async () => {
    const managerId = getManagerId();

    if (!managerId) {
      throw new Error('getPermissionsWithMeta Current manager is unknown');
    }

    return getPermissionsOfManagerWithMeta(managerId);
  };

  const getAllowedTenantIdsOfManager = async (managerId: number): Promise<number[]> => {
    if (!managerId) {
      return [];
    }

    if (!managersTenantIdsCache.has(managerId)) {
      let tenantIds: number[] = [];
      const manager = await ctx.prisma.manager.findFirst({where: {id: managerId}});
      if (manager && manager.tenantId) {
        tenantIds = [manager.tenantId];
      }

      managersTenantIdsCache.set(managerId, tenantIds);
    }

    return managersTenantIdsCache.get(managerId);
  };

  const getAllowedTenantIdsOfUser = async (userId: number): Promise<number[]> => {
    if (!userId) {
      return [];
    }

    if (!usersTenantIdsCache.has(userId)) {
      let tenantIds: number[] = [];
      const user = await ctx.prisma.user.findFirst({where: {id: userId}});
      if (user && user.tenantId) {
        tenantIds = [user.tenantId];
      }

      usersTenantIdsCache.set(userId, tenantIds);
    }

    return usersTenantIdsCache.get(userId);
  };

  const getAllowedTenantIds = async (): Promise<number[]> => {
    const managerId = getManagerId();
    let res: number[] = [];
    if (managerId) {
      res = await getAllowedTenantIdsOfManager(managerId);
    } else {
      const userId = getUserId();
      if (userId) {
        res = await getAllowedTenantIdsOfUser(userId);
      }
    }

    return res;
  };

  const getRequiredTenantId = async (): Promise<number> => {
    const allowed = await getAllowedTenantIds();

    if (!allowed.length) {
      throw new Error('There is no allowed tenants. Imposible to provide any.');
    }

    if (allowed.length > 1) {
      throw new Error(`There is more then 1 tenant (${allowed.length}). Imposible to pick one.`);
    }

    return allowed[0];
  };

  const getTenantId = async (): Promise<number> => {
    const allowed = await getAllowedTenantIds();

    return allowed[0];
  };

  const changePassword = async ({
    password,
  }: MutationChangePasswordArgs) => {
    const managerId = getManagerId();
    if (!managerId) {
      throw new Error('No managers found.');
    }

    return ctx.service('managers').changePasswordByManagerId({password, managerId});
  };

  return {
    getPermissionsOfManager,
    getPermissionsWithMeta,
    getPermissionsOfManagerWithMeta,
    changePassword,
    getUserId,
    getManagerId,
    getPermissions,
    setUserId,
    setManagerId,
    getAllowedTenantIdsOfManager,
    getAllowedTenantIdsOfUser,
    getAllowedTenantIds,
    getRequiredTenantId,
    getTenantId,
  };
};
