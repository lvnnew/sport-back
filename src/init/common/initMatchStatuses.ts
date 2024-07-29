import {Context} from '../../adm/services/types';
import MatchStatus from '../../types/MatchStatus';

// DO NOT EDIT! THIS IS GENERATED FILE

const initMatchStatuses = async (ctx: Context) => {
  await ctx.service('matchStatuses').createMany([
    {
      id: MatchStatus.Ready,
      title: 'Готов',
    },
    {
      id: MatchStatus.Check,
      title: 'На проверке',
    },
    {
      id: MatchStatus.Created,
      title: 'Создан',
    },
    {
      id: MatchStatus.Markup,
      title: 'В разборе',
    },
  ]);
};

export default initMatchStatuses;
