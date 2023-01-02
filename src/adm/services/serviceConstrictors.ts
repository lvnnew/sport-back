import {getAdmRefreshTokensService} from './AdmRefreshTokensService/AdmRefreshTokensService';
import {getAggregateTrackingsService} from './AggregateTrackingsService/AggregateTrackingsService';
import {getAppLoginsService} from './AppLoginsService/AppLoginsService';
import {getAppRefreshTokensService} from './AppRefreshTokensService/AppRefreshTokensService';
import {getAuditLogActionTypesService} from './AuditLogActionTypesService/AuditLogActionTypesService';
import {getAuditLogsService} from './AuditLogsService/AuditLogsService';
import {getAutogenerationHistoryEntriesService} from './AutogenerationHistoryEntriesService/AutogenerationHistoryEntriesService';
import {getAutogenerationRulesService} from './AutogenerationRulesService/AutogenerationRulesService';
import {getDelegationsService} from './DelegationsService/DelegationsService';
import {getEntitiesService} from './EntitiesService/EntitiesService';
import {getFilesService} from './FilesService/FilesService';
import {getLanguagesService} from './LanguagesService/LanguagesService';
import {getMailingCampaignStatusesService} from './MailingCampaignStatusesService/MailingCampaignStatusesService';
import {getMailingCampaignsService} from './MailingCampaignsService/MailingCampaignsService';
import {getMailingMessageStatusesService} from './MailingMessageStatusesService/MailingMessageStatusesService';
import {getMailingMessagesService} from './MailingMessagesService/MailingMessagesService';
import {getMailingTypesService} from './MailingTypesService/MailingTypesService';
import {getManagerLoginsService} from './ManagerLoginsService/ManagerLoginsService';
import {getManagersService} from './ManagersService/ManagersService';
import {getManagersToPermissionsService} from './ManagersToPermissionsService/ManagersToPermissionsService';
import {getManagersToRolesService} from './ManagersToRolesService/ManagersToRolesService';
import {getMessageTemplateLangVariantsService} from './MessageTemplateLangVariantsService/MessageTemplateLangVariantsService';
import {getMessageTemplatesService} from './MessageTemplatesService/MessageTemplatesService';
import {getMessageTypesService} from './MessageTypesService/MessageTypesService';
import {getPermissionsService} from './PermissionsService/PermissionsService';
import {getRolesService} from './RolesService/RolesService';
import {getRolesToPermissionsService} from './RolesToPermissionsService/RolesToPermissionsService';
import {StatsServiceClass} from './StatsService/StatsServiceClass';
import {TagsServiceClass} from './TagsService/TagsServiceClass';
import {getTemplateStylesService} from './TemplateStylesService/TemplateStylesService';
import {getTenantsService} from './TenantsService/TenantsService';
import {getUnitsService} from './UnitsService/UnitsService';
import {getUsersService} from './UsersService/UsersService';
import {getHelpService} from './HelpService/HelpService';
import {ServiceConstrictors, BaseServiceConstrictors} from './types';
import additionalServiceConstrictors from './additionalServiceConstrictors';

// DO NOT EDIT! THIS IS GENERATED FILE

export const baseServiceConstrictors: BaseServiceConstrictors = {
  help: getHelpService,
  admRefreshTokens: getAdmRefreshTokensService,
  aggregateTrackings: getAggregateTrackingsService,
  appLogins: getAppLoginsService,
  appRefreshTokens: getAppRefreshTokensService,
  auditLogActionTypes: getAuditLogActionTypesService,
  auditLogs: getAuditLogsService,
  autogenerationHistoryEntries: getAutogenerationHistoryEntriesService,
  autogenerationRules: getAutogenerationRulesService,
  delegations: getDelegationsService,
  entities: getEntitiesService,
  files: getFilesService,
  languages: getLanguagesService,
  mailingCampaignStatuses: getMailingCampaignStatusesService,
  mailingCampaigns: getMailingCampaignsService,
  mailingMessageStatuses: getMailingMessageStatusesService,
  mailingMessages: getMailingMessagesService,
  mailingTypes: getMailingTypesService,
  managerLogins: getManagerLoginsService,
  managers: getManagersService,
  managersToPermissions: getManagersToPermissionsService,
  managersToRoles: getManagersToRolesService,
  messageTemplateLangVariants: getMessageTemplateLangVariantsService,
  messageTemplates: getMessageTemplatesService,
  messageTypes: getMessageTypesService,
  permissions: getPermissionsService,
  roles: getRolesService,
  rolesToPermissions: getRolesToPermissionsService,
  stats: (ctx) => new StatsServiceClass(ctx),
  tags: (ctx) => new TagsServiceClass(ctx),
  templateStyles: getTemplateStylesService,
  tenants: getTenantsService,
  units: getUnitsService,
  users: getUsersService,
};

const serviceConstrictors: ServiceConstrictors = {
  ...baseServiceConstrictors,
  ...additionalServiceConstrictors,
};

export default serviceConstrictors;
