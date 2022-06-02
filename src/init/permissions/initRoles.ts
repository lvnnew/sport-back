import {Context} from '../../adm/services/types';
import {Role} from '../../types/enums';

// yarn ts-node:withContext src/init/permissions/initRoles.ts
// yarn ts-node:withContext src/init/permissions/initRoles.ts
// runlify start env=prod yarn ts-node:withContext src/init/permissions/initRoles.ts

const initRoles = async (ctx: Context) => {
  // const allPermissions = getRuntimePermissions(await createContext());

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
};

export default initRoles;
