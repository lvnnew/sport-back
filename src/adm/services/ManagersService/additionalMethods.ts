import {Context} from '../types';
import {BaseManagersMethods} from './ManagersService';
import {
  MutationNewManagerArgs,
  MutationDeactivateManagersArgs,
  MutationChangePasswordArgs,
} from '../../../generated/graphql';
import bcrypt from 'bcrypt';
import {BCRYPT_SALT_ROUNDS} from '../../../constants';

export interface AdditionalManagersMethods {
  newManager: (params: MutationNewManagerArgs) => Promise<void>;
  deactivateManagers: (params: MutationDeactivateManagersArgs) => Promise<void>;
  changePassword: (params: MutationChangePasswordArgs) => Promise<void>;
}

export const getAdditionalMethods = (ctx: Context, baseMethods: BaseManagersMethods): AdditionalManagersMethods => {
  const newManager = async (params: MutationNewManagerArgs) => {
    const hashedPassword = await bcrypt.hash(params.password, BCRYPT_SALT_ROUNDS);
    const manager = await baseMethods.create({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      headOfUnit: false,
      active: true,
    });

    await ctx.service('managerLogins').upsertAdvanced(
      {
        login: params.email,
      },
      {
        login: params.email,
        passwordHash: hashedPassword,
        role: '',
        emailVerified: true,
        initialPasswordChanged: true,
        locked: false,
        managerId: manager.id,
      },
    );

    if (params.roles) {
      for (const role of params.roles) {
        await ctx.service('managersToRoles').createMany([{
          managerId: manager.id,
          roleId: role,
        }]);
      }
    }
  };

  const deactivateManagers = async (params: MutationDeactivateManagersArgs) => {
    const managers = await ctx.service('managers').all({filter: {ids: params.managerIds}});
    if (!managers) {
      throw new Error('No managers found.');
    }

    await ctx.prisma.manager.updateMany({
      where: {
        id: {
          in: managers.map(m => m.id),
        },
      },
      data: {
        active: false,
      },
    });
  };

  const changePassword = async ({
    managerId,
    password,
  }: MutationChangePasswordArgs) => {
    const managerLogin = await ctx.service('managerLogins').findOneRequired({filter: {managerId}});
    const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

    await ctx.prisma.managerLogin.update({
      where: {
        id: managerLogin.id,
      },
      data: {
        passwordHash: hashedPassword,
      },
    });
  };

  return {
    newManager,
    deactivateManagers,
    changePassword,
  };
};
