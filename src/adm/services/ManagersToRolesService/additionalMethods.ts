/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseManagersToRolesMethods} from './ManagersToRolesService';

export interface AdditionalManagersToRolesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseManagersToRolesMethods): AdditionalManagersToRolesMethods => ({});
