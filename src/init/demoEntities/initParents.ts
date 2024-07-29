import {Context} from '../../adm/services/types';
import {faker} from '@faker-js/faker';
import log from '../../log';

const generateData = () => {
  return Array.from({length: 4}).fill(null).map(() => ({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    patronymic: faker.name.middleName(),
    createdByManagerId: 2,
  }));
};

const initParents = async (ctx: Context) => {
  log.info('initParents: start');
  const parents = await generateData();

  for (const parent of parents) {
    try {
      await ctx.service('parents').create(parent);
    } catch (error: any) {
      log.warn(error.messahe);
    }
  }

  log.info('initParents: end');
};

export default initParents;
