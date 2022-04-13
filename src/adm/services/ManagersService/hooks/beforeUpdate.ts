import {
  StrictUpdateManagerArgs,
} from '../ManagersService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateManagerArgs,
): Promise<StrictUpdateManagerArgs> => ({
  title: `${data.firstName} ${data.lastName}`,
  ...data,
});
