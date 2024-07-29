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
import clubsPermissionToGraphql from './services/clubs/permissionsToGraphql';
import competitionsPermissionToGraphql from './services/competitions/permissionsToGraphql';
import configurationVariablesPermissionToGraphql from './services/configurationVariables/permissionsToGraphql';
import delegationsPermissionToGraphql from './services/delegations/permissionsToGraphql';
import entitiesPermissionToGraphql from './services/entities/permissionsToGraphql';
import entitiesTrackingsPermissionToGraphql from './services/entitiesTrackings/permissionsToGraphql';
import eventTypeCategoriesPermissionToGraphql from './services/eventTypeCategories/permissionsToGraphql';
import eventTypesPermissionToGraphql from './services/eventTypes/permissionsToGraphql';
import eventsPermissionToGraphql from './services/events/permissionsToGraphql';
import filesPermissionToGraphql from './services/files/permissionsToGraphql';
import glossariesPermissionToGraphql from './services/glossaries/permissionsToGraphql';
import historyOfPlayerRolesPermissionToGraphql from './services/historyOfPlayerRoles/permissionsToGraphql';
import languagesPermissionToGraphql from './services/languages/permissionsToGraphql';
import mailingCampaignStatusesPermissionToGraphql from './services/mailingCampaignStatuses/permissionsToGraphql';
import mailingCampaignsPermissionToGraphql from './services/mailingCampaigns/permissionsToGraphql';
import mailingMessageStatusesPermissionToGraphql from './services/mailingMessageStatuses/permissionsToGraphql';
import mailingMessagesPermissionToGraphql from './services/mailingMessages/permissionsToGraphql';
import mailingTypesPermissionToGraphql from './services/mailingTypes/permissionsToGraphql';
import managerLoginTypesPermissionToGraphql from './services/managerLoginTypes/permissionsToGraphql';
import managerLoginsPermissionToGraphql from './services/managerLogins/permissionsToGraphql';
import managersPermissionToGraphql from './services/managers/permissionsToGraphql';
import managersToPermissionsPermissionToGraphql from './services/managersToPermissions/permissionsToGraphql';
import managersToRolesPermissionToGraphql from './services/managersToRoles/permissionsToGraphql';
import matchPeriodMarkupsPermissionToGraphql from './services/matchPeriodMarkups/permissionsToGraphql';
import matchRequestsPermissionToGraphql from './services/matchRequests/permissionsToGraphql';
import matchStatusesPermissionToGraphql from './services/matchStatuses/permissionsToGraphql';
import matchVideosPermissionToGraphql from './services/matchVideos/permissionsToGraphql';
import matchesPermissionToGraphql from './services/matches/permissionsToGraphql';
import messageTemplateLangVariantsPermissionToGraphql from './services/messageTemplateLangVariants/permissionsToGraphql';
import messageTemplatesPermissionToGraphql from './services/messageTemplates/permissionsToGraphql';
import messageTypesPermissionToGraphql from './services/messageTypes/permissionsToGraphql';
import organizatorsPermissionToGraphql from './services/organizators/permissionsToGraphql';
import parentsPermissionToGraphql from './services/parents/permissionsToGraphql';
import periodTypesPermissionToGraphql from './services/periodTypes/permissionsToGraphql';
import permissionsPermissionToGraphql from './services/permissions/permissionsToGraphql';
import playerAggregatedRolesPermissionToGraphql from './services/playerAggregatedRoles/permissionsToGraphql';
import playerCompetitionRatingsPermissionToGraphql from './services/playerCompetitionRatings/permissionsToGraphql';
import playerForCompetitionTeamsPermissionToGraphql from './services/playerForCompetitionTeams/permissionsToGraphql';
import playerForMatchRequestsPermissionToGraphql from './services/playerForMatchRequests/permissionsToGraphql';
import playerForTeamMatchListsPermissionToGraphql from './services/playerForTeamMatchLists/permissionsToGraphql';
import playerMatchRatingsPermissionToGraphql from './services/playerMatchRatings/permissionsToGraphql';
import playerRanksPermissionToGraphql from './services/playerRanks/permissionsToGraphql';
import playerRolesPermissionToGraphql from './services/playerRoles/permissionsToGraphql';
import playersPermissionToGraphql from './services/players/permissionsToGraphql';
import reportForClubsPermissionToGraphql from './services/reportForClubs/permissionsToGraphql';
import reportForOrganizationsPermissionToGraphql from './services/reportForOrganizations/permissionsToGraphql';
import reportForParentsPermissionToGraphql from './services/reportForParents/permissionsToGraphql';
import reportForTeamsPermissionToGraphql from './services/reportForTeams/permissionsToGraphql';
import rolesPermissionToGraphql from './services/roles/permissionsToGraphql';
import rolesToPermissionsPermissionToGraphql from './services/rolesToPermissions/permissionsToGraphql';
import statsPermissionToGraphql from './services/stats/permissionsToGraphql';
import tagsPermissionToGraphql from './services/tags/permissionsToGraphql';
import teamForCompetitionsPermissionToGraphql from './services/teamForCompetitions/permissionsToGraphql';
import teamForPlayersPermissionToGraphql from './services/teamForPlayers/permissionsToGraphql';
import teamMatchListsPermissionToGraphql from './services/teamMatchLists/permissionsToGraphql';
import teamMatchReportsPermissionToGraphql from './services/teamMatchReports/permissionsToGraphql';
import teamsPermissionToGraphql from './services/teams/permissionsToGraphql';
import templateStylesPermissionToGraphql from './services/templateStyles/permissionsToGraphql';
import tenantsPermissionToGraphql from './services/tenants/permissionsToGraphql';
import unitsPermissionToGraphql from './services/units/permissionsToGraphql';
import usersPermissionToGraphql from './services/users/permissionsToGraphql';
import wscContactsPermissionToGraphql from './services/wscContacts/permissionsToGraphql';
import wscMessagesPermissionToGraphql from './services/wscMessages/permissionsToGraphql';
import wscUsersPermissionToGraphql from './services/wscUsers/permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

