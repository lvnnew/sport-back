import {Context} from '../types';
import {BasePermissionsMethods} from './PermissionsService';

export interface AdditionalPermissionsMethods {}

export const getAdditionalMethods = (_ctx: Context, _baseMethods: BasePermissionsMethods): AdditionalPermissionsMethods => ({});
