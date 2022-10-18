import {Context} from '../adm/services/types';
import {MessageTemplate} from '../types/enums';
import MessageType from '../types/MessageType';
import * as R from 'ramda';
import {MutationUpdateMessageTemplateArgs} from '../generated/graphql';

// yarn ts-node:withContext src/init/initMessageTemplates.ts
// runlify start env=stage yarn ts-node:withContext src/init/initMessageTemplates.ts
// runlify start env=dev yarn ts-node:withContext src/init/initMessageTemplates.ts
// runlify start env=test yarn ts-node:withContext src/init/initMessageTemplates.ts

// runlify start env=anna_laznia yarn ts-node:withContext src/init/initMessageTemplates.ts
// runlify start env=yurii_papka yarn ts-node:withContext src/init/initMessageTemplates.ts

// runlify start env=lavrova yarn ts-node:withContext src/init/initMessageTemplates.ts
// runlify start env=mkarandov yarn ts-node:withContext src/init/initMessageTemplates.ts
// runlify start env=annykarimova yarn ts-node:withContext src/init/initMessageTemplates.ts
// runlify start env=sanekcetr yarn ts-node:withContext src/init/initMessageTemplates.ts
// runlify start env=cupteaforalice yarn ts-node:withContext src/init/initMessageTemplates.ts

// runlify start env=prod yarn ts-node:withContext src/init/initMessageTemplates.ts

export const templates: Record<MessageTemplate, Omit<MutationUpdateMessageTemplateArgs, 'id'>> = {
  [MessageTemplate.Hello]: {
    title: 'Hello',
    messageTypeId: MessageType.Plain,
    secretData: false,
  },
  [MessageTemplate.NewRegistration]: {
    title: 'New registration',
    messageTypeId: MessageType.Plain,
    secretData: true,
  },
  [MessageTemplate.PasswordChange]: {
    title: 'Password change',
    messageTypeId: MessageType.Plain,
    secretData: true,
  },
  [MessageTemplate.ResetPassword]: {
    title: 'Reset password',
    messageTypeId: MessageType.Plain,
    secretData: true,
  },
  [MessageTemplate.RestorePassword]: {
    title: 'Restore password',
    messageTypeId: MessageType.Plain,
    secretData: true,
  },
  [MessageTemplate.Custom]: {
    title: 'Custom',
    messageTypeId: MessageType.Plain,
    secretData: false,
  },
};

export const initMessageTemplates = async (ctx: Context) => {
  const arr = R.toPairs(templates);
  for (const [, {title, messageTypeId, secretData}] of arr) {
    await ctx.service('messageTemplates').upsertAdvanced(
      {title, messageTypeId, secretData},
      {title, messageTypeId, secretData},
    );
  }
};
