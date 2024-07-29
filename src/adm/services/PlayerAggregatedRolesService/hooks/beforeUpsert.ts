import {Context} from '../../types';
import {
  StrictUpdatePlayerAggregatedRoleArgs,
  StrictCreatePlayerAggregatedRoleArgs,
  ReliablePlayerAggregatedRoleCreateUserInput,
} from '../PlayerAggregatedRolesService';

type InputData = {
  createData: ReliablePlayerAggregatedRoleCreateUserInput,
  updateData: StrictUpdatePlayerAggregatedRoleArgs,
};
type ReturnData = {
  createData: StrictCreatePlayerAggregatedRoleArgs,
  updateData: StrictUpdatePlayerAggregatedRoleArgs,
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
