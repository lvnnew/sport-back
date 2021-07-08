/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseManagerLoginsMethods} from './ManagerLoginsService';

export interface AdditionalManagerLoginsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseManagerLoginsMethods): AdditionalManagerLoginsMethods => ({});
