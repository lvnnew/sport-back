/* eslint-disable @typescript-eslint/no-empty-function */
import {
  RolesToPermission,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterUpdate = async (
  _getCtx: () => Context,
  _data: RolesToPermission,
): Promise<void> => {};
