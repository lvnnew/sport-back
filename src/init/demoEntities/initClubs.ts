import {Context} from '../../adm/services/types';
import {faker} from '@faker-js/faker';
import log from '../../log';

faker.locale = 'ru';

const generateData = () => {
  return Array.from({length: 4}).fill(null).map(() => ({
    title: faker.company.name(),
    createdByManagerId: 2,
  }));
};

const initClubs = async (ctx: Context) => {
  log.info('initClubs: start');
  const data = await generateData();

  for (const club of data) {
    try {
      await ctx.service('clubs').create(club);
    } catch (error: any) {
      log.warn(error.messahe);
    }
  }

  log.info('initClubs: end');
};

export default initClubs;
