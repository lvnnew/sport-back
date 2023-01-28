import initRoles from '../common/initRoles';
import initPermissions from './initPermissions';
import {Context} from '../../adm/services/types';
import log from '../../log';
import initRolesToPermissions from './initRolesToPermissions';

// yarn ts-node:withContext src/init/roles/initRolesWithPermissions.ts
// runlify start env=test yarn ts-node:withContext src/init/roles/initRolesWithPermissions.ts
// runlify start env=stage yarn ts-node:withContext src/init/roles/initRolesWithPermissions.ts
// runlify start env=prod yarn ts-node:withContext src/init/roles/initRolesWithPermissions.ts

// runlify start env=annykarimova yarn ts-node:withContext src/init/roles/initRolesWithPermissions.ts

const initRolesWithPermissions = async (ctx: Context) => {
  log.info('initRolesWithPermissions started');
  const startedAt = Date.now();

  // await ctx.prisma.rolesToPermission.deleteMany();
  // await ctx.prisma.managersToPermission.deleteMany();
  // await ctx.prisma.permission.deleteMany();
  // const managersToRoles = await ctx.prisma.managersToRole.findMany();
  // await ctx.prisma.role.deleteMany({
  //   where: {
  //     NOT: {
  //       id: {
  //         in: managersToRoles.map(el => el.roleId),
  //       },
  //     },
  //   },
  // });

  await Promise.all([
    initRoles(ctx),
    initPermissions(ctx),
  ]);

  await initRolesToPermissions(ctx);

  log.info(`initRolesWithPermissions finished, took: ${Math.ceil((Date.now() - startedAt) / 1000)} sec`);
};

export default initRolesWithPermissions;
