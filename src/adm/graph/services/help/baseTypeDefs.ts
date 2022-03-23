import {gql} from 'apollo-server';

export default gql`
  enum EntityType {
    admRefreshTokens
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
    messageTemplates
    messageTypes
    permissions
    roles
    rolesToPermissions
    stats
    tags
    tenants
    units
    users
  }

  type Query {
    getHelp(entityType: EntityType!): String!
  }
`;

