import {
  StrictUpdateOrganizatorArgs,
} from '../OrganizatorsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateOrganizatorArgs,
): Promise<StrictUpdateOrganizatorArgs> => data;
