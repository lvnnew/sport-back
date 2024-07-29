import {Context} from '../../adm/services/types';
import log from '../../log';
import {EventType, TeamForCompetition} from '../../generated/graphql';
import PeriodType from '../../types/PeriodType';

const generateData = (
  matchEvents: number,
  eventTypes: EventType[],
  matchVideoId: number,
  matchId: number,
  teamForCompetition: TeamForCompetition,
  mainPlayerId: number,
  firstPlayerRole: string,
) => {
  return Array.from({length: matchEvents}).fill(null).map((_, index) => {
    const eventTypesForOnePlayer = eventTypes.filter(e => e.needForSecondPlayer === false);
    const eventType = eventTypesForOnePlayer[index % eventTypesForOnePlayer.length];
    const timeSecond = Math.floor(Math.random() * 100);

    return {
      timeSecond,
      controversialPoint: false,
      startControversialPoint: 0,
      highlight: false,
      startHighlight: 0,
      order: timeSecond,
      eventTypeId: eventType.id,
      videoId: matchVideoId,
      teamForCompetitionId: teamForCompetition.id,
      mainPlayerId,
      firstPlayerRoleId: firstPlayerRole,
      periodTypeId: PeriodType.FirstTime,
      matchId,
      points: eventType.points,
      periodNumber: 1,
    };
  });
};

const initEvents = async (ctx: Context) => {
  log.info('initEvents: start');
  const matchVideos = await ctx.service('matchVideos').all();
  const matches = await ctx.service('matches').all();
  const teamForCompetitions = await ctx.service('teamForCompetitions').all();
  const playerForCompetitionTeams = await ctx.service('playerForCompetitionTeams').all();
  const eventTypes = (await ctx.service('eventTypes').all()).filter(e => !e.needForSecondPlayer);
  const playerForTeamMatchLists = await ctx.service('playerForTeamMatchLists').all();

  for (const matchVideo of matchVideos) {
    const match = matches.find(m => m.id === matchVideo.matchId);
    const firstTeamForCompetition = teamForCompetitions.find(t => t.id === match?.firstTeamId);

    const playersForCompetitionFirstTeam = playerForCompetitionTeams
      .filter(p => p.teamForCompetitionId === firstTeamForCompetition?.id);

    const playersInFirstTeamOnField = playersForCompetitionFirstTeam
      .map(p => playerForTeamMatchLists.find(player => player.playerId === p.playerId))
      .filter(p => !p?.onField);

    for (const playerInFirstTeamOnField of playersInFirstTeamOnField) {
      if (!firstTeamForCompetition || !playerInFirstTeamOnField || !matchVideo.matchId) {
        continue;
      }

      const data = generateData(
        20,
        eventTypes,
        matchVideo.id,
        matchVideo.matchId,
        firstTeamForCompetition,
        playerInFirstTeamOnField?.playerId,
        playerInFirstTeamOnField?.playerRoleId,
      );

      for (const datum of data) {
        try {
          await ctx.service('events').create(datum);
        } catch (error: any) {
          log.warn(error.message);
        }
      }
    }
  }

  log.info('initEvents: end');
};

export default initEvents;
