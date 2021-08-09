import {Context} from '../context';
import {BaseRolesToPermissionsMethods} from './RolesToPermissionsService';

export interface AdditionalRolesToPermissionsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseRolesToPermissionsMethods): AdditionalRolesToPermissionsMethods => ({});
