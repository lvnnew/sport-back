/* eslint-disable @typescript-eslint/no-empty-function */
import {
  User,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterUpdate = async (
  _getCtx: () => Context,
  _data: User,
): Promise<void> => {};
