/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AppLogin,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const afterCreate = async (
  _getCtx: () => AgrContext,
  _data: AppLogin,
): Promise<void> => {};
