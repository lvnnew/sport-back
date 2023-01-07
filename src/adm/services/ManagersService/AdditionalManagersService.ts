import {ManagersService} from './ManagersService';
import {MutationNewManagerArgs, MutationDeactivateManagersArgs, MutationChangePasswordByManagerIdArgs} from '../../../generated/graphql';
import bcrypt from 'bcrypt';
import {BCRYPT_SALT_ROUNDS} from '../../../constants';

export class AdditionalManagersService extends ManagersService {
  async newManager(params: MutationNewManagerArgs) {
    const hashedPassword = await bcrypt.hash(params.password, BCRYPT_SALT_ROUNDS);
    const manager = await this.create({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      headOfUnit: false,
      active: true,
    });

    await this.ctx.service('managerLogins').upsertAdvanced(
      {
        login: params.email,
      },
      {
        login: params.email,
        passwordHash: hashedPassword,
        emailVerified: true,
        initialPasswordChanged: true,
        locked: false,
        managerId: manager.id,
      },
    );

    if (params.roles) {
      for (const role of params.roles) {
        await this.ctx.service('managersToRoles').createMany([{
          managerId: manager.id,
          roleId: role,
        }]);
      }
    }
  }

  async deactivateManagers(params: MutationDeactivateManagersArgs) {
    const managers = await this.ctx.service('managers').all({filter: {ids: params.managerIds}});
    if (!managers) {
      throw new Error('No managers found.');
    }

    await this.ctx.prisma.manager.updateMany({
      where: {
        id: {
          in: managers.map(m => m.id),
        },
      },
      data: {
        active: false,
      },
    });
  }

  async changePasswordByManagerId({
    managerId,
    password,
  }: MutationChangePasswordByManagerIdArgs) {
    const managerLogin = await this.ctx.service('managerLogins').findOneRequired({filter: {managerId}});
    const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

    await this.ctx.prisma.managerLogin.update({
      where: {
        id: managerLogin.id,
      },
      data: {
        passwordHash: hashedPassword,
      },
    });
  }
}
