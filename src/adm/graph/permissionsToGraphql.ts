import * as R from 'ramda';
import {additionalServicesPermissionToGraphql} from './additionalServicesPermissionToGraphql';
import {MutationResolvers, QueryResolvers} from '../../generated/graphql';
import {Services} from '../services/context';
import filesPermissionToGraphql from './services/files/permissionsToGraphql';
import languagesPermissionToGraphql from './services/languages/permissionsToGraphql';
import usersPermissionToGraphql from './services/users/permissionsToGraphql';
import appLoginsPermissionToGraphql from './services/appLogins/permissionsToGraphql';
import managersPermissionToGraphql from './services/managers/permissionsToGraphql';
import managerLoginsPermissionToGraphql from './services/managerLogins/permissionsToGraphql';
import rolesPermissionToGraphql from './services/roles/permissionsToGraphql';
import permissionsPermissionToGraphql from './services/permissions/permissionsToGraphql';
import rolesToPermissionsPermissionToGraphql from './services/rolesToPermissions/permissionsToGraphql';
import managersToRolesPermissionToGraphql from './services/managersToRoles/permissionsToGraphql';
import statsPermissionToGraphql from './services/stats/permissionsToGraphql';
import tagsPermissionToGraphql from './services/tags/permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

type queryFiles = keyof QueryResolvers;
type mutationFiles = keyof MutationResolvers;

export type PermissionToGraphql <T = any> = Record<
  keyof T,
  queryFiles | mutationFiles
>

export const permissionsToGraphql: Partial<Record<keyof Services, Partial<PermissionToGraphql>>> = {
  ...additionalServicesPermissionToGraphql,
  files: filesPermissionToGraphql,
  languages: languagesPermissionToGraphql,
  users: usersPermissionToGraphql,
  appLogins: appLoginsPermissionToGraphql,
  managers: managersPermissionToGraphql,
  managerLogins: managerLoginsPermissionToGraphql,
  roles: rolesPermissionToGraphql,
  permissions: permissionsPermissionToGraphql,
  rolesToPermissions: rolesToPermissionsPermissionToGraphql,
  managersToRoles: managersToRolesPermissionToGraphql,
  stats: statsPermissionToGraphql,
  tags: tagsPermissionToGraphql,
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
