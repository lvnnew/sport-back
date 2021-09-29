/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ManagersToPermission,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterUpdate = async (
  _getCtx: () => Context,
  _data: ManagersToPermission,
): Promise<void> => {};
