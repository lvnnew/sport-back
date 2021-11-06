import fs from 'fs-jetpack';

export interface HelpService {
  getHelp: (entityName: string) => Promise<string>;
}

const infoFilesForService = {
  appLogins: 'docs/catalogs/appLogins.md',
  auditLogs: 'docs/catalogs/auditLogs.md',
  delegations: 'docs/catalogs/delegations.md',
  files: 'docs/catalogs/files.md',
  languages: 'docs/catalogs/languages.md',
  managerLogins: 'docs/catalogs/managerLogins.md',
  managers: 'docs/catalogs/managers.md',
  managersToPermissions: 'docs/catalogs/managersToPermissions.md',
  managersToRoles: 'docs/catalogs/managersToRoles.md',
  messageTemplates: 'docs/catalogs/messageTemplates.md',
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
