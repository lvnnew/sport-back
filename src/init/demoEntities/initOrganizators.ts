import {Context} from '../../adm/services/types';
import {faker} from '@faker-js/faker';
import log from '../../log';

const generateData = () => {
  return Array.from({length: 4}).fill(null).map(() => ({
    title: faker.company.name(),
    createdByManagerId: 2,
  }));
};

const initOrganizators = async (ctx: Context) => {
  log.info('initOrganizators: start');
  const organizators = await generateData();

  for (const organizator of organizators) {
    try {
      await ctx.service('organizators').create(organizator);
    } catch (error: any) {
      log.warn(error.messahe);
    }
  }

  log.info('initOrganizators: end');
};

export default initOrganizators;
