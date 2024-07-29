import {
  StrictUpdateMatchVideoArgs,
} from '../MatchVideosService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMatchVideoArgs,
): Promise<StrictUpdateMatchVideoArgs> => data;
