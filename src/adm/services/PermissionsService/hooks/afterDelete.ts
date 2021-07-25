/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Permission,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterDelete = async (
  _getCtx: () => Context,
  _data: Permission,
): Promise<void> => {};
