import {Context} from '../../adm/services/types';
import {faker} from '@faker-js/faker';
import log from '../../log';

const generateData = (organizationIds: number[]) => {
  return Array.from({length: 2}).fill(null).map((_, index) => ({
    title: `Кубок ${faker.address.cityName()} ${faker.date.future().getFullYear()}`,
    dateOfBirthFrom: 2,
    dateOfBirthTo: 18,
    organizationId: organizationIds[index % organizationIds.length],
    createdByManagerId: 2,
  }));
};

const initCompetitions = async (ctx: Context) => {
  log.info('initComprtitions: start');

  const organizationIds = (await ctx.service('organizators').all()).map(org => org.id);
  const competitions = generateData(organizationIds);

  for (const competition of competitions) {
    try {
      await ctx.service('competitions').create(competition);
    } catch (error: any) {
      log.warn(error);
    }
  }

  log.info('initComprtitions: end');
};

export default initCompetitions;
