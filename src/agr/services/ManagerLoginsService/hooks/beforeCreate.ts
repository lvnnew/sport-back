import {
  MutationCreateManagerLoginArgs,
} from '../../../../generated/graphql';
<<<<<<< HEAD
import {AgrContext} from '../../context';

export const beforeCreate = async (
  _getCtx: () => AgrContext,
=======
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
>>>>>>> 6375169 (gen)
  data: MutationCreateManagerLoginArgs,
): Promise<MutationCreateManagerLoginArgs> => data;
