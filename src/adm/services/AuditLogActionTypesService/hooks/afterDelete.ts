/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AuditLogActionType,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterDelete = async (
  _ctx: Context,
  _data: AuditLogActionType,
): Promise<void> => {};
