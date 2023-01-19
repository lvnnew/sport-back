import {Context} from '../../adm/services/types';
import Entity from '../../types/Entity';

// DO NOT EDIT! THIS IS GENERATED FILE

const initEntities = async (ctx: Context) => {
  await ctx.service('entities').upsert({
    id: Entity.AdmRefreshToken,
    title: 'Ui refresh tokens',
  });
  await ctx.service('entities').upsert({
    id: Entity.AggregateTracking,
    title: 'Aggregate Trackings',
  });
  await ctx.service('entities').upsert({
    id: Entity.AppLogin,
    title: 'Логины пользователей',
  });
  await ctx.service('entities').upsert({
    id: Entity.AppRefreshToken,
    title: 'App refresh tokens',
  });
  await ctx.service('entities').upsert({
    id: Entity.AuditLogActionType,
    title: 'Типы событий аудита',
  });
  await ctx.service('entities').upsert({
    id: Entity.AuditLog,
    title: 'Аудиты',
  });
  await ctx.service('entities').upsert({
    id: Entity.AutogenerationHistoryEntry,
    title: 'Истории автогенерации',
  });
  await ctx.service('entities').upsert({
    id: Entity.AutogenerationRule,
    title: 'Правило автогенерации',
  });
  await ctx.service('entities').upsert({
    id: Entity.Delegation,
    title: 'Делегирования',
  });
  await ctx.service('entities').upsert({
    id: Entity.Entity,
    title: 'Сущности',
  });
  await ctx.service('entities').upsert({
    id: Entity.File,
    title: 'Файлы',
  });
  await ctx.service('entities').upsert({
    id: Entity.Language,
    title: 'Languages',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingCampaignStatus,
    title: 'Статус рассылок',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingCampaign,
    title: 'Рассылки',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingMessageStatus,
    title: 'Статусы сообщений массовой рассылки',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingMessage,
    title: 'Сообщения рассылки',
  });
  await ctx.service('entities').upsert({
    id: Entity.MailingType,
    title: 'Типы рассылок',
  });
  await ctx.service('entities').upsert({
    id: Entity.ManagerLogin,
    title: 'Логины менеджеров',
  });
  await ctx.service('entities').upsert({
    id: Entity.Manager,
    title: 'Менеджеры',
  });
  await ctx.service('entities').upsert({
    id: Entity.ManagersToPermission,
    title: 'Разрешения менеджеров',
  });
  await ctx.service('entities').upsert({
    id: Entity.ManagersToRole,
    title: 'Роли менеджеров',
  });
  await ctx.service('entities').upsert({
    id: Entity.MessageTemplateLangVariant,
    title: 'Языковые варианты шаблонов сообщений',
  });
  await ctx.service('entities').upsert({
    id: Entity.MessageTemplate,
    title: 'Шаблоны сообщений',
  });
  await ctx.service('entities').upsert({
    id: Entity.MessageType,
    title: 'Типы сообщений',
  });
  await ctx.service('entities').upsert({
    id: Entity.Permission,
    title: 'Разрешения',
  });
  await ctx.service('entities').upsert({
    id: Entity.Role,
    title: 'Роли',
  });
  await ctx.service('entities').upsert({
    id: Entity.RolesToPermission,
    title: 'Разрешения ролей',
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
    id: Entity.TemplateStyle,
    title: 'Стили шаблонов',
  });
  await ctx.service('entities').upsert({
    id: Entity.Tenant,
    title: 'Тенанты',
  });
  await ctx.service('entities').upsert({
    id: Entity.Unit,
    title: 'Подразделения',
  });
  await ctx.service('entities').upsert({
    id: Entity.User,
    title: 'Пользователи',
  });
};

export default initEntities;
