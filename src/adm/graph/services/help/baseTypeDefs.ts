import {gql} from 'apollo-server';

export default gql`
enum EntityType {
  appLogins
  auditLogs
  delegations
  files
  languages
  managerLogins
  managers
  managersToPermissions
  managersToRoles
  messageTemplates
  permissions
  roles
  rolesToPermissions
  stats
  tags
  units
  users
}

type Query {
  getHelp(entityType: EntityType!): String!
}
`;

