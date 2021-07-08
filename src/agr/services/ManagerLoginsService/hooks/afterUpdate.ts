/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ManagerLogin,
} from '../../../../generated/graphql';
<<<<<<< HEAD
import {AgrContext} from '../../context';

export const afterUpdate = async (
  _getCtx: () => AgrContext,
=======
import {Context} from '../../context';

export const afterUpdate = async (
  _getCtx: () => Context,
>>>>>>> 6375169 (gen)
  _data: ManagerLogin,
): Promise<void> => {};
