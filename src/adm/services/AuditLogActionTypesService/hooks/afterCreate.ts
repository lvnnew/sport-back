/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AuditLogActionType,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterCreate = async (
  _getCtx: () => Context,
  _data: AuditLogActionType,
): Promise<void> => {};
