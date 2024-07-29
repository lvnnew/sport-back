import {Context} from '../../types';
import {
  StrictUpdateOrganizatorArgs,
  StrictCreateOrganizatorArgs,
  ReliableOrganizatorCreateUserInput,
} from '../OrganizatorsService';

type InputData = {
  createData: ReliableOrganizatorCreateUserInput,
  updateData: StrictUpdateOrganizatorArgs,
};
type ReturnData = {
  createData: StrictCreateOrganizatorArgs,
  updateData: StrictUpdateOrganizatorArgs,
};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: InputData,
): Promise<ReturnData> => {
  return {
    createData,
    updateData,
  };
};
