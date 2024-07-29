import {Context} from '../../types';
import {
  ReliableOrganizatorCreateUserInput,
  StrictCreateOrganizatorArgs,
} from '../OrganizatorsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableOrganizatorCreateUserInput,
): Promise<StrictCreateOrganizatorArgs> => data;
