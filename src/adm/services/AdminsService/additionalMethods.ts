/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseAdminsMethods} from './AdminsService';

export interface AdditionalAdminsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseAdminsMethods): AdditionalAdminsMethods => ({});
