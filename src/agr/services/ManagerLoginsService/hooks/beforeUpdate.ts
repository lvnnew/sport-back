import {
  MutationUpdateManagerLoginArgs,
} from '../../../../generated/graphql';
<<<<<<< HEAD
import {AgrContext} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => AgrContext,
=======
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
>>>>>>> 6375169 (gen)
  data: MutationUpdateManagerLoginArgs,
): Promise<MutationUpdateManagerLoginArgs> => data;
