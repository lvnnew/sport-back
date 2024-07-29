/* eslint-disable @typescript-eslint/no-empty-function */
import {
  WscMessage,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterUpdate = async (
  _ctx: Context,
  _data: WscMessage,
): Promise<void> => {};
