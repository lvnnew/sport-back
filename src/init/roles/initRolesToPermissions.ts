import {getRuntimePermissions} from '../../adm/services/getRuntimePermissions';
import {Context} from '../../adm/services/types';
import log from '../../log';
import Role from '../../types/Role';

interface PermissionsOfRole {
  roleId: Role,
  permissionIds: string[],
}

const initRolesToPermissions = async (ctx: Context) => {
  log.info('initRolesToPermissions started');
  const startedAt = Date.now();
  const allPermissions = getRuntimePermissions(ctx);

  const getPermissionsOnService = (permissionTypes: string[], service: string) =>
    permissionTypes.map(permission => `${service}.${permission}`);
  const getAllServicePermissions = (serviceName: string) => allPermissions.filter(({service}) => service === serviceName);
  const getAllServicePermissionsWithoutDelete = (serviceName: string) => allPermissions
    .filter(({service}) => service === serviceName)
    .filter(el => el.name !== 'delete');

  const readPermissionNames = [
    'get',
    'all',
    'meta',
  ];

  const baseCatalogs = [
    'teams',
    'parents',
    'clubs',
    'players',
    'glossaries',
    'playerRanks',
    'periodTypes',
    'organizators',
    'competitions',
    'matchStatuses',
    'playerRoles',
    'eventTypes',
    'eventTypeCategories',
    'playerAggregatedRoles',
    'teamForPlayers',
    'playerCompetitionRatings',
    'playerMatchRatings',
  ];

  const reportCatalogs = [
    'reportForParents',
    'reportForClubs',
    'reportForOrganizations',
    'teamMatchReports',
    'reportForTeams',
  ];

  const matchMarkupCatalogs = [
    'matches',
    'matchVideos',
    'events',
    'matchPeriodMarkups',
    'matchRequests',
    'historyOfPlayerRoles',
    'teamMatchLists',
    'teamForCompetitions',
    'playerForMatchRequests',
    'playerForTeamMatchLists',
    'playerForCompetitionTeams',
  ];

  const commenterPermissions = [
    'commenting',
  ];

  const analystPermissions: string[] =
    [
      'spaAnalyst',
      ...matchMarkupCatalogs,
    ].flatMap(service => getAllServicePermissions(service)).map(p => p.id);

  analystPermissions.push(
    ...baseCatalogs.flatMap(service => getPermissionsOnService(readPermissionNames, service)),
    ...matchMarkupCatalogs.flatMap(service => getAllServicePermissions(service)).map(p => p.id),
    ...reportCatalogs.flatMap(service => getAllServicePermissionsWithoutDelete(service)).map(p => p.id),
  );

  const permissionsOfRoles: PermissionsOfRole[] = [];

  permissionsOfRoles.push(
    {
      roleId: Role.Commenter,
      permissionIds: commenterPermissions,
    },
    {
      roleId: Role.Analyst,
      permissionIds: analystPermissions,
    },
  );

  const rolesToPermissions = permissionsOfRoles
    .flatMap(permissionsOfRole => permissionsOfRole.permissionIds.map(el => ({
      roleId: permissionsOfRole.roleId,
      permissionId: el,
    })));

  await ctx.service('rolesToPermissions').createMany(rolesToPermissions);

  log.info(`initRolesToPermissions finished, took: ${Math.ceil((Date.now() - startedAt) / 1000)} sec`);
};

export default initRolesToPermissions;
