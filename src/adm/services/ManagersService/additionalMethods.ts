import {Context} from '../context';
import {BaseManagersMethods} from './ManagersService';

export interface AdditionalManagersMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseManagersMethods): AdditionalManagersMethods => ({});
