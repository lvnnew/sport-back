/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseRolesToPermissionsMethods} from './RolesToPermissionsService';

export interface AdditionalRolesToPermissionsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseRolesToPermissionsMethods): AdditionalRolesToPermissionsMethods => ({});
