import {Context} from '../../adm/services/types';
import {Role} from '../../types/enums';
import {getRuntimePermissions} from '../../adm/services/getRuntimePermissions';
import log from '../../log';

// yarn ts-node:withContext src/init/permissions/initRoles.ts
// runlify start env=prod yarn ts-node:withContext src/init/permissions/initRoles.ts

const initRoles = async (ctx: Context) => {
  log.info('initRoles started');
  const startedAt = Date.now();

  const allPermissions = getRuntimePermissions(ctx);
  await ctx.service('permissions').createMany(
    allPermissions
      .map(p => ({
        id: p.id,
        title: p.id,
      })),
  );

  // const services = getBaseServices(() => {
  //   throw new Error('Not supposed to be called');
  // });

  // const serviceNames = Object.keys(services);

  // const readPermissionNames = [
  //   'get',
  //   'all',
  //   'meta',
  // ];

  // const getReadPermissionsOnService = (service: string) => readPermissionNames.map(permission => `${service}.${permission}`);

  // const readPermissions = R.flatten(serviceNames.map(service => getReadPermissionsOnService(service)));

  await ctx.service('roles').upsert({
    id: Role.Admin,
    title: 'Admin',
    hasAllPermissions: true,
    allTenantsAvailable: true,
  });

  await ctx.service('roles').upsert({
    id: Role.Manager,
    title: 'Manager',
    hasAllPermissions: false,
    allTenantsAvailable: false,
  });
  // await ctx.service('rolesToPermissions').createMany(readPermissions.map(p => ({
  //   roleId: manager.id,
  //   permissionId: p,
  // })));

  // const getAllServicePermissions = (serviceName: string) => allPermissions.filter(({service}) => service === serviceName);

  // const addAllServicePermissions = (roleId: string, serviceName: string) => ctx.service('rolesToPermissions').createMany(
  //   getAllServicePermissions(serviceName)
  //     .map(p => ({
  //       roleId,
  //       permissionId: p.id,
  //     })),
  // );

  // await addAllServicePermissions(manager.id, 'reports');
  // await addAllServicePermissions(manager.id, 'saveFile');
  // await addAllServicePermissions(manager.id, 'emails');
  // await addAllServicePermissions(manager.id, 'miles');

  // Admin specific permissions.
  // We do not link them by rolesToPermissions due to Admin's ability to get all existing permissions
  const adminPermissions = [
    'managers.changePasswordByManagerId',
  ];
  await ctx.service('permissions').createMany(
    adminPermissions
      .map(p => ({
        id: p,
        title: p,
      })),
  );

  log.info(`initRoles finished, took: ${Math.ceil((Date.now() - startedAt) / 1000)} sec`);
};

export default initRoles;
