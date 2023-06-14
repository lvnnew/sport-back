import {Context} from '../../adm/services/types';
import Entity from '../../types/Entity';

// DO NOT EDIT! THIS IS GENERATED FILE

const initEntities = async (ctx: Context) => {
  await ctx.service('entities').createMany([
    {
      id: Entity.AdmRefreshToken,
      title: 'UI Токены обновления',
    },
    {
      id: Entity.AggregateTracking,
      title: 'Отслеживание агрегатов',
    },
    {
      id: Entity.AppLogin,
      title: 'Логины пользователей',
    },
    {
      id: Entity.AppRefreshToken,
      title: 'App refresh tokens',
    },
    {
      id: Entity.AuditLogActionType,
      title: 'Типы событий аудита',
    },
    {
      id: Entity.AuditLog,
      title: 'Аудит',
    },
    {
      id: Entity.AutogenerationHistoryEntry,
      title: 'Истории автогенерации',
    },
    {
      id: Entity.AutogenerationRule,
      title: 'Правило автогенерации',
    },
    {
      id: Entity.ConfigurationVariable,
      title: 'Конфигурационные переменные',
    },
    {
      id: Entity.Delegation,
      title: 'Делегирования',
    },
    {
      id: Entity.Entity,
      title: 'Сущности',
    },
    {
      id: Entity.File,
      title: 'Файлы',
    },
    {
      id: Entity.Language,
      title: 'Languages',
    },
    {
      id: Entity.MailingCampaignStatus,
      title: 'Статус рассылок',
    },
    {
      id: Entity.MailingCampaign,
      title: 'Рассылки',
    },
    {
      id: Entity.MailingMessageStatus,
      title: 'Статусы сообщений массовой рассылки',
    },
    {
      id: Entity.MailingMessage,
      title: 'Сообщения рассылки',
    },
    {
      id: Entity.MailingType,
      title: 'Типы рассылок',
    },
    {
      id: Entity.ManagerLogin,
      title: 'Логины менеджеров',
    },
    {
      id: Entity.Manager,
      title: 'Менеджеры',
    },
    {
      id: Entity.ManagersToPermission,
      title: 'Разрешения менеджеров',
    },
    {
      id: Entity.ManagersToRole,
      title: 'Роли менеджеров',
    },
    {
      id: Entity.MessageTemplateLangVariant,
      title: 'Языковые варианты шаблонов сообщений',
    },
    {
      id: Entity.MessageTemplate,
      title: 'Шаблоны сообщений',
    },
    {
      id: Entity.MessageType,
      title: 'Типы сообщений',
    },
    {
      id: Entity.Permission,
      title: 'Разрешения',
    },
    {
      id: Entity.Role,
      title: 'Роли',
    },
    {
      id: Entity.RolesToPermission,
      title: 'Разрешения ролей',
    },
    {
      id: Entity.Stat,
      title: 'Stats',
    },
    {
      id: Entity.Tag,
      title: 'Tags',
    },
    {
      id: Entity.TemplateStyle,
      title: 'Стили шаблонов',
    },
    {
      id: Entity.Tenant,
      title: 'Тенанты',
    },
    {
      id: Entity.Unit,
      title: 'Подразделения',
    },
    {
      id: Entity.User,
      title: 'Пользователи',
    },
  ]);
};

export default initEntities;
