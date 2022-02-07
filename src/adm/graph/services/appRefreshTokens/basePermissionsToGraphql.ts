import {AppRefreshTokensService} from '../../../services/AppRefreshTokensService/AppRefreshTokensService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const appRefreshTokensBasePermissionToGraphql: Partial<PermissionToGraphql<AppRefreshTokensService>> = {
  meta: '_allAppRefreshTokensMeta',
  get: 'AppRefreshToken',
  all: 'allAppRefreshTokens',
  create: 'createAppRefreshToken',
  update: 'removeAppRefreshToken',
  delete: 'updateAppRefreshToken',
};

export default appRefreshTokensBasePermissionToGraphql;
