/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {AgrContext} from '../context';
import {BaseAdminsMethods} from './AdminsService';

export interface AdditionalAdminsMethods {}

export const getAdditionalMethods = (_getCtx: () => AgrContext, _baseMethods: BaseAdminsMethods): AdditionalAdminsMethods => ({});
