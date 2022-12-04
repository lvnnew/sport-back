import log from '../../../log';
import {EmailOptions} from '../../emailSender';
import getQueue from '../getQueue';
import {Job} from '../Job';

export type SendEmailLocals = Record<string, any>;

export interface AddSendEmailJobArgs extends EmailOptions {
  priority?: number;
}

export const addSendEmailJob = async (args: AddSendEmailJobArgs) => {
  log.info('addSendEmailJob');
  log.info('args');

  // log.info(args);
  const queue = await getQueue();

  await queue.addJob(
    Job.SendEmail,
    {
      // template: args.template,
      // lang: args.lang,
      to: args.to,
      messageTemplateLangVariantId: args.messageTemplateLangVariantId,
      locals: args.locals,
      files: args.files,
      priority: args.priority,
    },
  );
};
