/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AuditLog,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterDelete = async (
  _getCtx: () => Context,
  _data: AuditLog,
): Promise<void> => {};
