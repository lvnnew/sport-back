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
      id: Entity.Club,
      title: 'Клубы',
    },
    {
      id: Entity.Competition,
      title: 'Турниры',
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
      id: Entity.EntitiesTracking,
      title: 'Отслеживание сущностей',
    },
    {
      id: Entity.EventTypeCategory,
      title: 'Категории типов событий',
    },
    {
      id: Entity.EventType,
      title: 'Типы событий',
    },
    {
      id: Entity.Event,
      title: 'События',
    },
    {
      id: Entity.File,
      title: 'Файлы',
    },
    {
      id: Entity.Glossary,
      title: 'Глоссарий',
    },
    {
      id: Entity.HistoryOfPlayerRole,
      title: 'История ролей игроков',
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
      id: Entity.ManagerLoginType,
      title: 'Manager login types',
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
      id: Entity.MatchPeriodMarkup,
      title: 'Разметки периодов',
    },
    {
      id: Entity.MatchRequest,
      title: 'Заявки на матчи',
    },
    {
      id: Entity.MatchStatus,
      title: 'Статусы матчей',
    },
    {
      id: Entity.MatchVideo,
      title: 'Видео матчей',
    },
    {
      id: Entity.Match,
      title: 'Матчи',
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
      id: Entity.Organizator,
      title: 'Организаторы',
    },
    {
      id: Entity.Parent,
      title: 'Родители',
    },
    {
      id: Entity.PeriodType,
      title: 'Типы периодов',
    },
    {
      id: Entity.Permission,
      title: 'Разрешения',
    },
    {
      id: Entity.PlayerAggregatedRole,
      title: 'Агрегированные позиции',
    },
    {
      id: Entity.PlayerCompetitionRating,
      title: 'Рейтинги игроков команд на турнирах',
    },
    {
      id: Entity.PlayerForCompetitionTeam,
      title: 'Списки игроков команд на турнире ',
    },
    {
      id: Entity.PlayerForMatchRequest,
      title: 'Заявки игроков на матч',
    },
    {
      id: Entity.PlayerForTeamMatchList,
      title: 'Игроки заявки',
    },
    {
      id: Entity.PlayerMatchRating,
      title: 'Рейтинги игроков на матчах',
    },
    {
      id: Entity.PlayerRank,
      title: 'Ранги игроков',
    },
    {
      id: Entity.PlayerRole,
      title: 'Роли игроков',
    },
    {
      id: Entity.Player,
      title: 'Игроки',
    },
    {
      id: Entity.ReportForClub,
      title: 'Отчеты для клубов',
    },
    {
      id: Entity.ReportForOrganization,
      title: 'Отчеты для организаторов',
    },
    {
      id: Entity.ReportForParent,
      title: 'Отчеты для родителей',
    },
    {
      id: Entity.ReportForTeam,
      title: 'Отчеты для команд',
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
      id: Entity.TeamForCompetition,
      title: 'Команды на турнире',
    },
    {
      id: Entity.TeamForPlayer,
      title: 'Игроки команд',
    },
    {
      id: Entity.TeamMatchList,
      title: 'Составы команд на матчи',
    },
    {
      id: Entity.TeamMatchReport,
      title: 'Командные отчеты',
    },
    {
      id: Entity.Team,
      title: 'Команды',
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
    {
      id: Entity.WscContact,
      title: 'WSC Contacts',
    },
    {
      id: Entity.WscMessage,
      title: 'WSC Messages',
    },
    {
      id: Entity.WscUser,
      title: 'WSC Users',
    },
  ]);
};

export default initEntities;
