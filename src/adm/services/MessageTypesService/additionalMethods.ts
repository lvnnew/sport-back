import {Context} from '../types';
import {BaseMessageTypesMethods} from './MessageTypesService';

export interface AdditionalMessageTypesMethods {}

export const getAdditionalMethods = (_ctx: Context, _baseMethods: BaseMessageTypesMethods): AdditionalMessageTypesMethods => ({});
