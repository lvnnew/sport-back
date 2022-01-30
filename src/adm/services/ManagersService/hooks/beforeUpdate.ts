import {
  MutationUpdateManagerArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateManagerArgs,
): Promise<MutationUpdateManagerArgs> => ({
  title: `${data.firstName} ${data.lastName}`,
  ...data,
});
