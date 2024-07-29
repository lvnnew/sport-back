import fs from 'fs-jetpack';

export interface HelpService {
  getHelp: (entityName: string) => Promise<string>;
}

const infoFilesForService = {
  admRefreshTokens: 'docs/catalogs/admRefreshTokens.md',
  aggregateTrackings: 'docs/infoRegistries/aggregateTrackings.md',
  appLogins: 'docs/catalogs/appLogins.md',
  appRefreshTokens: 'docs/catalogs/appRefreshTokens.md',
  auditLogActionTypes: 'docs/catalogs/auditLogActionTypes.md',
  auditLogs: 'docs/catalogs/auditLogs.md',
  autogenerationHistoryEntries: 'docs/catalogs/autogenerationHistoryEntries.md',
  autogenerationRules: 'docs/catalogs/autogenerationRules.md',
  clubs: 'docs/catalogs/clubs.md',
  competitions: 'docs/catalogs/competitions.md',
  configurationVariables: 'docs/catalogs/configurationVariables.md',
  delegations: 'docs/catalogs/delegations.md',
  entities: 'docs/catalogs/entities.md',
  entitiesTrackings: 'docs/catalogs/entitiesTrackings.md',
  eventTypeCategories: 'docs/catalogs/eventTypeCategories.md',
  eventTypes: 'docs/catalogs/eventTypes.md',
  events: 'docs/documents/events.md',
  files: 'docs/catalogs/files.md',
  glossaries: 'docs/catalogs/glossaries.md',
  historyOfPlayerRoles: 'docs/catalogs/historyOfPlayerRoles.md',
  languages: 'docs/catalogs/languages.md',
  mailingCampaignStatuses: 'docs/catalogs/mailingCampaignStatuses.md',
  mailingCampaigns: 'docs/catalogs/mailingCampaigns.md',
  mailingMessageStatuses: 'docs/catalogs/mailingMessageStatuses.md',
  mailingMessages: 'docs/catalogs/mailingMessages.md',
  mailingTypes: 'docs/catalogs/mailingTypes.md',
  managerLoginTypes: 'docs/catalogs/managerLoginTypes.md',
  managerLogins: 'docs/catalogs/managerLogins.md',
  managers: 'docs/catalogs/managers.md',
  managersToPermissions: 'docs/catalogs/managersToPermissions.md',
  managersToRoles: 'docs/catalogs/managersToRoles.md',
  matchPeriodMarkups: 'docs/catalogs/matchPeriodMarkups.md',
  matchRequests: 'docs/catalogs/matchRequests.md',
  matchStatuses: 'docs/catalogs/matchStatuses.md',
  matchVideos: 'docs/catalogs/matchVideos.md',
  matches: 'docs/catalogs/matches.md',
  messageTemplateLangVariants: 'docs/catalogs/messageTemplateLangVariants.md',
  messageTemplates: 'docs/catalogs/messageTemplates.md',
  messageTypes: 'docs/catalogs/messageTypes.md',
  organizators: 'docs/catalogs/organizators.md',
  parents: 'docs/catalogs/parents.md',
  periodTypes: 'docs/catalogs/periodTypes.md',
  permissions: 'docs/catalogs/permissions.md',
  playerAggregatedRoles: 'docs/catalogs/playerAggregatedRoles.md',
  playerCompetitionRatings: 'docs/catalogs/playerCompetitionRatings.md',
  playerForCompetitionTeams: 'docs/catalogs/playerForCompetitionTeams.md',
  playerForMatchRequests: 'docs/catalogs/playerForMatchRequests.md',
  playerForTeamMatchLists: 'docs/catalogs/playerForTeamMatchLists.md',
  playerMatchRatings: 'docs/catalogs/playerMatchRatings.md',
  playerRanks: 'docs/catalogs/playerRanks.md',
  playerRoles: 'docs/catalogs/playerRoles.md',
  players: 'docs/catalogs/players.md',
  reportForClubs: 'docs/catalogs/reportForClubs.md',
  reportForOrganizations: 'docs/catalogs/reportForOrganizations.md',
  reportForParents: 'docs/catalogs/reportForParents.md',
  reportForTeams: 'docs/catalogs/reportForTeams.md',
  roles: 'docs/catalogs/roles.md',
  rolesToPermissions: 'docs/catalogs/rolesToPermissions.md',
  stats: 'docs/catalogs/stats.md',
  tags: 'docs/catalogs/tags.md',
  teamForCompetitions: 'docs/catalogs/teamForCompetitions.md',
  teamForPlayers: 'docs/catalogs/teamForPlayers.md',
  teamMatchLists: 'docs/catalogs/teamMatchLists.md',
  teamMatchReports: 'docs/catalogs/teamMatchReports.md',
  teams: 'docs/catalogs/teams.md',
  templateStyles: 'docs/catalogs/templateStyles.md',
  tenants: 'docs/catalogs/tenants.md',
  units: 'docs/catalogs/units.md',
  users: 'docs/catalogs/users.md',
  wscContacts: 'docs/catalogs/wscContacts.md',
  wscMessages: 'docs/catalogs/wscMessages.md',
  wscUsers: 'docs/catalogs/wscUsers.md',
};

export const getHelpService = (): HelpService => {
  const getHelp = async (entityName: string) => {
    const foundDoc = infoFilesForService[entityName];

    if (!foundDoc) {
      throw new Error(`No info document found for entity type: ${entityName}`);
    }

    return fs.read(foundDoc) as string;
  };

  return {
    getHelp,
  };
};
