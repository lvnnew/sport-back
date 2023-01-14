import {Context} from '../../adm/services/types';
import Entity from '../../types/Entity';

// DO NOT EDIT! THIS IS GENERATED FILE

const initEntities = async (ctx: Context) => {
  await ctx.service('entities').upsert({
    id: Entity.AdmRefreshToken,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.AggregateTracking,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.AppLogin,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.AppRefreshToken,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.AuditLogActionType,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.AuditLog,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.AutogenerationHistoryEntry,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.AutogenerationRule,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Delegation,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Entity,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.File,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Language,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingCampaignStatus,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingCampaign,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingMessageStatus,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingMessage,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingType,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.ManagerLogin,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Manager,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.ManagersToPermission,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.ManagersToRole,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.MessageTemplateLangVariant,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.MessageTemplate,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.MessageType,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Permission,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Role,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.RolesToPermission,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Stat,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Tag,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.TemplateStyle,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Tenant,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.Unit,
    title: '[object Object]',
  });
  await ctx.service('entities').upsert({
    id: Entity.User,
    title: '[object Object]',
  });
};

export default initEntities;
