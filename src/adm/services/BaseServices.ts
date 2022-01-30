import {AppLoginsService} from './AppLoginsService/AppLoginsService';
import {AuditLogActionTypesService} from './AuditLogActionTypesService/AuditLogActionTypesService';
import {AuditLogsService} from './AuditLogsService/AuditLogsService';
import {AutogenerationHistoryEntriesService} from './AutogenerationHistoryEntriesService/AutogenerationHistoryEntriesService';
import {AutogenerationRulesService} from './AutogenerationRulesService/AutogenerationRulesService';
import {DelegationsService} from './DelegationsService/DelegationsService';
import {FilesService} from './FilesService/FilesService';
import {LanguagesService} from './LanguagesService/LanguagesService';
import {ManagerLoginsService} from './ManagerLoginsService/ManagerLoginsService';
import {ManagersService} from './ManagersService/ManagersService';
import {ManagersToPermissionsService} from './ManagersToPermissionsService/ManagersToPermissionsService';
import {ManagersToRolesService} from './ManagersToRolesService/ManagersToRolesService';
import {MessageTemplatesService} from './MessageTemplatesService/MessageTemplatesService';
import {PermissionsService} from './PermissionsService/PermissionsService';
import {RolesService} from './RolesService/RolesService';
import {RolesToPermissionsService} from './RolesToPermissionsService/RolesToPermissionsService';
import {StatsService} from './StatsService/StatsService';
import {TagsService} from './TagsService/TagsService';
import {UnitsService} from './UnitsService/UnitsService';
import {UsersService} from './UsersService/UsersService';
import {HelpService} from './HelpService/HelpService';

// DO NOT EDIT! THIS IS GENERATED FILE

export interface BaseServices {
  help: HelpService;
  appLogins: AppLoginsService;
  auditLogActionTypes: AuditLogActionTypesService;
  auditLogs: AuditLogsService;
  autogenerationHistoryEntries: AutogenerationHistoryEntriesService;
  autogenerationRules: AutogenerationRulesService;
  delegations: DelegationsService;
  files: FilesService;
  languages: LanguagesService;
  managerLogins: ManagerLoginsService;
  managers: ManagersService;
  managersToPermissions: ManagersToPermissionsService;
  managersToRoles: ManagersToRolesService;
  messageTemplates: MessageTemplatesService;
  permissions: PermissionsService;
  roles: RolesService;
  rolesToPermissions: RolesToPermissionsService;
  stats: StatsService;
  tags: TagsService;
  units: UnitsService;
  users: UsersService;
}
