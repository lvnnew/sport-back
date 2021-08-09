import {Context} from '../context';
import {BaseUsersMethods} from './UsersService';

export interface AdditionalUsersMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseUsersMethods): AdditionalUsersMethods => ({});
