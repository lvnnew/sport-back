import {AdmRefreshTokensService} from '../../../services/AdmRefreshTokensService/AdmRefreshTokensService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const admRefreshTokensBasePermissionToGraphql:
  Partial<PermissionToGraphql<AdmRefreshTokensService>> = {
    meta: '_allAdmRefreshTokensMeta',
    get: 'AdmRefreshToken',
    all: 'allAdmRefreshTokens',
    create: 'createAdmRefreshToken',
    update: 'updateAdmRefreshToken',
    delete: 'removeAdmRefreshToken',
  };

export default admRefreshTokensBasePermissionToGraphql;
