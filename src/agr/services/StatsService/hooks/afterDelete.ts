/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Stat,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const afterDelete = async (
  _getCtx: () => AgrContext,
  _data: Stat,
): Promise<void> => {};
