import {AdditionalAdmRefreshTokensService} from './AdmRefreshTokensService/AdditionalAdmRefreshTokensService';
import {getAggregateTrackingsService} from './AggregateTrackingsService/AggregateTrackingsService';
import {AdditionalAppLoginsService} from './AppLoginsService/AdditionalAppLoginsService';
import {AdditionalAppRefreshTokensService} from './AppRefreshTokensService/AdditionalAppRefreshTokensService';
import {AdditionalAuditLogActionTypesService} from './AuditLogActionTypesService/AdditionalAuditLogActionTypesService';
import {AdditionalAuditLogsService} from './AuditLogsService/AdditionalAuditLogsService';
import {AdditionalAutogenerationHistoryEntriesService} from './AutogenerationHistoryEntriesService/AdditionalAutogenerationHistoryEntriesService';
import {AdditionalAutogenerationRulesService} from './AutogenerationRulesService/AdditionalAutogenerationRulesService';
import {getDelegationsService} from './DelegationsService/DelegationsService';
import {AdditionalEntitiesService} from './EntitiesService/AdditionalEntitiesService';
import {AdditionalFilesService} from './FilesService/AdditionalFilesService';
import {AdditionalLanguagesService} from './LanguagesService/AdditionalLanguagesService';
import {AdditionalMailingCampaignStatusesService} from './MailingCampaignStatusesService/AdditionalMailingCampaignStatusesService';
import {AdditionalMailingCampaignsService} from './MailingCampaignsService/AdditionalMailingCampaignsService';
import {AdditionalMailingMessageStatusesService} from './MailingMessageStatusesService/AdditionalMailingMessageStatusesService';
import {AdditionalMailingMessagesService} from './MailingMessagesService/AdditionalMailingMessagesService';
import {AdditionalMailingTypesService} from './MailingTypesService/AdditionalMailingTypesService';
import {AdditionalManagerLoginsService} from './ManagerLoginsService/AdditionalManagerLoginsService';
import {AdditionalManagersService} from './ManagersService/AdditionalManagersService';
import {getManagersToPermissionsService} from './ManagersToPermissionsService/ManagersToPermissionsService';
import {getManagersToRolesService} from './ManagersToRolesService/ManagersToRolesService';
import {AdditionalMessageTemplateLangVariantsService} from './MessageTemplateLangVariantsService/AdditionalMessageTemplateLangVariantsService';
import {AdditionalMessageTemplatesService} from './MessageTemplatesService/AdditionalMessageTemplatesService';
import {AdditionalMessageTypesService} from './MessageTypesService/AdditionalMessageTypesService';
import {AdditionalPermissionsService} from './PermissionsService/AdditionalPermissionsService';
import {AdditionalRolesService} from './RolesService/AdditionalRolesService';
import {getRolesToPermissionsService} from './RolesToPermissionsService/RolesToPermissionsService';
import {AdditionalStatsService} from './StatsService/AdditionalStatsService';
import {AdditionalTagsService} from './TagsService/AdditionalTagsService';
import {AdditionalTemplateStylesService} from './TemplateStylesService/AdditionalTemplateStylesService';
import {AdditionalTenantsService} from './TenantsService/AdditionalTenantsService';
import {AdditionalUnitsService} from './UnitsService/AdditionalUnitsService';
import {AdditionalUsersService} from './UsersService/AdditionalUsersService';
import {getHelpService} from './HelpService/HelpService';
import {ServiceConstrictors, BaseServiceConstrictors} from './types';
import additionalServiceConstrictors from './additionalServiceConstrictors';

// DO NOT EDIT! THIS IS GENERATED FILE

export const baseServiceConstrictors: BaseServiceConstrictors = {
  help: getHelpService,
  admRefreshTokens: (ctx) => new AdditionalAdmRefreshTokensService(ctx),
  aggregateTrackings: getAggregateTrackingsService,
  appLogins: (ctx) => new AdditionalAppLoginsService(ctx),
  appRefreshTokens: (ctx) => new AdditionalAppRefreshTokensService(ctx),
  auditLogActionTypes: (ctx) => new AdditionalAuditLogActionTypesService(ctx),
  auditLogs: (ctx) => new AdditionalAuditLogsService(ctx),
  autogenerationHistoryEntries: (ctx) => new AdditionalAutogenerationHistoryEntriesService(ctx),
  autogenerationRules: (ctx) => new AdditionalAutogenerationRulesService(ctx),
  delegations: getDelegationsService,
  entities: (ctx) => new AdditionalEntitiesService(ctx),
  files: (ctx) => new AdditionalFilesService(ctx),
  languages: (ctx) => new AdditionalLanguagesService(ctx),
  mailingCampaignStatuses: (ctx) => new AdditionalMailingCampaignStatusesService(ctx),
  mailingCampaigns: (ctx) => new AdditionalMailingCampaignsService(ctx),
  mailingMessageStatuses: (ctx) => new AdditionalMailingMessageStatusesService(ctx),
  mailingMessages: (ctx) => new AdditionalMailingMessagesService(ctx),
  mailingTypes: (ctx) => new AdditionalMailingTypesService(ctx),
  managerLogins: (ctx) => new AdditionalManagerLoginsService(ctx),
  managers: (ctx) => new AdditionalManagersService(ctx),
  managersToPermissions: getManagersToPermissionsService,
  managersToRoles: getManagersToRolesService,
  messageTemplateLangVariants: (ctx) => new AdditionalMessageTemplateLangVariantsService(ctx),
  messageTemplates: (ctx) => new AdditionalMessageTemplatesService(ctx),
  messageTypes: (ctx) => new AdditionalMessageTypesService(ctx),
  permissions: (ctx) => new AdditionalPermissionsService(ctx),
  roles: (ctx) => new AdditionalRolesService(ctx),
  rolesToPermissions: getRolesToPermissionsService,
  stats: (ctx) => new AdditionalStatsService(ctx),
  tags: (ctx) => new AdditionalTagsService(ctx),
  templateStyles: (ctx) => new AdditionalTemplateStylesService(ctx),
  tenants: (ctx) => new AdditionalTenantsService(ctx),
  units: (ctx) => new AdditionalUnitsService(ctx),
  users: (ctx) => new AdditionalUsersService(ctx),
};

const serviceConstrictors: ServiceConstrictors = {
  ...baseServiceConstrictors,
  ...additionalServiceConstrictors,
};

export default serviceConstrictors;
