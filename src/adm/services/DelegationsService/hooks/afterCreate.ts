/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Delegation,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterCreate = async (
  _getCtx: () => Context,
  _data: Delegation,
): Promise<void> => {};
