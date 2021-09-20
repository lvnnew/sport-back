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

    log.info('rawPermissions');
    log.info(rawPermissions);

    const permissions = R.uniq(
      R.flatten(
        rawPermissions
          .map(m => m.role)
          .map(
            r => r.rolesToPermissionRoles.map(m => m.permissionId),
          ),
      ),
    );
    log.info('permissions');
    log.info(permissions);

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
