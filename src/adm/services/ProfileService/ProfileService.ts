import * as R from 'ramda';
import {log} from '../../../log';
import {Context} from '../context';

export const BASE_MILES_TO_RECEIVE_FOR_FLIGHT = 1000;
export const BASE_MILES_TO_UPGRADE_CLASS = 1000;
export const BASE_MILES_TO_REWARD_FLIGHT = 1000;

export interface ProfileService {
  getPermissionsOfManager: (managerId: number) => Promise<string[]>;
  getPermissions: () => Promise<string[]>;
}

export const getProfileService = (getCtx: () => Context): ProfileService => {
  const getPermissionsOfManager = async (managerId: number) => {
    const ctx = getCtx();

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

    if (rawPermissions.some(p => p.role.hasFullAccess)) {
      return (await ctx.prisma.permission.findMany({select: {id: true}})).map(p => p.id);
    }

    log.info('rawPermissions');
    log.info(rawPermissions.map(p => p.roleId));

    const permissionsWithoutRoles = await ctx.managersToPermissions.all({filter: {managerId}});

    const permissions = R.uniq(
      R.flatten(
        rawPermissions
          .map(m => m.role)
          .map(
            r => r.rolesToPermissionRoles.map(m => m.permissionId),
          )
          .concat(permissionsWithoutRoles.map(el => el.permissionId)),
      ),
    );
    log.info('permissions');
    log.info(permissions);
    log.info(`permissions count: ${permissions.length}`);
    log.info(permissions.filter(p => p.includes('sub')));

    return permissions;
  };

  const getPermissions = async () => {
    const managerId = getCtx().getManagerId();

    if (!managerId) {
      throw new Error('Current manager is unknown');
    }

    return getPermissionsOfManager(managerId);
  };

  return {
    getPermissions,
    getPermissionsOfManager,
  };
};
