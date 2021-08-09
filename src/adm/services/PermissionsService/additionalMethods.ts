import {Context} from '../context';
import {BasePermissionsMethods} from './PermissionsService';

export interface AdditionalPermissionsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BasePermissionsMethods): AdditionalPermissionsMethods => ({});
