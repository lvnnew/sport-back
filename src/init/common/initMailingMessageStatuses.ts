import {Context} from '../../adm/services/types';
import MailingMessageStatus from '../../types/MailingMessageStatus';

// DO NOT EDIT! THIS IS GENERATED FILE

const initMailingMessageStatuses = async (ctx: Context) => {
  await ctx.service('mailingMessageStatuses').upsert({
    id: MailingMessageStatus.Draft,
    final: false,
    title: 'Draft',
  });
  await ctx.service('mailingMessageStatuses').upsert({
    id: MailingMessageStatus.Stopped,
    final: false,
    title: 'Stopped',
  });
  await ctx.service('mailingMessageStatuses').upsert({
    id: MailingMessageStatus.Pending,
    final: false,
    title: 'Pending',
  });
  await ctx.service('mailingMessageStatuses').upsert({
    id: MailingMessageStatus.Sent,
    final: true,
    title: 'Sent',
  });
  await ctx.service('mailingMessageStatuses').upsert({
    id: MailingMessageStatus.Canceled,
    final: true,
    title: 'Canceled',
  });
  await ctx.service('mailingMessageStatuses').upsert({
    id: MailingMessageStatus.Errored,
    final: true,
    title: 'Errored',
  });
};

export default initMailingMessageStatuses;
