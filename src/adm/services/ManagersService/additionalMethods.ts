import {Context} from '../types';
import {BaseManagersMethods} from './ManagersService';

export interface AdditionalManagersMethods {}

export const getAdditionalMethods = (_ctx: Context, _baseMethods: BaseManagersMethods): AdditionalManagersMethods => ({});
