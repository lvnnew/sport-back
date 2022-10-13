import {Context} from '../../types';
import {
  ReliableMailingTypeCreateUserInput,
  StrictCreateMailingTypeArgs,
} from '../MailingTypesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMailingTypeCreateUserInput,
): Promise<StrictCreateMailingTypeArgs> => data;
