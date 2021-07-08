/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseAppLoginsMethods} from './AppLoginsService';

export interface AdditionalAppLoginsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseAppLoginsMethods): AdditionalAppLoginsMethods => ({});
