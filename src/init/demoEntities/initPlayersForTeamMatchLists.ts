import {Context} from '../../adm/services/types';
import log from '../../log';

const generateData = (teamMatchListId: number, playerId: number, playerRoleId: string) => {
  return {
    teamMatchListId,
    playerId,
    startingPosition: Boolean(Math.floor(Math.random() / 0.5)),
    onField: Boolean(Math.floor(Math.random() / 0.5)),
    playerRoleId,
  };
};

const initPlayersForTeamMatchLists = async (ctx: Context) => {
  log.info('initPlayersForTeamMatchLists: start');

  const teamMatchLists = await ctx.service('teamMatchLists').all();
  const teamForPlayers = await ctx.service('teamForPlayers').all();
  const teamForCompetitions = await ctx.service('teamForCompetitions').all();
  const playerRoles = await ctx.service('playerRoles').all();

  for (const teamForPlayer of teamForPlayers) {
    const role = playerRoles[Math.floor(Math.random() * playerRoles.length)];

    const teamForCompetitionId = teamForCompetitions
      .find(t => t.teamId === teamForPlayer.teamId)?.id;

    const teamMatchListId = teamMatchLists.find(t => t.teamForCompetitionId === teamForCompetitionId)?.id;

    if (!teamMatchListId) {
      continue;
    }

    try {
      await ctx.service('playerForTeamMatchLists').create(
        generateData(teamMatchListId, teamForPlayer.playerId, role.id),
      );
    } catch (error: any) {
      log.warn(error.message);
    }
  }

  log.info('initPlayersForTeamMatchLists: end');
};

export default initPlayersForTeamMatchLists;
