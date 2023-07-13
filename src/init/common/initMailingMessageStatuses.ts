import {Context} from '../../adm/services/types';
import MailingMessageStatus from '../../types/MailingMessageStatus';

// DO NOT EDIT! THIS IS GENERATED FILE

const initMailingMessageStatuses = async (ctx: Context) => {
  await ctx.service('mailingMessageStatuses').createMany([
    {
      id: MailingMessageStatus.Draft,
      final: false,
      title: 'Draft',
    },
    {
      id: MailingMessageStatus.Stopped,
      final: false,
      title: 'Stopped',
    },
    {
      id: MailingMessageStatus.Pending,
      final: false,
      title: 'Pending',
    },
    {
      id: MailingMessageStatus.Sent,
      final: true,
      title: 'Sent',
    },
    {
      id: MailingMessageStatus.Canceled,
      final: true,
      title: 'Canceled',
    },
    {
      id: MailingMessageStatus.Errored,
      final: true,
      title: 'Errored',
    },
  ]);
};

export default initMailingMessageStatuses;
