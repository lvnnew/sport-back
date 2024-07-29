import {Context} from '../../adm/services/types';
import log from '../../log';
import PeriodType from '../../types/PeriodType';

const data = [
  {id: PeriodType.FirstTime, title: '1 Тайм', order: 1},
  {id: PeriodType.SecondTime, title: '2 Тайм', order: 2},
  {id: PeriodType.AdditionalFirstTime, title: 'Доп время 1', order: 3},
  {id: PeriodType.AdditionalSecondTime, title: 'Доп время 2', order: 4},
  {id: PeriodType.Penalty, title: 'Пенальти', order: 5},
];
const initPeriodTypes = async (ctx: Context) => {
  log.info('initPeriodTypes: start');
  for (const type of data) {
    try {
      await ctx.service('periodTypes').create(type);
    } catch (error: any) {
      log.warn(error.message);
    }
  }

  log.info('initPeriodTypes: end');
};

export default initPeriodTypes;
