/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AuditLog,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterUpdate = async (
  _ctx: Context,
  _data: AuditLog,
): Promise<void> => {};
