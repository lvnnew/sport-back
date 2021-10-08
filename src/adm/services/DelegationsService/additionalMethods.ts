import {Context} from '../context';
import {BaseDelegationsMethods} from './DelegationsService';

export interface AdditionalDelegationsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseDelegationsMethods): AdditionalDelegationsMethods => ({});
