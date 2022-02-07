import admRefreshTokensBasePermissionToGraphql from './basePermissionsToGraphql';
import admRefreshTokensAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {AdmRefreshTokensService} from '../../../services/AdmRefreshTokensService/AdmRefreshTokensService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const admRefreshTokensPermissionToGraphql: Partial<PermissionToGraphql<AdmRefreshTokensService>> = {
  ...admRefreshTokensBasePermissionToGraphql,
  ...admRefreshTokensAdditionalPermissionToGraphql,
};

export default admRefreshTokensPermissionToGraphql;
