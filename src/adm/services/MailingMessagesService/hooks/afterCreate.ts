/* eslint-disable @typescript-eslint/no-empty-function */
import {
  MailingMessage,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterCreate = async (
  _ctx: Context,
  _data: MailingMessage,
): Promise<void> => {};
