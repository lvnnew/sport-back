import {
  ReliableManagerCreateUserInput,
  StrictCreateManagerArgs,
} from '../ManagersService';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableManagerCreateUserInput,
): Promise<StrictCreateManagerArgs> => ({
  title: `${data.firstName} ${data.lastName}`,
  ...data,
});