type queryKeys = keyof QueryResolvers;
type mutationKeys = keyof MutationResolvers;

export type PermissionToGraphql <T = any> = Record<
  keyof T,
  queryKeys | mutationKeys
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
  clubs: clubsPermissionToGraphql,
  competitions: competitionsPermissionToGraphql,
  configurationVariables: configurationVariablesPermissionToGraphql,
  delegations: delegationsPermissionToGraphql,
  entities: entitiesPermissionToGraphql,
  entitiesTrackings: entitiesTrackingsPermissionToGraphql,
  eventTypeCategories: eventTypeCategoriesPermissionToGraphql,
  eventTypes: eventTypesPermissionToGraphql,
  events: eventsPermissionToGraphql,
  files: filesPermissionToGraphql,
  glossaries: glossariesPermissionToGraphql,
  historyOfPlayerRoles: historyOfPlayerRolesPermissionToGraphql,
  languages: languagesPermissionToGraphql,
  mailingCampaignStatuses: mailingCampaignStatusesPermissionToGraphql,
  mailingCampaigns: mailingCampaignsPermissionToGraphql,
  mailingMessageStatuses: mailingMessageStatusesPermissionToGraphql,
  mailingMessages: mailingMessagesPermissionToGraphql,
  mailingTypes: mailingTypesPermissionToGraphql,
  managerLoginTypes: managerLoginTypesPermissionToGraphql,
  managerLogins: managerLoginsPermissionToGraphql,
  managers: managersPermissionToGraphql,
  managersToPermissions: managersToPermissionsPermissionToGraphql,
  managersToRoles: managersToRolesPermissionToGraphql,
  matchPeriodMarkups: matchPeriodMarkupsPermissionToGraphql,
  matchRequests: matchRequestsPermissionToGraphql,
  matchStatuses: matchStatusesPermissionToGraphql,
  matchVideos: matchVideosPermissionToGraphql,
  matches: matchesPermissionToGraphql,
  messageTemplateLangVariants: messageTemplateLangVariantsPermissionToGraphql,
  messageTemplates: messageTemplatesPermissionToGraphql,
  messageTypes: messageTypesPermissionToGraphql,
  organizators: organizatorsPermissionToGraphql,
  parents: parentsPermissionToGraphql,
  periodTypes: periodTypesPermissionToGraphql,
  permissions: permissionsPermissionToGraphql,
  playerAggregatedRoles: playerAggregatedRolesPermissionToGraphql,
  playerCompetitionRatings: playerCompetitionRatingsPermissionToGraphql,
  playerForCompetitionTeams: playerForCompetitionTeamsPermissionToGraphql,
  playerForMatchRequests: playerForMatchRequestsPermissionToGraphql,
  playerForTeamMatchLists: playerForTeamMatchListsPermissionToGraphql,
  playerMatchRatings: playerMatchRatingsPermissionToGraphql,
  playerRanks: playerRanksPermissionToGraphql,
  playerRoles: playerRolesPermissionToGraphql,
  players: playersPermissionToGraphql,
  reportForClubs: reportForClubsPermissionToGraphql,
  reportForOrganizations: reportForOrganizationsPermissionToGraphql,
  reportForParents: reportForParentsPermissionToGraphql,
  reportForTeams: reportForTeamsPermissionToGraphql,
  roles: rolesPermissionToGraphql,
  rolesToPermissions: rolesToPermissionsPermissionToGraphql,
  stats: statsPermissionToGraphql,
  tags: tagsPermissionToGraphql,
  teamForCompetitions: teamForCompetitionsPermissionToGraphql,
  teamForPlayers: teamForPlayersPermissionToGraphql,
  teamMatchLists: teamMatchListsPermissionToGraphql,
  teamMatchReports: teamMatchReportsPermissionToGraphql,
  teams: teamsPermissionToGraphql,
  templateStyles: templateStylesPermissionToGraphql,
  tenants: tenantsPermissionToGraphql,
  units: unitsPermissionToGraphql,
  users: usersPermissionToGraphql,
  wscContacts: wscContactsPermissionToGraphql,
  wscMessages: wscMessagesPermissionToGraphql,
  wscUsers: wscUsersPermissionToGraphql,
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
