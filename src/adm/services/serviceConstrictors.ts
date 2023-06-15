import {AdditionalAdmRefreshTokensService} from './AdmRefreshTokensService/AdditionalAdmRefreshTokensService';
import {AdditionalAggregateTrackingsService} from './AggregateTrackingsService/AdditionalAggregateTrackingsService';
import {AdditionalAppLoginsService} from './AppLoginsService/AdditionalAppLoginsService';
import {AdditionalAppRefreshTokensService} from './AppRefreshTokensService/AdditionalAppRefreshTokensService';
import {AdditionalAuditLogActionTypesService} from './AuditLogActionTypesService/AdditionalAuditLogActionTypesService';
import {AdditionalAuditLogsService} from './AuditLogsService/AdditionalAuditLogsService';
import {AdditionalAutogenerationHistoryEntriesService} from './AutogenerationHistoryEntriesService/AdditionalAutogenerationHistoryEntriesService';
import {AdditionalAutogenerationRulesService} from './AutogenerationRulesService/AdditionalAutogenerationRulesService';
import {AdditionalConfigurationVariablesService} from './ConfigurationVariablesService/AdditionalConfigurationVariablesService';
import {AdditionalDelegationsService} from './DelegationsService/AdditionalDelegationsService';
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
import {AdditionalManagersToPermissionsService} from './ManagersToPermissionsService/AdditionalManagersToPermissionsService';
import {AdditionalManagersToRolesService} from './ManagersToRolesService/AdditionalManagersToRolesService';
import {AdditionalMessageTemplateLangVariantsService} from './MessageTemplateLangVariantsService/AdditionalMessageTemplateLangVariantsService';
import {AdditionalMessageTemplatesService} from './MessageTemplatesService/AdditionalMessageTemplatesService';
import {AdditionalMessageTypesService} from './MessageTypesService/AdditionalMessageTypesService';
import {AdditionalPermissionsService} from './PermissionsService/AdditionalPermissionsService';
import {AdditionalRolesService} from './RolesService/AdditionalRolesService';
import {AdditionalRolesToPermissionsService} from './RolesToPermissionsService/AdditionalRolesToPermissionsService';
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
  aggregateTrackings: (ctx) => new AdditionalAggregateTrackingsService(ctx),
  appLogins: (ctx) => new AdditionalAppLoginsService(ctx),
  appRefreshTokens: (ctx) => new AdditionalAppRefreshTokensService(ctx),
  auditLogActionTypes: (ctx) => new AdditionalAuditLogActionTypesService(ctx),
  auditLogs: (ctx) => new AdditionalAuditLogsService(ctx),
  autogenerationHistoryEntries: (ctx) => new AdditionalAutogenerationHistoryEntriesService(ctx),
  autogenerationRules: (ctx) => new AdditionalAutogenerationRulesService(ctx),
  configurationVariables: (ctx) => new AdditionalConfigurationVariablesService(ctx),
  delegations: (ctx) => new AdditionalDelegationsService(ctx),
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
  managersToPermissions: (ctx) => new AdditionalManagersToPermissionsService(ctx),
  managersToRoles: (ctx) => new AdditionalManagersToRolesService(ctx),
  messageTemplateLangVariants: (ctx) => new AdditionalMessageTemplateLangVariantsService(ctx),
  messageTemplates: (ctx) => new AdditionalMessageTemplatesService(ctx),
  messageTypes: (ctx) => new AdditionalMessageTypesService(ctx),
  permissions: (ctx) => new AdditionalPermissionsService(ctx),
  roles: (ctx) => new AdditionalRolesService(ctx),
  rolesToPermissions: (ctx) => new AdditionalRolesToPermissionsService(ctx),
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
