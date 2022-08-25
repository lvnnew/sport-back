import {Context} from '../../types';
import {QueryAllTemplateStylesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTemplateStylesArgs = QueryAllTemplateStylesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
