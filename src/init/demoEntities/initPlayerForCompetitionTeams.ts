import {Context} from '../../adm/services/types';
import log from '../../log';

const playerForCompetitionTeams = async (ctx: Context) => {
  log.info('playerForCompetitionTeams: start');

  const plyerIds = (await ctx.service('players').all()).map(p => p.id);
  const teamForCompetitions = await ctx.service('teamForCompetitions').all();
  const teamForPlayers = await ctx.service('teamForPlayers').all();

  for (const playerId of plyerIds) {
    const playerTeamId = teamForPlayers.find(t => t.playerId === playerId);
    const teamForCompetition = teamForCompetitions.find(t => t.teamId === playerTeamId?.teamId);
    if (!teamForCompetition?.id) {
      continue;
    }

    try {
      await ctx.service('playerForCompetitionTeams').create(
        {playerId, teamForCompetitionId: teamForCompetition?.id},
      );
    } catch (error: any) {
      log.warn(error.message);
    }
  }

  log.info('playerForCompetitionTeams: end');
};

export default playerForCompetitionTeams;
