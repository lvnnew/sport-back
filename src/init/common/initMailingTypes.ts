import {Context} from '../../adm/services/types';
import MailingType from '../../types/MailingType';

// DO NOT EDIT! THIS IS GENERATED FILE

const initMailingTypes = async (ctx: Context) => {
  await ctx.service('mailingTypes').createMany([
    {
      id: MailingType.Email,
      title: 'Email',
    },
  ]);
};

export default initMailingTypes;
