/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ManagerLogin,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const afterDelete = async (
  _getCtx: () => AgrContext,
  _data: ManagerLogin,
): Promise<void> => {};
