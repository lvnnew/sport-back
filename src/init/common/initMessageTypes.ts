import {Context} from '../../adm/services/types';
import MessageType from '../../types/MessageType';

// DO NOT EDIT! THIS IS GENERATED FILE

const initMessageTypes = async (ctx: Context) => {
  await ctx.service('messageTypes').upsert({
    id: MessageType.Plain,
    title: 'Plain',
  });
};

export default initMessageTypes;
