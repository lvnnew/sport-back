import * as R from 'ramda';
import {Context} from '../../../adm/services/types';
import defineMessageTemplateLangVariantId from '../../../adm/services/MessageTemplatesService/defineMessageTemplateLangVariantId';
import log from '../../../log';
import {MessageTemplate} from '../../../types/enums';
import {EmailFile} from '../../emailSender';
import Language from '../../../types/Language';
import {addSendEmailJob} from './addSendEmailJob';

export interface AddSendEmailToUserJobArgs {
  userId: number,
  files?: EmailFile[];
  // messageTemplateLangVariantId: number,
  template: MessageTemplate,
  locals?: Record<string, any>,
  priority?: number;
}

export const addSendEmailToUserJob = async (ctx: Context, args: AddSendEmailToUserJobArgs) => {
  log.info('addSendEmailToUserJob');

  const user = await ctx.service('users').get(args.userId);
  if (!user) {
    throw new Error(`There is no admin with id "${args.userId}"`);
  }

  if (!user.email) {
    throw new Error('User does not have email');
  }

  const messageTemplateLangVariantId = await defineMessageTemplateLangVariantId(ctx, args.template, Language.En);

  await addSendEmailJob(
    R.mergeDeepLeft(
      {
        to: user.email,
        locals: {
          ...user,
          id: user.id.toString(),
        },
        messageTemplateLangVariantId,
      },
      args,
    ),
  );
};
