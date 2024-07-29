/* eslint-disable @typescript-eslint/no-empty-function */
import {
  WscUser,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterCreate = async (
  _ctx: Context,
  _data: WscUser,
): Promise<void> => {};
