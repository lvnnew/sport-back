import initParents from './demoEntities/initParents';
import {Context} from '../adm/services/types';
import initPlayers from './demoEntities/initPlayers';
import initClubs from './demoEntities/initClubs';
import initTeams from './demoEntities/initTeams';
import initTeamForPlayers from './demoEntities/initTeamsForPlayers';
import log from '../log';
import initOrganizators from './demoEntities/initOrganizators';
import initCompetitions from './demoEntities/initCompetitions';
import initPeriodTypes from './demoEntities/initPeriodTypes';
import initTeamForCompetitions from './demoEntities/initTeamForCompetitions';
import playerForCompetitionTeams from './demoEntities/initPlayerForCompetitionTeams';
import initMatches from './demoEntities/initMatches';
import initMatchVideos from './demoEntities/initMatchVideos';
import initMatchRequests from './demoEntities/initMatchRequests';
import initPlayerForMatchRequests from './demoEntities/initPlayerForMatchRequests';
import initTeamMatchLists from './demoEntities/initTeamMatchLists';
import initPlayersForTeamMatchLists from './demoEntities/initPlayersForTeamMatchLists';
import initEvents from './demoEntities/initEvents';

// yarn ts-node:withContext src/init/initDemoEntities.ts
// runlify start env=local yarn ts-node:withContext src/init/initDemoEntities.ts
// runlify start env=test yarn ts-node:withContext src/init/initDemoEntities.ts

const initDemoEntities = async (ctx: Context) => {
  log.info('initDemoEntities');

  await initParents(ctx);
  await initPlayers(ctx);
  await initClubs(ctx);
  await initTeams(ctx);
  await initTeamForPlayers(ctx);
  await initOrganizators(ctx);
  await initPeriodTypes(ctx);
  await initCompetitions(ctx);
  await initTeamForCompetitions(ctx);
  await playerForCompetitionTeams(ctx);
  await initMatches(ctx);
  await initMatchVideos(ctx);
  await initMatchRequests(ctx);
  await initPlayerForMatchRequests(ctx);
  await initTeamMatchLists(ctx);
  await initPlayersForTeamMatchLists(ctx);
  await initEvents(ctx);
};

export default initDemoEntities;
