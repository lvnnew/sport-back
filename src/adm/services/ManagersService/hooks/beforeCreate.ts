import {
  MutationCreateManagerArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateManagerArgs,
): Promise<MutationCreateManagerArgs> => ({
  title: `${data.firstName} ${data.lastName}`,
  ...data,
});
