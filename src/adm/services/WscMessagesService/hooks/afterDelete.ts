/* eslint-disable @typescript-eslint/no-empty-function */
import {
  WscMessage,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterDelete = async (
  _ctx: Context,
  _data: WscMessage,
): Promise<void> => {};
