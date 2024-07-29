import {Context} from '../../adm/services/types';
import {faker} from '@faker-js/faker';
import log from '../../log';

const generateData = (competitionIds: number[], teamIds: number[]) => {
  return Array.from({length: teamIds.length}).fill(null).map((_, index) => ({
    title: faker.helpers.unique(faker.helpers.fake, ['{{color.human}} {{animal.type}}']),
    competitionId: competitionIds[index % competitionIds.length],
    teamId: teamIds[index % teamIds.length],
  }));
};

const initTeamForCompetitions = async (ctx: Context) => {
  log.info('initTeamForCompetitions: start');

  const competitionIds = (await ctx.service('competitions').all()).map(competition => competition.id);
  const teamIds = (await ctx.service('teams').all()).map(team => team.id);

  const competitions = generateData(competitionIds, teamIds);

  for (const competition of competitions) {
    try {
      await ctx.service('teamForCompetitions').create(competition);
    } catch (error: any) {
      log.warn(error.message);
    }
  }

  log.info('initTeamForCompetitions: end');
};

export default initTeamForCompetitions;
