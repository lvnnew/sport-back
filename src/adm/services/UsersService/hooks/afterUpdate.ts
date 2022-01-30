/* eslint-disable @typescript-eslint/no-empty-function */
import {
  User,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterUpdate = async (
  _ctx: Context,
  _data: User,
): Promise<void> => {};
