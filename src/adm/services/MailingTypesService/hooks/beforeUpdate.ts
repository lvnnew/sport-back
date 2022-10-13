import {
  StrictUpdateMailingTypeArgs,
} from '../MailingTypesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMailingTypeArgs,
): Promise<StrictUpdateMailingTypeArgs> => data;
