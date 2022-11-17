import * as R from 'ramda';
import {additionalServicesPermissionToGraphql} from './additionalServicesPermissionToGraphql';
import {MutationResolvers, QueryResolvers} from '../../generated/graphql';
import {Services} from '../services/types';
import helpPermissionToGraphql from './services/help/permissionsToGraphql';
import admRefreshTokensPermissionToGraphql from './services/admRefreshTokens/permissionsToGraphql';
import aggregateTrackingsPermissionToGraphql from './services/aggregateTrackings/permissionsToGraphql';
import appLoginsPermissionToGraphql from './services/appLogins/permissionsToGraphql';
import appRefreshTokensPermissionToGraphql from './services/appRefreshTokens/permissionsToGraphql';
import auditLogActionTypesPermissionToGraphql from './services/auditLogActionTypes/permissionsToGraphql';
import auditLogsPermissionToGraphql from './services/auditLogs/permissionsToGraphql';
import autogenerationHistoryEntriesPermissionToGraphql from './services/autogenerationHistoryEntries/permissionsToGraphql';
import autogenerationRulesPermissionToGraphql from './services/autogenerationRules/permissionsToGraphql';
import delegationsPermissionToGraphql from './services/delegations/permissionsToGraphql';
import entitiesPermissionToGraphql from './services/entities/permissionsToGraphql';
import filesPermissionToGraphql from './services/files/permissionsToGraphql';
import languagesPermissionToGraphql from './services/languages/permissionsToGraphql';
import mailingCampaignStatusesPermissionToGraphql from './services/mailingCampaignStatuses/permissionsToGraphql';
import mailingCampaignsPermissionToGraphql from './services/mailingCampaigns/permissionsToGraphql';
import mailingMessageStatusesPermissionToGraphql from './services/mailingMessageStatuses/permissionsToGraphql';
import mailingMessagesPermissionToGraphql from './services/mailingMessages/permissionsToGraphql';
import mailingTypesPermissionToGraphql from './services/mailingTypes/permissionsToGraphql';
import managerLoginsPermissionToGraphql from './services/managerLogins/permissionsToGraphql';
import managersPermissionToGraphql from './services/managers/permissionsToGraphql';
import managersToPermissionsPermissionToGraphql from './services/managersToPermissions/permissionsToGraphql';
import managersToRolesPermissionToGraphql from './services/managersToRoles/permissionsToGraphql';
import messageTemplateLangVariantsPermissionToGraphql from './services/messageTemplateLangVariants/permissionsToGraphql';
import messageTemplatesPermissionToGraphql from './services/messageTemplates/permissionsToGraphql';
import messageTypesPermissionToGraphql from './services/messageTypes/permissionsToGraphql';
import permissionsPermissionToGraphql from './services/permissions/permissionsToGraphql';
import rolesPermissionToGraphql from './services/roles/permissionsToGraphql';
import rolesToPermissionsPermissionToGraphql from './services/rolesToPermissions/permissionsToGraphql';
import statsPermissionToGraphql from './services/stats/permissionsToGraphql';
import tagsPermissionToGraphql from './services/tags/permissionsToGraphql';
import templateStylesPermissionToGraphql from './services/templateStyles/permissionsToGraphql';
import tenantsPermissionToGraphql from './services/tenants/permissionsToGraphql';
import unitsPermissionToGraphql from './services/units/permissionsToGraphql';
import usersPermissionToGraphql from './services/users/permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

type queryFiles = keyof QueryResolvers;
type mutationFiles = keyof MutationResolvers;

export type PermissionToGraphql <T = any> = Record<
  keyof T,
  queryFiles | mutationFiles
>

export const permissionsToGraphql: Partial<Record<keyof Services, Partial<PermissionToGraphql>>> = {
  ...additionalServicesPermissionToGraphql,
  help: helpPermissionToGraphql,
  admRefreshTokens: admRefreshTokensPermissionToGraphql,
  aggregateTrackings: aggregateTrackingsPermissionToGraphql,
  appLogins: appLoginsPermissionToGraphql,
  appRefreshTokens: appRefreshTokensPermissionToGraphql,
  auditLogActionTypes: auditLogActionTypesPermissionToGraphql,
  auditLogs: auditLogsPermissionToGraphql,
  autogenerationHistoryEntries: autogenerationHistoryEntriesPermissionToGraphql,
  autogenerationRules: autogenerationRulesPermissionToGraphql,
  delegations: delegationsPermissionToGraphql,
  entities: entitiesPermissionToGraphql,
  files: filesPermissionToGraphql,
  languages: languagesPermissionToGraphql,
  mailingCampaignStatuses: mailingCampaignStatusesPermissionToGraphql,
  mailingCampaigns: mailingCampaignsPermissionToGraphql,
  mailingMessageStatuses: mailingMessageStatusesPermissionToGraphql,
  mailingMessages: mailingMessagesPermissionToGraphql,
  mailingTypes: mailingTypesPermissionToGraphql,
  managerLogins: managerLoginsPermissionToGraphql,
  managers: managersPermissionToGraphql,
  managersToPermissions: managersToPermissionsPermissionToGraphql,
  managersToRoles: managersToRolesPermissionToGraphql,
  messageTemplateLangVariants: messageTemplateLangVariantsPermissionToGraphql,
  messageTemplates: messageTemplatesPermissionToGraphql,
  messageTypes: messageTypesPermissionToGraphql,
  permissions: permissionsPermissionToGraphql,
  roles: rolesPermissionToGraphql,
  rolesToPermissions: rolesToPermissionsPermissionToGraphql,
  stats: statsPermissionToGraphql,
  tags: tagsPermissionToGraphql,
  templateStyles: templateStylesPermissionToGraphql,
  tenants: tenantsPermissionToGraphql,
  units: unitsPermissionToGraphql,
  users: usersPermissionToGraphql,
};

const flattenPermissionToGraphqlRaw = R.unnest(
  R.toPairs(permissionsToGraphql)
    .filter(([, mapping]) => mapping)
    .map(
      ([service, mapping]) =>
        R
          .toPairs(mapping as Partial<PermissionToGraphql<any>>)
          .map(
            ([serviceMethod, graphqlMethod]) => [`${service}.${String(serviceMethod)}`, graphqlMethod],
          ),
    ),
) as R.KeyValuePair<string, string>[];

export const flattenPermissionToGraphql = R.fromPairs(flattenPermissionToGraphqlRaw);

export const flattenGraphqlToPermission = R.fromPairs(
  flattenPermissionToGraphqlRaw.map(
    ([permission, graphql]) => [graphql, permission],
  ),
);
