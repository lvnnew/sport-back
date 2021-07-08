import {
  MutationCreateManagerLoginArgs,
} from '../../../../generated/graphql';
<<<<<<< HEAD
import {AgrContext} from '../../context';

export const additionalOperationsOnCreate = (
  _getCtx: () => AgrContext,
=======
import {Context} from '../../context';

export const additionalOperationsOnCreate = (
  _getCtx: () => Context,
>>>>>>> 6375169 (gen)
  _data: MutationCreateManagerLoginArgs,
) => [];
