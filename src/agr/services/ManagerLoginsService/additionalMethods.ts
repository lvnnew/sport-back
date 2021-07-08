/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {AgrContext} from '../context';
import {BaseManagerLoginsMethods} from './ManagerLoginsService';

export interface AdditionalManagerLoginsMethods {}

export const getAdditionalMethods = (_getCtx: () => AgrContext, _baseMethods: BaseManagerLoginsMethods): AdditionalManagerLoginsMethods => ({});
