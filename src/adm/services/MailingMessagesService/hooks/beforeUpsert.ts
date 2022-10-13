import {Context} from '../../types';
import {
  StrictUpdateMailingMessageArgs,
  StrictCreateMailingMessageArgs,
  ReliableMailingMessageCreateUserInput,
} from '../MailingMessagesService';

type InputData = {
  createData: ReliableMailingMessageCreateUserInput,
  updateData: StrictUpdateMailingMessageArgs,
};
type ReturnData = {
  createData: StrictCreateMailingMessageArgs,
  updateData: StrictUpdateMailingMessageArgs,
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
