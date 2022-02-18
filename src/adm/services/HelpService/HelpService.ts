import fs from 'fs-jetpack';

export interface HelpService {
  getHelp: (entityName: string) => Promise<string>;
}

const infoFilesForService = {
  admRefreshTokens: 'docs/catalogs/admRefreshTokens.md',
  appLogins: 'docs/catalogs/appLogins.md',
  appRefreshTokens: 'docs/catalogs/appRefreshTokens.md',
  auditLogActionTypes: 'docs/catalogs/auditLogActionTypes.md',
  auditLogs: 'docs/catalogs/auditLogs.md',
  autogenerationHistoryEntries: 'docs/catalogs/autogenerationHistoryEntries.md',
  autogenerationRules: 'docs/catalogs/autogenerationRules.md',
  delegations: 'docs/catalogs/delegations.md',
  entities: 'docs/catalogs/entities.md',
  files: 'docs/catalogs/files.md',
  languages: 'docs/catalogs/languages.md',
  managerLogins: 'docs/catalogs/managerLogins.md',
  managers: 'docs/catalogs/managers.md',
  managersToPermissions: 'docs/catalogs/managersToPermissions.md',
  managersToRoles: 'docs/catalogs/managersToRoles.md',
  messageTemplates: 'docs/catalogs/messageTemplates.md',
  messageTypes: 'docs/catalogs/messageTypes.md',
  permissions: 'docs/catalogs/permissions.md',
  roles: 'docs/catalogs/roles.md',
  rolesToPermissions: 'docs/catalogs/rolesToPermissions.md',
  stats: 'docs/catalogs/stats.md',
  tags: 'docs/catalogs/tags.md',
  units: 'docs/catalogs/units.md',
  users: 'docs/catalogs/users.md',
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
