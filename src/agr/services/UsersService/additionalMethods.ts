/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseUsersMethods} from './UsersService';

export interface AdditionalUsersMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseUsersMethods): AdditionalUsersMethods => ({});
