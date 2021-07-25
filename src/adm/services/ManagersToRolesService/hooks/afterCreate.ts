/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ManagersToRole,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterCreate = async (
  _getCtx: () => Context,
  _data: ManagersToRole,
): Promise<void> => {};
