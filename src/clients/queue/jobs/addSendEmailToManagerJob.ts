import * as R from 'ramda';
import {Context} from '../../../adm/services/types';
import defineMessageTemplateLangVariantId from '../../../adm/services/MessageTemplatesService/defineMessageTemplateLangVariantId';
import log from '../../../log';
import {MessageTemplate} from '../../../types/enums';
import {EmailFile} from '../../emailSender';
import Language from '../../../types/Language';
import {addSendEmailJob} from './addSendEmailJob';

export interface AddSendEmailToManagerJobArgs {
  managerId: number,
  files?: EmailFile[];
  // messageTemplateLangVariantId: number,
  template: MessageTemplate,
  locals?: Record<string, any>,
  priority?: number;
}

export const addSendEmailToManagerJob = async (ctx: Context, args: AddSendEmailToManagerJobArgs) => {
  log.info('addSendEmailToManagerJob');

  const manager = await ctx.service('managers').get(args.managerId);
  if (!manager) {
    throw new Error(`There is no admin with id "${args.managerId}"`);
  }

  if (!manager.email) {
    throw new Error('Manager does not have email');
  }

  const messageTemplateLangVariantId = await defineMessageTemplateLangVariantId(ctx, args.template, manager.languageId as Language);

  await addSendEmailJob(
    R.mergeDeepLeft(
      {
        to: manager.email,
        locals: {
          ...manager,
          id: manager.id.toString(),
        },
        messageTemplateLangVariantId,
      },
      args,
    ),
  );
};
