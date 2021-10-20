/* eslint-disable @typescript-eslint/no-empty-function */
import {
  MessageTemplate,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const afterCreate = async (
  _getCtx: () => Context,
  _data: MessageTemplate,
): Promise<void> => {};
