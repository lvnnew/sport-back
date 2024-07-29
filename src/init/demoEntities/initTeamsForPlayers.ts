import {Context} from '../../adm/services/types';
import log from '../../log';

const initTeamForPlayers = async (ctx: Context) => {
  log.info('initTeamForPlayers: start');
  const teams = await ctx.service('teams').all();
  const players = await ctx.service('players').all();

  for (const [id, player] of players.entries()) {
    try {
      await ctx.service('teamForPlayers').create({
        teamId: teams[id % teams.length].id,
        playerId: player.id,
      });
    } catch (error: any) {
      log.warn(error.message);
    }
  }

  log.info('initTeamForPlayers: end');
};

export default initTeamForPlayers;
