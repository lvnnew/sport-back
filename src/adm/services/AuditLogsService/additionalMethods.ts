import {Context} from '../context';
import {BaseAuditLogsMethods} from './AuditLogsService';

export interface AdditionalAuditLogsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseAuditLogsMethods): AdditionalAuditLogsMethods => ({});
