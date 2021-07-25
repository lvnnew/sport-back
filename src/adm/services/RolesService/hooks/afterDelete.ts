/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Role,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterDelete = async (
  _getCtx: () => Context,
  _data: Role,
): Promise<void> => {};
