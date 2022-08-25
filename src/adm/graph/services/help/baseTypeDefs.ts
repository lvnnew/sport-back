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
    delegations
    entities
    files
    languages
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

