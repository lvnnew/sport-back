import {Context} from '../../types';
import {
  ReliableClubCreateUserInput,
  StrictCreateClubArgs,
} from '../ClubsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableClubCreateUserInput,
): Promise<StrictCreateClubArgs> => data;
