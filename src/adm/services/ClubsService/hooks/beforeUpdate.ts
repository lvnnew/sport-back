import {
  StrictUpdateClubArgs,
} from '../ClubsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateClubArgs,
): Promise<StrictUpdateClubArgs> => data;
