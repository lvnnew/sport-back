import * as R from 'ramda';
import {Context} from '../context';

import {PermissionsWithMeta} from '../../../generated/graphql';
import {KeyValuePair} from 'ramda';

export const BASE_MILES_TO_RECEIVE_FOR_FLIGHT = 1000;
export const BASE_MILES_TO_UPGRADE_CLASS = 1000;
export const BASE_MILES_TO_REWARD_FLIGHT = 1000;

export interface ProfileService {
  getPermissionsOfManager: (managerId: number) => Promise<string[]>;
  getPermissions: () => Promise<string[]>;
  getPermissionsOfManagerWithMeta: (managerId: number) => Promise<PermissionsWithMeta[]>;
  getPermissionsWithMeta: () => Promise<PermissionsWithMeta[]>;
}

export const getProfileService = (getCtx: () => Context): ProfileService => {
  const getPermissionsOfManagerWithMeta = async (managerId: number) => {
    const ctx = await getCtx();

    const rawPermissions = await ctx.prisma.managersToRole.findMany({
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

    const permissionsFullAccessRoles = fullAccessRoles.length > 0 ? (await ctx.permissions.all()).map(p => p.id) : [];

    const managersToPermissions = await ctx.managersToPermissions.all({filter: {managerId}});
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
      directly: Boolean(permissionsWithoutRoles.find(el => el === permissionsToPair[0])),
    }));
  };

  const getPermissionsOfManager = async (managerId: number) => {
    const ctx = getCtx();

    const permissions = await ctx.profile.getPermissionsOfManagerWithMeta(managerId);

    return R.uniq(permissions.map(el => el.permissionId));
  };

  const getPermissions = async () => {
    const managerId = getCtx().getManagerId();

    if (!managerId) {
      throw new Error('Current manager is unknown');
    }

    return getPermissionsOfManager(managerId);
  };

  const getPermissionsWithMeta = async () => {
    const managerId = getCtx().getManagerId();

    if (!managerId) {
      throw new Error('Current manager is unknown');
    }

    return getPermissionsOfManagerWithMeta(managerId);
  };

  return {
    getPermissions,
    getPermissionsOfManager,
    getPermissionsWithMeta,
    getPermissionsOfManagerWithMeta,
  };
};
