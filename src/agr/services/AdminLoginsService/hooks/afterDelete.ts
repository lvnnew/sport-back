/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AdminLogin,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const afterDelete = async (
  _getCtx: () => AgrContext,
  _data: AdminLogin,
): Promise<void> => {};
