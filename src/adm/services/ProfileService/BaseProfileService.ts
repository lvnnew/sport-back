import * as R from 'ramda';
import {
  Manager,
  ManagerLogin,
  MutationChangePasswordArgs,
} from '../../../generated/graphql';
import {KeyValuePair} from 'ramda';
import log from '../../../log';
import {Context} from '../types';
import AppError from '../../../AppError';
import AppErrorCode from '../../../types/AppErrorCode';
import ManagerLoginType from '../../../types/ManagerLoginType';
import Cacheable from '../../../decorators/Cacheable';

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
  unitName: string | null,
}

interface GetOrCreateManagerWithLoginByOidcLoginParams {
  login: string,
  email: string,
  emailVerified: boolean,
  lastName: string,
  firstName: string,
}

// const opt = {
//   max: 500,
//   ttl: 1000 * 60, // 1 min
// };

// const managersTenantIdsCache = new LRUCache(opt);
// const usersTenantIdsCache = new LRUCache(opt);
// const managersPermissionsCache = new LRUCache(opt);
// const managerCache = new LRUCache(opt);

class BaseProfileService {
  protected userId: number | null = null;
  protected managerId: number | null = null;
  protected managerLogin: string | null = null;
  protected unitName: string | null = null;
  protected ip: string | null = null;

  constructor(protected ctx: Context) {}

  getUserId = () => this.userId;
  getManagerId = () => this.managerId;
  getManagerIdOrThrow = () => {
    if (!this.managerId) {
      throw new Error('BaseProfileService: current manager is unknown');
    }

    return this.managerId;
  };
  getManagerLogin = () => this.managerLogin;
  getUnitName = () => this.unitName;

  setUserId = (newUserId: number) => {
    this.userId = newUserId;
  };

  setManagerId = (newManagerId: number) => {
    this.managerId = newManagerId;
  };

  setManagerLogin = (login: string) => {
    this.managerLogin = login;
  };

  setUnitName = (unitName: string) => {
    this.unitName = unitName;
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

  async getPermissionsOfManager (managerId: number): Promise<string[]> {
    if (!managerId) {
      return [];
    }

    const permissions = await this.getPermissionsOfManagerWithMeta(managerId);

    return R.uniq(permissions.map(el => el.permissionId));
  }

  getPermissions = async () => {
    if (!this.managerId) {
      log.error('getPermissions Current manager is unknown');
      throw new Error('getPermissions Current manager is unknown');
    }

    return this.getPermissionsOfManager(this.managerId);
  };

  getPermissionsWithMeta = async () => {
    const managerId = this.getManagerId();

    if (!managerId) {
      throw new Error('getPermissionsWithMeta Current manager is unknown');
    }

    return this.getPermissionsOfManagerWithMeta(managerId);
  };

  getRolesOfManager = async (managerId: number) => {
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

  changePassword = async ({
    password,
  }: MutationChangePasswordArgs) => {
    const managerId = this.getManagerId();
    if (!managerId) {
      throw new Error('No managers found.');
    }

    return this.ctx.service('managers').changePasswordByManagerId({password, managerId});
  };

  @Cacheable()
  async getManagerById (managerId: number) {
    log.info('getManagerById');

    if (!managerId) {
      return null;
    }

    return this.ctx.service('managers').getRequired(managerId);
  }

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

  @Cacheable()
  async getAllowedTenantIdsOfManager (managerId: number): Promise<number[]> {
    if (!managerId) {
      return [];
    }

    let tenantIds: number[] = [];
    const manager = await this.ctx.prisma.manager.findFirst({where: {id: managerId}});
    if (manager && manager.tenantId) {
      tenantIds = [manager.tenantId];
    }

    return tenantIds;
  }

  @Cacheable()
  async getAllowedTenantIdsOfUser(userId: number) {
    if (!userId) {
      return [];
    }

    let tenantIds: number[] = [];
    const user = await this.ctx.prisma.user.findFirst({where: {id: userId}});
    if (user && user.tenantId) {
      tenantIds = [user.tenantId];
    }

    return tenantIds;
  }

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

  @Cacheable()
  async getOrCreateManagerWithLoginByOidcLogin(
    {
      login,
      email,
      emailVerified,
      lastName,
      firstName,
    }: GetOrCreateManagerWithLoginByOidcLoginParams,
  ): Promise<{manager: Manager, login: ManagerLogin}> {
    const managerLogin = await this.ctx.prisma.managerLogin.findFirst({
      include: {
        manager: true,
      },
      where: {
        login,
        managerLoginTypeId: ManagerLoginType.Oidc,
      },
    });

    if (managerLogin) {
      return {
        manager: managerLogin.manager,
        login: managerLogin,
      };
    } else {
      let manager: Manager | null = null;

      if (emailVerified) {
        manager = await this.ctx.prisma.manager.findFirst({
          where: {
            email,
          },
        });

        if (!manager) {
          manager = await this.ctx.service('managers').create({
            email,
            lastName,
            firstName,
            active: true,
            headOfUnit: false,
          });
        }
      } else {
        throw new AppError('Your email not verified. Login can not be created', AppErrorCode.EmailNotVerified, {email});
      }

      const createdLogin = await this.ctx.service('managerLogins').create({
        login,
        emailVerified,
        managerId: manager.id,
        managerLoginTypeId: ManagerLoginType.Oidc,
      });

      log.info('createdManager');
      log.info(JSON.stringify(manager, null, 1));

      return {
        manager: manager as any,
        login: createdLogin,
      };
    }
  }
}

export default BaseProfileService;
