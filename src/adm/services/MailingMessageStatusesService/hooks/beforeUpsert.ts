import {Context} from '../../types';
import {
  StrictUpdateMailingMessageStatusArgs,
  StrictCreateMailingMessageStatusArgs,
  ReliableMailingMessageStatusCreateUserInput,
} from '../MailingMessageStatusesService';

type InputData = {
  createData: ReliableMailingMessageStatusCreateUserInput,
  updateData: StrictUpdateMailingMessageStatusArgs,
};
type ReturnData = {
  createData: StrictCreateMailingMessageStatusArgs,
  updateData: StrictUpdateMailingMessageStatusArgs,
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
