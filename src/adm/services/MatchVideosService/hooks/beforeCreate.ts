import {Context} from '../../types';
import {
  ReliableMatchVideoCreateUserInput,
  StrictCreateMatchVideoArgs,
} from '../MatchVideosService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMatchVideoCreateUserInput,
): Promise<StrictCreateMatchVideoArgs> => data;
