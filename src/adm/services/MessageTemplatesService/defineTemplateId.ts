import {templates} from '../../../init/initMessageTemplates';
import {MessageTemplate} from '../../../types/enums';
import {Context} from '../types';

const defineTemplateId = async (ctx: Context, template: MessageTemplate) => {
  const foundTemplate = templates[template];

  const templateFromDb = await ctx.service('messageTemplates').findOneRequired({
    filter: {title: foundTemplate.title},
  });
  return templateFromDb.id;
};

export default defineTemplateId;
