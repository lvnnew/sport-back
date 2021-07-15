import {
  MutationCreateManagerArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateManagerArgs,
): Promise<MutationCreateManagerArgs> => ({
  title: `${data.firstName} ${data.lastName}`,
  ...data,
});
