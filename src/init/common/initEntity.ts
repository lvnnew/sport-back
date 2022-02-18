import {Context} from '../../adm/services/types';
import Entity from '../../types/Entity';

// DO NOT EDIT! THIS IS GENERATED FILE

const initEntity = async (ctx: Context) => {
  await ctx.service('entities').upsert({
    id: Entity.AdmRefreshToken,
    title: 'Adm refresh tokens',
  });
  await ctx.service('entities').upsert({
    id: Entity.AppLogin,
    title: 'App logins',
  });
  await ctx.service('entities').upsert({
    id: Entity.AppRefreshToken,
    title: 'App refresh tokens',
  });
  await ctx.service('entities').upsert({
    id: Entity.AuditLogActionType,
    title: 'Audit log action types',
  });
  await ctx.service('entities').upsert({
    id: Entity.AuditLog,
    title: 'Audit logs',
  });
  await ctx.service('entities').upsert({
    id: Entity.AutogenerationHistoryEntry,
    title: 'Autogeneration history entries',
  });
  await ctx.service('entities').upsert({
    id: Entity.AutogenerationRule,
    title: 'Autogeneration rules',
  });
  await ctx.service('entities').upsert({
    id: Entity.Delegation,
    title: 'Delegations',
  });
  await ctx.service('entities').upsert({
    id: Entity.Entity,
    title: 'Entities',
  });
  await ctx.service('entities').upsert({
    id: Entity.File,
    title: 'Files',
  });
  await ctx.service('entities').upsert({
    id: Entity.Language,
    title: 'Languages',
  });
  await ctx.service('entities').upsert({
    id: Entity.ManagerLogin,
    title: 'Manager logins',
  });
  await ctx.service('entities').upsert({
    id: Entity.Manager,
    title: 'Managers',
  });
  await ctx.service('entities').upsert({
    id: Entity.ManagersToPermission,
    title: 'Managers to permissions',
  });
  await ctx.service('entities').upsert({
    id: Entity.ManagersToRole,
    title: 'Managers to roles',
  });
  await ctx.service('entities').upsert({
    id: Entity.MessageTemplate,
    title: 'Message templates',
  });
  await ctx.service('entities').upsert({
    id: Entity.MessageType,
    title: 'Message types',
  });
  await ctx.service('entities').upsert({
    id: Entity.Permission,
    title: 'Permissions',
  });
  await ctx.service('entities').upsert({
    id: Entity.Role,
    title: 'Roles',
  });
  await ctx.service('entities').upsert({
    id: Entity.RolesToPermission,
    title: 'Roles to permissions',
  });
  await ctx.service('entities').upsert({
    id: Entity.Stat,
    title: 'Stats',
  });
  await ctx.service('entities').upsert({
    id: Entity.Tag,
    title: 'Tags',
  });
  await ctx.service('entities').upsert({
    id: Entity.Unit,
    title: 'Units',
  });
  await ctx.service('entities').upsert({
    id: Entity.User,
    title: 'Users',
  });
};

export default initEntity;
