import {Context} from '../context';
import {BaseAppLoginsMethods} from './AppLoginsService';

export interface AdditionalAppLoginsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseAppLoginsMethods): AdditionalAppLoginsMethods => ({});
