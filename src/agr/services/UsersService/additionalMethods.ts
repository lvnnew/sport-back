/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {AgrContext} from '../context';
import {BaseUsersMethods} from './UsersService';

export interface AdditionalUsersMethods {}

export const getAdditionalMethods = (_getCtx: () => AgrContext, _baseMethods: BaseUsersMethods): AdditionalUsersMethods => ({});
