import {
  MutationRemoveManagerLoginArgs,
} from '../../../../generated/graphql';
<<<<<<< HEAD
import {AgrContext} from '../../context';

export const additionalOperationsOnDelete = (
  _getCtx: () => AgrContext,
=======
import {Context} from '../../context';

export const additionalOperationsOnDelete = (
  _getCtx: () => Context,
>>>>>>> 6375169 (gen)
  _data: MutationRemoveManagerLoginArgs,
) => [];
