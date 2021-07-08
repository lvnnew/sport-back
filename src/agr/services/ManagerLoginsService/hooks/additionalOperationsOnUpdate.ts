import {
  MutationUpdateManagerLoginArgs,
} from '../../../../generated/graphql';
<<<<<<< HEAD
import {AgrContext} from '../../context';

export const additionalOperationsOnUpdate = (
  _getCtx: () => AgrContext,
=======
import {Context} from '../../context';

export const additionalOperationsOnUpdate = (
  _getCtx: () => Context,
>>>>>>> 6375169 (gen)
  _data: MutationUpdateManagerLoginArgs,
) => [];
