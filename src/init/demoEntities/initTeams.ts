import {Context} from '../../adm/services/types';
import {faker} from '@faker-js/faker';
import log from '../../log';

const generateData = (numberOfTeams: number, clubsIds: number[]) => {
  return Array.from({length: numberOfTeams}).fill(null).map((_, index) => ({
    title: faker.helpers.unique(faker.helpers.fake, ['{{address.cityName}} {{company.bsNoun}}']),
    dateOfBirthFrom: 2,
    clubId: clubsIds[index % clubsIds.length],
    createdByManagerId: 1,
  }));
};

const initTeams = async (ctx: Context) => {
  log.info('initTeams: start');
  const clubs = await ctx.service('clubs').all();

  const teams = generateData(4, clubs.map(club => club.id));
  for (const team of teams) {
    try {
      await ctx.service('teams').create(team);
    } catch (error: any) {
      log.warn(error.message);
    }
  }

  log.info('initTeams: end');
};

export default initTeams;
