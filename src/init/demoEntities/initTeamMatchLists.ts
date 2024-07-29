import {Context} from '../../adm/services/types';
import log from '../../log';

const initTeamMatchLists = async (ctx: Context) => {
  log.info('initPlayerForMatchRequests: start');
  const matchRequests = await ctx.service('matchRequests').all();
  const teamForCompetitions = await ctx.service('teamForCompetitions').all();

  for (const matchRequest of matchRequests) {
    const teamForCompetitionId = teamForCompetitions
      .find(t => t.id === matchRequest.teamForCompetitionId)?.id;

    if (!teamForCompetitionId) {
      continue;
    }

    try {
      await ctx.service('teamMatchLists').create({
        matchId: matchRequest.matchId,
        teamForCompetitionId,
      });
    } catch (error: any) {
      log.warn(error.message);
    }
  }

  log.info('initPlayerForMatchRequests: end');
};

export default initTeamMatchLists;
