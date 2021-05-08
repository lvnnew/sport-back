/* eslint-disable @typescript-eslint/no-empty-function */
import {
  User,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const afterCreate = async (
  _getCtx: () => AgrContext,
  _data: User,
): Promise<void> => {};
