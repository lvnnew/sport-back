import {MessageTemplate} from '../../../types/enums';
import Language from '../../../types/Language';
import {Context} from '../types';

export const defineMessageTemplateLangVariantIdByTemplteId = async (ctx: Context, templateId: MessageTemplate, languageId?: Language) => {
  if (languageId) {
    const byLang = await ctx.prisma.messageTemplateLangVariant.findFirst({
      select: {id: true},
      where: {
        messageTemplateId: templateId,
        languageId,
      },
    });

    if (byLang) {
      return byLang.id;
    }
  }

  const en = await ctx.prisma.messageTemplateLangVariant.findFirst({
    select: {id: true},
    where: {
      messageTemplateId: templateId,
      languageId: Language.En,
    },
  });

  if (en) {
    return en.id;
  }

  const any = await ctx.prisma.messageTemplateLangVariant.findFirst({
    select: {id: true},
    where: {
      messageTemplateId: templateId,
    },
  });

  if (any) {
    return any.id;
  }

  throw new Error(`There is no variant for "${templateId}" template id`);
};

const defineMessageTemplateLangVariantId = async (ctx: Context, template: MessageTemplate, languageId?: Language) => {
  return defineMessageTemplateLangVariantIdByTemplteId(ctx, template, languageId);
};

export default defineMessageTemplateLangVariantId;
