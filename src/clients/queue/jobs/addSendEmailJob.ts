import log from '../../../log';
import {EmailOptions} from '../../emailSender';
import getQueue from '../getQueue';
import {Job} from './Job';
import {Optional} from 'utility-types';

export type SendEmailLocals = Record<string, any>;

export interface AddSendEmailJobArgs extends Optional<EmailOptions, 'message'> {
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
      template: args.template,
      lang: args.lang,
      locals: args.locals,
      files: args.files,
      message: args.message,
      priority: args.priority,
    },
  );
};
