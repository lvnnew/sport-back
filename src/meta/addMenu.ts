import {SystemMetaBuilder} from 'runlify';

const addMenu = (system: SystemMetaBuilder) => {
  system.addInternalMenuItem('players.all').setMaterialUiIcon('PersonRounded');
  system.addInternalMenuItem('teams.all').setMaterialUiIcon('GroupRounded');

  const competitions = system.addGroupMenuItem('Турниры').setMaterialUiIcon('EmojiEventsOutlined');
  competitions.addInternalItem('competitions.all').setMaterialUiIcon('EmojiEventsOutlined');
  competitions.addInternalItem('organizators.all').setMaterialUiIcon('CasesOutlined');
  competitions.addInternalItem('teamForCompetitions.all').setMaterialUiIcon('GroupsOutlined');
  competitions.addInternalItem('playerForCompetitionTeams.all').setMaterialUiIcon('DirectionsRunOutlined');
  competitions.addInternalItem('playerCompetitionRatings.all').setMaterialUiIcon('TrendingUpOutlined');

  const matches = system.addGroupMenuItem('Матчи').setMaterialUiIcon('SportsSoccerOutlined');
  matches.addExternalItem('Комментирование', '/commenting').setMaterialUiIcon('DetailsOutlined').addRequiredPermission('commenting');
  matches.addInternalItem('matches.all').setMaterialUiIcon('SportsSoccerOutlined');
  matches.addInternalItem('matchVideos.all').setMaterialUiIcon('SmartDisplayOutlined');
  matches.addInternalItem('matchRequests.all').setMaterialUiIcon('CreateOutlined');
  matches.addInternalItem('playerMatchRatings.all').setMaterialUiIcon('TrendingUpOutlined');

  const reports = system.addGroupMenuItem('Отчеты').setMaterialUiIcon('AssessmentOutlined');
  reports.addInternalItem('reportForParents.all').setMaterialUiIcon('AssessmentOutlined');
  reports.addInternalItem('reportForClubs.all').setMaterialUiIcon('AssessmentOutlined');
  reports.addInternalItem('reportForOrganizations.all').setMaterialUiIcon('AssessmentOutlined');
  reports.addInternalItem('reportForTeams.all').setMaterialUiIcon('AssessmentOutlined');
  reports.addInternalItem('teamMatchReports.all').setMaterialUiIcon('AssessmentOutlined');

  const catalogs = system.addGroupMenuItem('app.catalogs').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('eventTypes.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('playerAggregatedRoles.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('playerRoles.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('playerForMatchRequests.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('teamMatchLists.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('playerForTeamMatchLists.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('parents.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('clubs.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('teamForPlayers.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('periodTypes.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('glossaries.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('playerRanks.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('eventTypeCategories.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('historyOfPlayerRoles.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('events.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.addInternalItem('matchPeriodMarkups.all').setMaterialUiIcon('ImportContactsOutlined');
  catalogs.setDebugOnly();
};

export default addMenu;

