import {Context} from '../../adm/services/types';
import log from '../../log';

const initPlayerForMatchRequests = async (ctx: Context) => {
  log.info('initPlayerForMatchRequests: start');

  const matchRequests = await ctx.service('matchRequests').all();
  const teamForCompetitions = await ctx.service('teamForCompetitions').all();
  const teamForPlayers = await ctx.service('teamForPlayers').all();

  for (const teamForPlayer of teamForPlayers) {
    const teamId = teamForPlayer.teamId;
    const teamForCompetitionId = teamForCompetitions.find(t => t.teamId === teamId)
      ?.id;

    const matchRequestId = matchRequests
      .find(m => m.teamForCompetitionId === teamForCompetitionId)
      ?.id;

    if (!matchRequestId) {
      continue;
    }

    try {
      await ctx.service('playerForMatchRequests').create({
        matchRequestId,
        playerId: teamForPlayer.playerId,
      });
    } catch (error: any) {
      log.warn(error.message);
    }
  }

  log.info('initPlayerForMatchRequests: end');
};

export default initPlayerForMatchRequests;
