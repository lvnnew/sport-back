import {Context} from '../context';
import {BaseManagersToRolesMethods} from './ManagersToRolesService';

export interface AdditionalManagersToRolesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseManagersToRolesMethods): AdditionalManagersToRolesMethods => ({});
