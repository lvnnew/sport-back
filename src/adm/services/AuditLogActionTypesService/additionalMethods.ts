import {Context} from '../context';
import {BaseAuditLogActionTypesMethods} from './AuditLogActionTypesService';

export interface AdditionalAuditLogActionTypesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseAuditLogActionTypesMethods): AdditionalAuditLogActionTypesMethods => ({});
