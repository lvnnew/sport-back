/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {AgrContext} from '../context';
import {BaseAppLoginsMethods} from './AppLoginsService';

export interface AdditionalAppLoginsMethods {}

export const getAdditionalMethods = (_getCtx: () => AgrContext, _baseMethods: BaseAppLoginsMethods): AdditionalAppLoginsMethods => ({});
