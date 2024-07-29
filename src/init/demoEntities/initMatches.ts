import {Context} from '../../adm/services/types';
import {faker} from '@faker-js/faker';
import log from '../../log';
import {Team, TeamForCompetition} from '../../generated/graphql';

const generateData = (data: [TeamForCompetition, TeamForCompetition, number][], teams: Team[]) => {
  return data.map(([first, second, competitionId]) => ({
    title: `${teams.find(team => team.id === first.teamId)?.title} - ${teams.find(team => team.id === second.teamId)?.title}`,
    createdByManagerId: 2,
    competitionId,
    firstTeamId: first.id,
    secondTeamId: second.id,
    matchDate: faker.date.past(),
    matchTime: '13:00',
    place: faker.address.streetAddress(),
  }));
};

const initMatches = async (ctx: Context) => {
  log.info('initMatches: start');

  const teamForCompetitions = await ctx.service('teamForCompetitions').all();
  const teams = await ctx.service('teams').all();

  const competitionIds = teamForCompetitions.map(c => c.competitionId);
  const competitions = competitionIds.filter((item, index) => {
    return competitionIds.indexOf(item) === index;
  });

  const allMatches: [TeamForCompetition, TeamForCompetition, number][] = [];
  for (const competitionId of competitions) {
    const matchesForCompetition: [TeamForCompetition, TeamForCompetition, number][] = [];

    const teamsInCompetition = teamForCompetitions
      .filter(c => competitionId === c.competitionId);

    // Теперь создаем пары команд для текущего competitionId
    for (let k = 0; k < teamsInCompetition.length - 1; k++) {
      for (let l = k + 1; l < teamsInCompetition.length; l++) {
        matchesForCompetition.push([teamsInCompetition[k], teamsInCompetition[l], competitionId]);
      }
    }

    allMatches.push(...matchesForCompetition);
  }

  const matches = generateData(allMatches, teams);

  for (const match of matches) {
    try {
      await ctx.service('matches').create(match);
    } catch (error: any) {
      log.warn(error.message);
    }
  }

  log.info('initMatches: end');
};

export default initMatches;
