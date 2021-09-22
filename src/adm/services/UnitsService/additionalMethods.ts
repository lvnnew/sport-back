import {Context} from '../context';
import {BaseUnitsMethods} from './UnitsService';

export interface AdditionalUnitsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseUnitsMethods): AdditionalUnitsMethods => ({});
