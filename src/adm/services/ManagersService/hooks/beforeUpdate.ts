import {
  MutationUpdateManagerArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateManagerArgs,
): Promise<MutationUpdateManagerArgs> => ({
  title: `${data.firstName} ${data.lastName}`,
  ...data,
});
