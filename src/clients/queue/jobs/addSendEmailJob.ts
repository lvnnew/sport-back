import log from '../../../log';
import {EmailOptions, whitelistedEmail} from '../../emaiSender';
import getQueue from '../getQueue';
import {Job} from './Job';
import {MessageTemplate} from '../../../types/enums';

export type SendEmailLocals = Record<string, any>;

export interface AddSendEmailJobArgs extends EmailOptions {
  template: MessageTemplate;
  priority?: number;
  locals?: SendEmailLocals;
}

export const addSendEmailJob = async (args: AddSendEmailJobArgs) => {
  log.info('addSendEmailJob');
  log.info('args');

  // log.info(args);
  const queue = await getQueue();

  const to = whitelistedEmail(args.message?.to ? args.message.to.toString() : '');

  if (!to) {
    throw new Error(`Email you wish to send to should be provided. Computed email: "${to}", original: "${args.message?.to}"`);
  }

  await queue.addJob(
    Job.SendEmail,
    {
      template: args.template,
      lang: args.lang,
      locals: args.locals,
      files: args.files,
      message: {
        ...args.message,
        to,
      },
      priority: args.priority,
    },
  );
};
