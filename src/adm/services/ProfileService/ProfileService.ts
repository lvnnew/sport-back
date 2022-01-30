import * as R from 'ramda';
import {PermissionsWithMeta} from '../../../generated/graphql';
import {KeyValuePair} from 'ramda';
import log from '../../../log';
import {PrismaClient} from '@prisma/client';
import {Context} from '../types';

export const BASE_MILES_TO_RECEIVE_FOR_FLIGHT = 1000;
export const BASE_MILES_TO_UPGRADE_CLASS = 1000;
export const BASE_MILES_TO_REWARD_FLIGHT = 1000;

export interface ProfileService {
  getPermissionsOfManager: (managerId: number) => Promise<string[]>;
  getManagerPermissions: () => Promise<string[]>;
  getPermissionsOfManagerWithMeta: (managerId: number) => Promise<PermissionsWithMeta[]>;
  getPermissionsWithMeta: () => Promise<PermissionsWithMeta[]>;

  getUserId: () => bigint | null,
  getManagerId: () => number | null,
  setUserId: (userId: bigint) => void,
  setManagerId: (managerId: number) => void,
}

export type UserData = {
  userId: bigint | null,
  managerId: number | null,
}

export const getProfileService = (ctx: Context): ProfileService => {
  let userId: bigint | null = null;
  let managerId: number | null = null;

  const getUserId = () => userId;
  const getManagerId = () => managerId;

  const setUserId = (newUserId: bigint) => {
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

    const fullAccessRoles = roles.filter(r => r.hasFullAccess);

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
    const permissions = await ctx.service('profile').getPermissionsOfManagerWithMeta(managerId);

    return R.uniq(permissions.map(el => el.permissionId));
  };

  const getManagerPermissions = async () => {
    log.info('getPermissions');
    // const managerId = ctx.service('profile').getManagerId();
    // const managerId = ctx.container.get('managerId') as number;
    // const managerId = getManagerId();

    if (!managerId) {
      log.error('getPermissions Current manager is unknown');
      throw new Error('getPermissions Current manager is unknown');
    }

    return getPermissionsOfManager(managerId);
  };

  const getPermissionsWithMeta = async () => {
    log.info('getPermissionsWithMeta');
    const managerId = getManagerId();

    if (!managerId) {
      throw new Error('getPermissionsWithMeta Current manager is unknown');
    }

    return getPermissionsOfManagerWithMeta(managerId);
  };

  return {
    getPermissionsOfManager,
    getPermissionsWithMeta,
    getPermissionsOfManagerWithMeta,
    getUserId,
    getManagerId,
    getManagerPermissions,
    setUserId,
    setManagerId,
  };
};
