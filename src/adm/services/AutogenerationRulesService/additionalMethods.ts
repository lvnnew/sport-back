import {Context} from '../context';
import {BaseAutogenerationRulesMethods} from './AutogenerationRulesService';

export interface AdditionalAutogenerationRulesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseAutogenerationRulesMethods): AdditionalAutogenerationRulesMethods => ({});
