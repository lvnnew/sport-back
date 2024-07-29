import {gql} from 'apollo-server';

export default gql`
  enum EntityType {
    admRefreshTokens
    aggregateTrackings
    appLogins
    appRefreshTokens
    auditLogActionTypes
    auditLogs
    autogenerationHistoryEntries
    autogenerationRules
    clubs
    competitions
    configurationVariables
    delegations
    entities
    entitiesTrackings
    eventTypeCategories
    eventTypes
    events
    files
    glossaries
    historyOfPlayerRoles
    languages
    mailingCampaignStatuses
    mailingCampaigns
    mailingMessageStatuses
    mailingMessages
    mailingTypes
    managerLoginTypes
    managerLogins
    managers
    managersToPermissions
    managersToRoles
    matchPeriodMarkups
    matchRequests
    matchStatuses
    matchVideos
    matches
    messageTemplateLangVariants
    messageTemplates
    messageTypes
    organizators
    parents
    periodTypes
    permissions
    playerAggregatedRoles
    playerCompetitionRatings
    playerForCompetitionTeams
    playerForMatchRequests
    playerForTeamMatchLists
    playerMatchRatings
    playerRanks
    playerRoles
    players
    reportForClubs
    reportForOrganizations
    reportForParents
    reportForTeams
    roles
    rolesToPermissions
    stats
    tags
    teamForCompetitions
    teamForPlayers
    teamMatchLists
    teamMatchReports
    teams
    templateStyles
    tenants
    units
    users
    wscContacts
    wscMessages
    wscUsers
  }

  type Query {
    getHelp(entityType: EntityType!): String!
  }
`;

