/* eslint-disable @typescript-eslint/no-empty-function */
import {
  MailingMessageStatus,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterUpdate = async (
  _ctx: Context,
  _data: MailingMessageStatus,
): Promise<void> => {};
