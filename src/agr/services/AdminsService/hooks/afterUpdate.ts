/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Admin,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const afterUpdate = async (
  _getCtx: () => AgrContext,
  _data: Admin,
): Promise<void> => {};
