/* eslint-disable @typescript-eslint/no-empty-function */
import {
  User,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterDelete = async (
  _ctx: Context,
  _data: User,
): Promise<void> => {};
