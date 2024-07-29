import {Context} from '../../adm/services/types';
import PeriodType from '../../types/PeriodType';

// DO NOT EDIT! THIS IS GENERATED FILE

const initPeriodTypes = async (ctx: Context) => {
  await ctx.service('periodTypes').createMany([
    {
      id: PeriodType.FirstTime,
      order: 1,
      title: '1 Тайм',
    },
    {
      id: PeriodType.SecondTime,
      order: 2,
      title: '2 Тайм',
    },
    {
      id: PeriodType.AdditionalFirstTime,
      order: 3,
      title: 'Доп время 1',
    },
    {
      id: PeriodType.AdditionalSecondTime,
      order: 4,
      title: 'Доп время 2',
    },
    {
      id: PeriodType.Penalty,
      order: 5,
      title: 'Пенальти',
    },
  ]);
};

export default initPeriodTypes;
