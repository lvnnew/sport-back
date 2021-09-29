import {Context} from '../context';
import {BaseManagersToPermissionsMethods} from './ManagersToPermissionsService';

export interface AdditionalManagersToPermissionsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseManagersToPermissionsMethods): AdditionalManagersToPermissionsMethods => ({});
