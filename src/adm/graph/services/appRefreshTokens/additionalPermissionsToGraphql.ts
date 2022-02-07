import appRefreshTokensBasePermissionToGraphql from './basePermissionsToGraphql';
import appRefreshTokensAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {AppRefreshTokensService} from '../../../services/AppRefreshTokensService/AppRefreshTokensService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const appRefreshTokensPermissionToGraphql: Partial<PermissionToGraphql<AppRefreshTokensService>> = {
  ...appRefreshTokensBasePermissionToGraphql,
  ...appRefreshTokensAdditionalPermissionToGraphql,
};

export default appRefreshTokensPermissionToGraphql;
