import {Context} from '../types';
import {BaseEntitiesMethods} from './EntitiesService';

export interface AdditionalEntitiesMethods {}

export const getAdditionalMethods = (_ctx: Context, _baseMethods: BaseEntitiesMethods): AdditionalEntitiesMethods => ({});
