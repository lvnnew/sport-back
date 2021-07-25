/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Role,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterCreate = async (
  _getCtx: () => Context,
  _data: Role,
): Promise<void> => {};
