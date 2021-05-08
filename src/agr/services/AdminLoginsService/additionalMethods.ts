/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {AgrContext} from '../context';
import {BaseAdminLoginsMethods} from './AdminLoginsService';

export interface AdditionalAdminLoginsMethods {}

export const getAdditionalMethods = (_getCtx: () => AgrContext, _baseMethods: BaseAdminLoginsMethods): AdditionalAdminLoginsMethods => ({});
