import {Context} from '../../adm/services/types';
import log from '../../log';

const initMatchRequests = async (ctx: Context) => {
  log.info('initMatchRequests: start');

  const matches = await ctx.service('matches').all();
  const teamForCompetitions = await ctx.service('teamForCompetitions').all();

  for (const match of matches) {
    const firstTeamForCompetitionId = teamForCompetitions
      .find(t => t.id === match.firstTeamId)?.id;

    if (firstTeamForCompetitionId) {
      try {
        await ctx.service('matchRequests').create({
          teamForCompetitionId: firstTeamForCompetitionId,
          matchId: match.id,
        });
      } catch (error: any) {
        log.warn(error.message);
      }
    }

    const secondTeamForCompetitionId = teamForCompetitions
      .find(t => t.id === match.secondTeamId)?.id;

    if (secondTeamForCompetitionId) {
      try {
        await ctx.service('matchRequests').create({
          teamForCompetitionId: secondTeamForCompetitionId,
          matchId: match.id,
        });
      } catch (error: any) {
        log.warn(error.message);
      }
    }
  }

  log.info('initMatchRequests: end');
};

export default initMatchRequests;
