/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AppLogin,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterUpdate = async (
  _getCtx: () => Context,
  _data: AppLogin,
): Promise<void> => {};
