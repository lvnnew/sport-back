import * as R from 'ramda';
import {getBaseServices, Context} from '../../adm/services/context';
import {Role} from '../../types/enums';

// yarn ts-node:withContext src/init/permissions/initRoles.ts
// AGR_DATABASE_URI=$AGR_STAGE_DATABASE_URI yarn ts-node:withContext src/init/permissions/initRoles.ts
// AGR_DATABASE_URI=$AGR_PROD_DATABASE_URI yarn ts-node:withContext src/init/permissions/initRoles.ts

export const initRoles = async (ctx: Context) => {
  // const allPermissions = getRuntimePermissions();

  const services = getBaseServices(() => {
    throw new Error('Not supposed to be called');
  });

  const serviceNames = Object.keys(services);

  const readPermissionNames = [
    'get',
    'all',
    'meta',
  ];

  const writePermissionNames = [
    'create',
    'update',
    'delete',
  ];

  const readWritePermissionNames = [
    ...readPermissionNames,
    ...writePermissionNames,
  ];

  const getReadPermissionsOnService = (service: string) => readPermissionNames.map(permission => `${service}.${permission}`);
  const getReadWritePermissionsOnService = (service: string) => readWritePermissionNames.map(permission => `${service}.${permission}`);

  for (const serviceName of serviceNames) {
    const read = await ctx.roles.upsert({
      id: `${serviceName}Read`,
      title: `${serviceName}Read`,
      hasFullAccess: false,
    });
    const readPermissions = getReadPermissionsOnService(serviceName);
    await ctx.rolesToPermissions.createMany(readPermissions.map(p => ({
      roleId: read.id,
      permissionId: p,
    })));

    const readWrite = await ctx.roles.upsert({
      id: `${serviceName}ReadWrite`,
      title: `${serviceName}ReadWrite`,
      hasFullAccess: false,
    });
    const readWritePermissions = getReadWritePermissionsOnService(serviceName);
    await ctx.rolesToPermissions.createMany(readWritePermissions.map(p => ({
      roleId: readWrite.id,
      permissionId: p,
    })));
  }

  const readPermissions = R.flatten(serviceNames.map(service => getReadPermissionsOnService(service)));

  await ctx.roles.upsert({
    id: Role.Admin,
    title: 'Admin',
    hasFullAccess: true,
  });

  const manager = await ctx.roles.upsert({
    id: Role.Manager,
    title: 'Manager',
    hasFullAccess: false,
  });
  await ctx.rolesToPermissions.createMany(readPermissions.map(p => ({
    roleId: manager.id,
    permissionId: p,
  })));

  // const getAllServicePermissions = (serviceName: string) => allPermissions.filter(({service}) => service === serviceName);

  // const addAllServicePermissions = (roleId: string, serviceName: string) => ctx.rolesToPermissions.createMany(
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
};
