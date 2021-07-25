/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseRolesMethods} from './RolesService';

export interface AdditionalRolesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseRolesMethods): AdditionalRolesMethods => ({});
