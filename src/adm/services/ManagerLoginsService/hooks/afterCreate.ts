/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ManagerLogin,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterCreate = async (
  _getCtx: () => Context,
  _data: ManagerLogin,
): Promise<void> => {};
