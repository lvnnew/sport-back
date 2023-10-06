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
    configurationVariables
    delegations
    entities
    files
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
    messageTemplateLangVariants
    messageTemplates
    messageTypes
    permissions
    roles
    rolesToPermissions
    stats
    tags
    templateStyles
    tenants
    units
    users
  }

  type Query {
    getHelp(entityType: EntityType!): String!
  }
`;

