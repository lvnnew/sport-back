/* eslint-disable max-len */
import {SystemMetaBuilder, getFilesCatalog} from 'runlify';

const addCatalogs = (system: SystemMetaBuilder) => {
  const files = getFilesCatalog(system);

  // teams
  const teams = system.addCatalog('teams');
  teams.setNeedFor('Таблица команд');
  teams.setTitles({
    en: {plural: 'Teams', singular: 'Team'},
    ru: {plural: 'Команды', singular: 'Команда'},
  });
  teams.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  teams.addField('dateOfBirthFrom', 'Год рождения с')
    .setType('int')
    .setRequired();
  teams.addField('dateOfBirthTo', 'По год рождения')
    .setType('int');
  teams.addLinkField('managers', 'createdByManagerId', 'Создано менеджером')
    .setRequired()
    .setNotUpdatableByUser(undefined, 'ctx.service(\'profile\').getManagerId()');
  teams.addLinkField('managers', 'lastChangedByManagerId', 'Изменено менеджером')
    .setNotUpdatableByUser(undefined);
  teams.addLinkField('clubs', 'clubId', 'Клуб')
    .setRequired();
  teams.addLinkField(files, 'fileId', 'Логотип команды');

  // parents
  const parents = system.addCatalog('parents');
  parents.setNeedFor('Таблица родителей');
  parents.setTitles({
    en: {plural: 'Parents', singular: 'Parent'},
    ru: {plural: 'Родители', singular: 'Родитель'},
  });
  parents.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired()
    .setNotUpdatableByUser();
  parents.addField('firstname', 'Имя')
    .setType('string')
    .setRequired();
  parents.addField('lastname', 'Фамилия')
    .setType('string')
    .setRequired();
  parents.addField('patronymic', 'Отчество')
    .setType('string');
  parents.addLinkField('managers', 'createdByManagerId', 'Создано менеджером')
    .setRequired()
    .setNotUpdatableByUser(undefined, 'ctx.service(\'profile\').getManagerId()');
  parents.addLinkField('managers', 'lastChangedByManagerId', 'Изменено менеджером')
    .setNotUpdatableByUser(undefined);

  // reportForParents
  const reportForParents = system.addCatalog('reportForParents');
  reportForParents.setNeedFor('Таблица отчетов для родителей');
  reportForParents.setTitles({
    en: {plural: 'Reports for parents', singular: 'Report for parent'},
    ru: {plural: 'Отчеты для родителей', singular: 'Отчет для родителей'},
  });
  reportForParents.addField('title', 'Название')
    .setType('string')
    .setRequired();
  reportForParents.addLinkField('players', 'playerId', 'Игрок')
    .setRequired();
  reportForParents.addLinkField('matches', 'matchId', 'Матч')
    .setRequired();
  reportForParents.addLinkField('parents', 'parentId', 'Родитель')
    .setRequired();
  reportForParents.addField('lastUpdated', 'Дата последнего изменения')
    .setType('date')
    .setNotUpdatableByUser(undefined, 'new Date()');
  reportForParents.addField('paid', 'Оплачен')
    .setType('bool');

  // clubs
  const clubs = system.addCatalog('clubs');
  clubs.setNeedFor('Клубы');
  clubs.setTitles({
    en: {plural: 'Clubs', singular: 'Club'},
    ru: {plural: 'Клубы', singular: 'Клуб'},
  });
  clubs.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  clubs.addLinkField('managers', 'createdByManagerId', 'Создано менеджером')
    .setRequired()
    .setNotUpdatableByUser(undefined, 'ctx.service(\'profile\').getManagerId()');
  clubs.addLinkField('managers', 'lastChangedByManagerId', 'Изменено менеджером')
    .setNotUpdatableByUser(undefined);

  // reportForClubs
  const reportForClubs = system.addCatalog('reportForClubs');
  reportForClubs.setNeedFor('Отчеты для клубов');
  reportForClubs.setTitles({
    en: {plural: 'Reports For Clubs', singular: 'Report For Club'},
    ru: {plural: 'Отчеты для клубов', singular: 'Отчет для клуба'},
  });
  reportForClubs.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  reportForClubs.addLinkField('teams', 'teamId', 'Команда')
    .setRequired();
  reportForClubs.addLinkField('competitions', 'competitionId', 'Турнир')
    .setRequired();
  reportForClubs.addLinkField('clubs', 'clubId', 'Клуб')
    .setRequired();
  reportForClubs.addField('lastUpdated', 'Дата последнего изменения')
    .setType('date')
    .setNotUpdatableByUser(undefined, 'new Date()');
  reportForClubs.addField('paid', 'Оплачен')
    .setType('bool');

  // reportForOrganizations
  const reportForOrganizations = system.addCatalog('reportForOrganizations');
  reportForOrganizations.setNeedFor('Отчеты для организаторов');
  reportForOrganizations.setTitles({
    en: {plural: 'Reports For Organizations', singular: 'Report For Organization'},
    ru: {plural: 'Отчеты для организаторов', singular: 'Отчет для организаторов'},
  });
  reportForOrganizations.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  reportForOrganizations.addLinkField('competitions', 'competitionId', 'Турнир')
    .setRequired();
  reportForOrganizations.addLinkField('organizators', 'organizatorId', 'Организатор')
    .setRequired();
  reportForOrganizations.addField('lastUpdated', 'Дата последнего изменения')
    .setType('date')
    .setNotUpdatableByUser(undefined, 'new Date()');
  reportForOrganizations.addField('paid', 'Оплачен')
    .setType('bool');

  // teamForCompetitions
  const teamForCompetitions = system.addCatalog('teamForCompetitions');
  teamForCompetitions.setNeedFor('Команды на турнире');
  teamForCompetitions.setTitles({
    en: {plural: 'Teams For Competitions', singular: 'Team For Competition'},
    ru: {plural: 'Команды на турнире', singular: 'Команда на турнире'},
  });
  teamForCompetitions.addField('title', 'Название')
    .setType('string')
    .setRequired();
  teamForCompetitions.addField('fullTitle', 'Полное название', {isTitleField: true})
    .setType('string')
    .setNotUpdatableByUser();
  teamForCompetitions.addLinkField('teams', 'teamId', 'Команда')
    .setRequired();
  teamForCompetitions.addLinkField('competitions', 'competitionId', 'Турнир')
    .setRequired();
  teamForCompetitions.addUniqueConstraint(['title', 'competitionId']);

  // playerForCompetitionTeams
  const playerForCompetitionTeams = system.addCatalog('playerForCompetitionTeams');
  playerForCompetitionTeams.setNeedFor('Список игроков команды на турнире');
  playerForCompetitionTeams.setTitles({
    en: {plural: 'Players For Competition Teams', singular: 'Player For Competition Teams'},
    ru: {plural: 'Списки игроков команд на турнире ', singular: 'Список игроков команды на турнире'},
  });
  playerForCompetitionTeams.addLinkField('teamForCompetitions', 'teamForCompetitionId', 'Команда на турнире')
    .setRequired();
  playerForCompetitionTeams.addLinkField('players', 'playerId', 'Игрок')
    .setRequired();
  playerForCompetitionTeams.addUniqueConstraint(['teamForCompetitionId', 'playerId']);

  // playerCompetitionRatings
  const playerCompetitionRatings = system.addCatalog('playerCompetitionRatings');
  playerCompetitionRatings.setNeedFor('Рейтинг игроков команд на турнирах');
  playerCompetitionRatings.setTitles({
    en: {plural: 'Players Competition Ratings', singular: 'Player Competition Ratings'},
    ru: {plural: 'Рейтинги игроков команд на турнирах', singular: 'Рейтинг игроков команд на турнирах'},
  });
  playerCompetitionRatings.addLinkField('competitions', 'competitionId', 'Турнир')
    .setRequired();
  playerCompetitionRatings.addLinkField('players', 'playerId', 'Игрок')
    .setRequired();
  playerCompetitionRatings.addField('rating', 'Рейтинг')
    .setType('int')
    .setRequired();

  // playerRanks
  const playerRanks = system.addCatalog('playerRanks');
  playerRanks.setTitles({
    en: {plural: 'Player ranks', singular: 'Player rank'},
    ru: {plural: 'Ранги игроков', singular: 'Ранг игрока'},
  });
  playerRanks.getKey()
    .setType('string');
  playerRanks.addField('title', 'Название')
    .setType('string')
    .setRequired();
  playerRanks.addField('rating', 'Рейтинг')
    .setType('int')
    .setRequired();
  playerRanks.addLinkField(files, 'fileId', 'Изображение баджа')
    .setShowInList(false);
  playerRanks.addPredefinedElements([
    {id: 'reserve', title: 'Игрок резерва', rating: 0},
    {id: 'support', title: 'Игрок запаса', rating: 1000},
    {id: 'basis', title: 'Игрок основы', rating: 2000},
    {id: 'start', title: 'Игрок старта', rating: 3000},
    {id: 'important', title: 'Важный игрок', rating: 4000},
    {id: 'star', title: 'Звездный игрок', rating: 5000},
    {id: 'legend', title: 'Легенда команды', rating: 6000},
  ]);

  // players
  const players = system.addCatalog('players');
  players.setNeedFor('Таблица игроков');
  players.setTitles({
    en: {plural: 'Players', singular: 'Player'},
    ru: {plural: 'Игроки', singular: 'Игрок'},
  });
  players.addField('firstname', 'Имя')
    .setType('string')
    .setRequired();
  players.addField('lastname', 'Фамилия')
    .setType('string')
    .setRequired();
  players.addField('patronymic', 'Отчество')
    .setType('string');
  players.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired()
    .setNotUpdatableByUser();
  players.addField('playerName', 'Игрок')
    .setType('string')
    .setNotUpdatableByUser();
  players.addField('number', 'Номер игрока')
    .setType('int')
    .setRequired();
  players.addField('dateOfBirth', 'Дата рождения')
    .setType('date')
    .setRequired();
  players.addField('age', 'Возраст')
    .setType('int')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addLinkField('teams', 'teamId', 'Команда');
  players.addLinkField('managers', 'createdByManagerId', 'Создано менеджером')
    .setRequired()
    .setNotUpdatableByUser(undefined, 'ctx.service(\'profile\').getManagerId()');
  players.addLinkField('managers', 'lastChangedByManagerId', 'Изменено менеджером')
    .setNotUpdatableByUser(undefined);
  players.addLinkField('parents', 'parentId', 'Родитель');
  players.addField('linkToProfile', 'Ссылка на профиль')
    .setType('string');
  players.addField('playerRating', 'Рейтинг за все время').setType('int');
  players.addLinkField(files, 'photoId', 'Фото игрока')
    .setShowInList(false);
  players.addField('playerRatingAverage', 'Средний рейтинг')
    .setType('float')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('commonPlayerRatingGoalkeeper', 'Общий рейтинг по позиции Goalkeeper')
    .setType('int')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('commonPlayerRatingAttack', 'Общий рейтинг по позиции Attack')
    .setType('int')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('commonPlayerRatingMidfielder', 'Общий рейтинг по позиции Midfielder')
    .setType('int')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('commonPlayerRatingDefender', 'Общий рейтинг по позиции Defender')
    .setType('int')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('playedMatches', 'Количество сыгранных матчей')
    .setType('int')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('averagePlayerRatingGoalkeeper', 'Средний рейтинг по позиции Goalkeeper')
    .setType('float')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('averagePlayerRatingAttack', 'Средний рейтинг по позиции Attack')
    .setType('float')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('averagePlayerRatingMidfielder', 'Средний рейтинг игрока по позиции Midfielder')
    .setType('float')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('averagePlayerRatingDefender', 'Средний рейтинг игрока по позиции Defender')
    .setType('float')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addLinkField('playerAggregatedRoles', 'playerAggregatedRoleId', 'Агрегированная позиция')
    .setType('string')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('playerTag', 'Тэг')
    .setType('string')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addField('progressivePassAccuracy', 'Точность прогрессивных передач')
    .setType('float')
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);
  players.addLinkField('playerRanks', 'playerRankId', 'Ранг игрока')
    .setType('string')
    .setShowInCreate(false)
    .setShowInEdit(false);

  // teamForPlayers
  const teamForPlayers = system.addCatalog('teamForPlayers');
  teamForPlayers.setNeedFor('Таблица связи игрока с командой');
  teamForPlayers.setTitles({
    en: {plural: 'Team for players', singular: 'Team for player'},
    ru: {plural: 'Игроки команд', singular: 'Игрок команды'},
  });
  teamForPlayers.addLinkField('players', 'playerId', 'Игрок')
    .setRequired();
  teamForPlayers.addLinkField('teams', 'teamId', 'Команда')
    .setRequired();
  teamForPlayers.addUniqueConstraint(['playerId', 'teamId']);

  // organizators
  const organizators = system.addCatalog('organizators');
  organizators.setNeedFor('Организаторы');
  organizators.setTitles({
    en: {plural: 'Organizators', singular: 'Organizator'},
    ru: {plural: 'Организаторы', singular: 'Организатор'},
  });
  organizators.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  organizators.addLinkField('managers', 'createdByManagerId', 'Создано менеджером')
    .setRequired()
    .setNotUpdatableByUser(undefined, 'ctx.service(\'profile\').getManagerId()');
  organizators.addLinkField('managers', 'lastChangedByManagerId', 'Изменено менеджером')
    .setNotUpdatableByUser(undefined);

  // periodTypes
  const periodTypes = system.addCatalog('periodTypes');
  periodTypes.setNeedFor('Тип периода');
  periodTypes.setTitles({
    en: {plural: 'Period types', singular: 'Period type'},
    ru: {plural: 'Типы периодов', singular: 'Тип периода'},
  });
  periodTypes.getKey()
    .setType('string')
    .setRequired();
  periodTypes.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  periodTypes.addField('order', 'Порядковый номер')
    .setType('int')
    .setRequired();
  periodTypes.addPredefinedElements([
    {id: 'firstTime', title: '1 Тайм', order: 1},
    {id: 'secondTime', title: '2 Тайм', order: 2},
    {id: 'additionalFirstTime', title: 'Доп время 1', order: 3},
    {id: 'additionalSecondTime', title: 'Доп время 2', order: 4},
    {id: 'penalty', title: 'Пенальти', order: 5},
  ]);

  // competitions
  const competitions = system.addCatalog('competitions');
  competitions.setNeedFor('Турниры');
  competitions.setTitles({
    en: {plural: 'Сompetitions', singular: 'Сompetition'},
    ru: {plural: 'Турниры', singular: 'Турнир'},
  });
  competitions.addField('title', 'Название турнира', {isTitleField: true})
    .setType('string')
    .setRequired();
  competitions.addField('dateOfBirthFrom', 'Год рождения с')
    .setType('int');
  competitions.addField('dateOfBirthTo', 'По год рождения')
    .setType('int');
  competitions.addLinkField('organizators', 'organizationId', 'Организатор')
    .setRequired();
  competitions.addLinkField('managers', 'createdByManagerId', 'Создано менеджером')
    .setRequired()
    .setNotUpdatableByUser(undefined, 'ctx.service(\'profile\').getManagerId()');
  competitions.addLinkField('managers', 'lastChangedByManagerId', 'Изменено менеджером')
    .setNotUpdatableByUser(undefined);

  // matchVideos
  const matchVideos = system.addCatalog('matchVideos');
  matchVideos.setNeedFor('Таблица видео матчей');
  matchVideos.setTitles({
    en: {plural: 'Match videos', singular: 'Match video'},
    ru: {plural: 'Видео матчей', singular: 'Видео матча'},
  });
  matchVideos.addField('videoTitle', 'Название видео матча', {isTitleField: true})
    .setType('string')
    .setRequired();
  matchVideos.addField('videoLink', 'Ссылка на видео на YouTube')
    .setType('string')
    .setRequired();
  matchVideos.addLinkField('matches', 'matchId', 'Матч');
  matchVideos.addField('order', 'Порядок')
    .setType('int')
    .setShowInShow(false)
    .setShowInList(false)
    .setShowInCreate(false)
    .setShowInEdit(false);

  // matchStatuses
  const matchStatuses = system.addCatalog('matchStatuses');
  matchStatuses.setNeedFor('Справочник статусов матчей');
  matchStatuses.setTitles({
    en: {plural: 'Match statuses', singular: 'Match status'},
    ru: {plural: 'Статусы матчей', singular: 'Статус матча'},
  });
  matchStatuses.getKey()
    .setType('string')
    .setRequired();
  matchStatuses.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  matchStatuses.addPredefinedElements([
    {
      id: 'ready',
      title: 'Готов',
    },
    {
      id: 'check',
      title: 'На проверке',
    },
    {
      id: 'created',
      title: 'Создан',
    },
    {
      id: 'markup',
      title: 'В разборе',
    },
  ]);

  // matches
  const matches = system.addCatalog('matches');
  matches.setNeedFor('Таблица матчей');
  matches.setDeletable(false);
  matches.setTitles({
    en: {plural: 'Matches', singular: 'Match'},
    ru: {plural: 'Матчи', singular: 'Матч'},
  });
  matches.addLinkField('managers', 'createdByManagerId', 'Создано менеджером')
    .setRequired()
    .setShowInShow(false)
    .setShowInList(false)
    .setNotUpdatableByUser(undefined, 'ctx.service(\'profile\').getManagerId()');
  matches.addLinkField('managers', 'lastChangedByManagerId', 'Изменено менеджером')
    .setShowInShow(false)
    .setShowInList(false)
    .setNotUpdatableByUser(undefined);
  matches.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  matches.addLinkField('competitions', 'competitionId', 'Турнир')
    .setRequired();
  matches.addLinkField('teamForCompetitions', 'firstTeamId', 'Команда матча 1')
    .setShowInList(false);
  matches.addField('firstTeamColor', 'Цвет первой команды')
    .setType('string')
    .setShowInList(false);
  matches.addLinkField('teamForCompetitions', 'firstTeamOnFieldId', 'Первая команда на поле')
    .setShowInList(false);
  matches.addLinkField('teamForCompetitions', 'secondTeamId', 'Команда матча 2')
    .setShowInList(false);
  matches.addField('secondTeamColor', 'Цвет второй команды')
    .setType('string')
    .setShowInList(false);
  matches.addField('matchDate', 'Дата проведения матча')
    .setType('date')
    .setRequired();
  matches.addField('matchTime', 'Время начала матча')
    .setType('string')
    .setRequired();
  matches.addField('duration', 'Продолжительность в минутах')
    .setType('int')
    .setDefaultValueExpression('90')
    .setRequired();
  matches.addField('place', 'Место проведения')
    .setType('string');
  matches.addField('active', 'Активен')
    .setType('bool')
    .setDefaultValueExpression('true');
  matches.addField('firstTeamPoints', 'Счет команды 1')
    .setType('int')
    .setShowInList(false);
  matches.addField('secondTeamPoints', 'Счет команды 2')
    .setType('int')
    .setShowInList(false);
  matches.addField('redCardFirstTeam', 'Красных карточек команды 1')
    .setType('int')
    .setShowInList(false);
  matches.addField('redCardSecondTeam', 'Красных карточек команды 2')
    .setType('int')
    .setShowInList(false);
  matches.addField('yellowCardFirstTeam', 'Желтых карточек команды 1')
    .setType('int')
    .setShowInList(false);
  matches.addField('yellowCardSecondTeam', 'Желтых карточек команды 2')
    .setType('int')
    .setShowInList(false);
  matches.addField('firstTeamHandleTime', 'Время владения мячом первой командой')
    .setType('int')
    .setShowInCreate(false)
    .setShowInEdit(false)
    .setShowInShow(false)
    .setShowInList(false);
  matches.addField('secondTeamHandleTime', 'Время владения мячом второй командой')
    .setType('int')
    .setShowInCreate(false)
    .setShowInEdit(false)
    .setShowInShow(false)
    .setShowInList(false);
  matches.addUniqueConstraint(['firstTeamId', 'secondTeamId', 'matchDate', 'matchTime']);
  matches.addField('linkToProtocol', 'Ссылка на протокол игры')
    .setType('string')
    .setShowInList(false);
  matches.addLinkField('matchStatuses', 'matchStatusId', 'Статус матча')
    .setType('string')
    .setShowInList(false)
    .setDefaultDbValue('"created"');

  // eventTypeCategories
  const eventTypeCategories = system.addCatalog('eventTypeCategories');
  eventTypeCategories.setNeedFor('Справочник категорий типов событий');
  eventTypeCategories.setTitles({
    en: {plural: 'Event type categories', singular: 'Event type category'},
    ru: {plural: 'Категории типов событий', singular: 'Категория типа события'},
  });
  eventTypeCategories.getKey()
    .setType('string')
    .setRequired();
  eventTypeCategories.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  eventTypeCategories.addPredefinedElements([
    {
      id: 'defense',
      title: 'Защита',
    },
    {
      id: 'attack',
      title: 'Атака',
    },
  ]);

  // eventTypes
  const eventTypes = system.addCatalog('eventTypes');
  eventTypes.setNeedFor('Справочник типов событий');
  eventTypes.setTitles({
    en: {plural: 'Event types', singular: 'Event type'},
    ru: {plural: 'Типы событий', singular: 'Тип события'},
  });
  eventTypes.getKey()
    .setType('string')
    .setRequired()
    .setShowInList(false);
  eventTypes.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  eventTypes.addField('points', 'Баллы эффективности события')
    .setType('int')
    .setRequired();
  eventTypes.addLinkField('eventTypeCategories', 'eventTypeCategoryId', 'Категория типов событий')
    .setType('string');
  eventTypes.addField('order', 'Порядок')
    .setType('int')
    .setDefaultDbValue('0');
  eventTypes.addField('showInTranslationMode', 'Показывать в режиме трансляции')
    .setType('bool');
  eventTypes.addField('needForSecondPlayer', 'Указывается второй игрок')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('dependsOnPoint', 'Влияет на счет матча')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('redCard', 'Красная карточка')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('yellowCard', 'Желтая карточка')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateBlock', 'Участвует в расчете Блоки')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateTakeaway', 'Участвует в расчете Выносы')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateSelection', 'Участвует в расчете Отборы')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateInterseption', 'Участвует в расчете Перехват')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateGuardian', 'Участвует в расчете Опека')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculatePositionError', 'Участвует в расчете Поз.ошибки')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateGrossError', 'Участвует в расчете Грубые ошибки')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculatePositiveDribling', 'Участвует в расчете Дриблинг +')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateNegativeDribling', 'Участвует в расчете Дриблинг -')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculatePositiveSgm', 'Участвует в расчете СГМ +')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateNegativeSgm', 'Участвует в расчете СГМ -')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculatePositiveRgm', 'Участвует в расчете РГМ +')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateNegativeRgm', 'Участвует в расчете РГМ -')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateLosses', 'Участвует в расчете Потери под прессингом')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateGegenPressing', 'Участвует в расчете контрпрессинг')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculatePressing', 'Участвует в расчете Прессинг')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateSaveBall', 'Участвует в расчете Сохранение мяча')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculatePositiveTransfer', 'Участвует в расчете Передачи +')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateNegativeTransfer', 'Участвует в расчете Передачи -')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateHit', 'Участвует в расчете Удары')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateHitTarget', 'Участвует в расчете Удары в створ')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateCorner', 'Участвует в расчете Угловой удар')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateFoul', 'Участвует в расчете Фол')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addField('calculateOffside', 'Участвует в расчете Оффсайд')
    .setType('bool')
    .setShowInList(false);
  eventTypes.addPredefinedElements([
    {
      id: 'playerEnter',
      title: 'Выход на поле',
      points: 10,
      needForSecondPlayer: false,
      dependsOnPoint: false,
      redCard: false,
      yellowCard: false,
    },
    {
      id: 'yellowCard',
      title: 'Желтая карточка',
      points: 15,
      needForSecondPlayer: false,
      dependsOnPoint: false,
      redCard: false,
      yellowCard: true,
    },
    {
      id: 'redCard',
      title: 'Красная карточка',
      points: 7,
      needForSecondPlayer: false,
      dependsOnPoint: false,
      redCard: true,
      yellowCard: false,
    },
    {
      id: 'replacement',
      title: 'Замена',
      points: 4,
      needForSecondPlayer: true,
      dependsOnPoint: false,
      redCard: false,
      yellowCard: false,
    },
    {
      id: 'swap',
      title: 'Перестановка',
      points: 20,
      needForSecondPlayer: false,
    },
  ]);

  // playerAggregatedRoles
  const playerAggregatedRoles = system.addCatalog('playerAggregatedRoles');
  playerAggregatedRoles.setNeedFor('Справочник агрегированных позиций');
  playerAggregatedRoles.setTitles({
    en: {plural: 'Player aggregated roles', singular: 'Player aggregated role'},
    ru: {plural: 'Агрегированные позиции', singular: 'Агрегированная позиция'},
  });
  playerAggregatedRoles.getKey()
    .setType('string')
    .setRequired();
  playerAggregatedRoles.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  playerAggregatedRoles.addPredefinedElements([
    {id: 'attackAggregated', title: 'Нападающий'},
    {id: 'midfielderAggregated', title: 'Полузащитник'},
    {id: 'defenderAggregated', title: 'Защитник'},
    {id: 'goalkeeperAggregated', title: 'Вратарь'},
  ]);

  // playerRoles
  const playerRoles = system.addCatalog('playerRoles');
  playerRoles.setNeedFor('Справочник амплуа игроков');
  playerRoles.setTitles({
    en: {plural: 'Player roles', singular: 'Player role'},
    ru: {plural: 'Роли игроков', singular: 'Роль игрока'},
  });
  playerRoles.getKey()
    .setType('string')
    .setRequired();
  playerRoles.addField('title', 'Название', {isTitleField: true})
    .setType('string')
    .setRequired();
  playerRoles.addField('shortTitle', 'Сокращенное название')
    .setType('string')
    .setRequired();
  playerRoles.addLinkField('playerAggregatedRoles', 'playerAggregatedRoleId', 'Агрегированная позиция')
    .setType('string')
    .setRequired();
  playerRoles.addPredefinedElements([
    // 1
    {id: 'goalkeeper', title: 'Вратарь', shortTitle: 'ВР', playerAggregatedRoleId: 'goalkeeperAggregated'},
    // 2
    {id: 'leftBack', title: 'Левый защитник', shortTitle: 'ЛЗ', playerAggregatedRoleId: 'defenderAggregated'},
    // 3
    {id: 'leftCenterBack', title: 'Левый центральный защитник', shortTitle: 'ЛЦЗ', playerAggregatedRoleId: 'defenderAggregated'},
    // 4
    {id: 'Centerdef', title: 'Центральный защитник', shortTitle: 'ЦЗ', playerAggregatedRoleId: 'defenderAggregated'},
    // 5
    {id: 'rightCenterBack', title: 'Правый центральный защитник', shortTitle: 'ПЦЗ', playerAggregatedRoleId: 'defenderAggregated'},
    // 6
    {id: 'rightBack', title: 'Правый защитник', shortTitle: 'ПЗ', playerAggregatedRoleId: 'defenderAggregated'},
    // 7
    {id: 'leftMidfielder', title: 'Левый фулбек', shortTitle: 'ЛФБ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 8
    {id: 'leftCentralMidfielder', title: 'Левый опорный полузащитник', shortTitle: 'ЛОПЗ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 9
    {id: 'centerMidfielder', title: 'Опорный полузащитник', shortTitle: 'ОПЗ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 10
    {id: 'rightCentralMidfielder', title: 'Правый опорный полузащитник', shortTitle: 'ПОПЗ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 11
    {id: 'rightMidfielder', title: 'Правый фулбек', shortTitle: 'ПФБ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 12
    {id: 'leftDefensiveMidfielder', title: 'Левый полузащитник', shortTitle: 'ЛПЗ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 13
    {id: 'leftCenterDefensiveMidfielder', title: 'Левый атакующий полузащитник', shortTitle: 'ЛАТПЗ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 14
    {id: 'defensiveMidfielder', title: 'Центральный атакующий полузащитник', shortTitle: 'ЦАПЗ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 15
    {id: 'rightCenterDefensiveMidfielder', title: 'Правый атакующий полузащитник', shortTitle: 'ПАПЗ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 16
    {id: 'rightDefensiveMidfielder', title: 'Правый полузащитник', shortTitle: 'ППЗ', playerAggregatedRoleId: 'midfielderAggregated'},
    // 17
    {id: 'leftWinger', title: 'Левый нападающий', shortTitle: 'ЛН', playerAggregatedRoleId: 'attackAggregated'},
    // 18
    {id: 'leftCenterWinger', title: 'Левый центральный нападающий', shortTitle: 'ЛЦН', playerAggregatedRoleId: 'attackAggregated'},
    // 19
    {id: 'centerForward', title: 'Центральный нападающий', shortTitle: 'ЦН', playerAggregatedRoleId: 'attackAggregated'},
    // 20
    {id: 'rightCenterWinger', title: 'Правый центральный нападающий', shortTitle: 'ПЦН', playerAggregatedRoleId: 'attackAggregated'},
    // 21
    {id: 'rightWinger', title: 'Правый нападающий', shortTitle: 'ПН', playerAggregatedRoleId: 'attackAggregated'},
  ]);

  // historyOfPlayerRoles
  const historyOfPlayerRoles = system.addCatalog('historyOfPlayerRoles');
  historyOfPlayerRoles.setNeedFor('История изменения амплуа игроков на матче');
  historyOfPlayerRoles.setTitles({
    en: {plural: 'History of player roles', singular: 'History of player role'},
    ru: {plural: 'История ролей игроков', singular: 'История роли игрока'},
  });
  historyOfPlayerRoles.addLinkField('matches', 'matchId', 'Матч')
    .setRequired();
  historyOfPlayerRoles.addLinkField('players', 'playerId', 'Игрок')
    .setRequired();
  historyOfPlayerRoles.addLinkField('playerRoles', 'playerRoleId', 'Амплуа игрока')
    .setType('string')
    .setRequired();
  historyOfPlayerRoles.addField('status', 'Игрок на поле')
    .setType('bool');
  historyOfPlayerRoles.addField('order', 'Время на матче')
    .setType('int')
    .setRequired();

  // matchRequests
  const matchRequests = system.addCatalog('matchRequests');
  matchRequests.setNeedFor('Таблица заявок на матч');
  matchRequests.setTitles({
    en: {plural: 'Match requests', singular: 'Match request'},
    ru: {plural: 'Заявки на матчи', singular: 'Заявка на матч'},
  });
  matchRequests.addLinkField('matches', 'matchId', 'Матч')
    .setRequired();
  matchRequests.addLinkField('teamForCompetitions', 'teamForCompetitionId', 'Команда на турнире')
    .setRequired();
  matchRequests.addUniqueConstraint(['matchId', 'teamForCompetitionId']);

  // playerForMatchRequests
  const playerForMatchRequests = system.addCatalog('playerForMatchRequests');
  playerForMatchRequests.setNeedFor('Таблица игроков заявки');
  playerForMatchRequests.setTitles({
    en: {plural: 'Player for match requests', singular: 'Player for match request'},
    ru: {plural: 'Заявки игроков на матч', singular: 'Заявка игрока на матч'},
  });
  playerForMatchRequests.addLinkField('matchRequests', 'matchRequestId', 'Заявка на матч')
    .setRequired();
  playerForMatchRequests.addLinkField('players', 'playerId', 'Игрок')
    .setRequired();
  playerForMatchRequests.addUniqueConstraint(['matchRequestId', 'playerId']);

  // teamMatchLists
  const teamMatchLists = system.addCatalog('teamMatchLists');
  teamMatchLists.setNeedFor('Таблица состава команд');
  teamMatchLists.setTitles({
    en: {plural: 'Team match lists', singular: 'Team match list'},
    ru: {plural: 'Составы команд на матчи', singular: 'Состав команды на матч'},
  });
  teamMatchLists.addLinkField('matches', 'matchId', 'Матч')
    .setRequired();
  teamMatchLists.addLinkField('teamForCompetitions', 'teamForCompetitionId', 'Команда на турнире')
    .setRequired();
  teamMatchLists.addUniqueConstraint(['matchId', 'teamForCompetitionId']);

  // playerForTeamMatchLists
  const playerForTeamMatchLists = system.addCatalog('playerForTeamMatchLists');
  playerForTeamMatchLists.setNeedFor('Таблица игроков заявки');
  playerForTeamMatchLists.setTitles({
    en: {plural: 'Player for team match lists', singular: 'Player for team match list'},
    ru: {plural: 'Игроки заявки', singular: 'Игрок заявки'},
  });
  playerForTeamMatchLists.addLinkField('teamMatchLists', 'teamMatchListId', 'Состав команды')
    .setRequired();
  playerForTeamMatchLists.addLinkField('players', 'playerId', 'Игрок')
    .setRequired();
  playerForTeamMatchLists.addField('startingPosition', 'Участвует в стартовом составе')
    .setType('bool');
  playerForTeamMatchLists.addField('onField', 'На поле')
    .setType('bool')
    .setShowInList(false)
    .setNotUpdatableByUser('false', undefined);
  playerForTeamMatchLists.addLinkField('playerRoles', 'playerRoleId', 'Амплуа игрока')
    .setType('string')
    .setRequired();
  playerForTeamMatchLists.addField('playerOnMatchNumber', 'Номер игрока на матче');
  playerForTeamMatchLists.addUniqueConstraint(['playerId', 'teamMatchListId']);

  // playerMatchRatings
  const playerMatchRatings = system.addCatalog('playerMatchRatings');
  playerMatchRatings.setTitles({
    en: {plural: 'Players match ratings', singular: 'Player match rating'},
    ru: {plural: 'Рейтинги игроков на матчах', singular: 'Рейтинг игрока на матче'},
  });
  playerMatchRatings.setNeedFor('Таблица рейтингов игроков команд на матчах');
  playerMatchRatings.addLinkField('matches', 'matchId', 'Матч').setRequired();
  playerMatchRatings.addLinkField('players', 'playerId', 'Игрок').setRequired();
  playerMatchRatings.addField('rating', 'Рейтинг')
    .setType('int')
    .setRequired();
  playerMatchRatings.addField('progressivePassAccuracy', 'Точность прогрессивных передач')
    .setType('float')
    .setShowInCreate(false)
    .setShowInEdit(false);
  playerMatchRatings.addField('playerRatingAverage', 'Средний рейтинг')
    .setType('float')
    .setShowInCreate(false)
    .setShowInEdit(false);

  // entitiesTrackings
  const entitiesTrackings = system.addCatalog('entitiesTrackings');
  entitiesTrackings.setTitles({
    en: {plural: 'Entities trackings', singular: 'Entity tracking'},
    ru: {plural: 'Отслеживание сущностей', singular: 'Отслеживание сущности'},
  });
  entitiesTrackings.setNeedFor('Отслеживание сущностей');
  entitiesTrackings.addLinkField('entities', 'entityTypeId', 'Сущность')
    .setType('string')
    .setRequired();
  entitiesTrackings.addField('entityId', 'Идентификатор сущности')
    .setType('string')
    .setRequired();
  entitiesTrackings.addField('lastEntityComputed', 'Сущность последний раз вычислена')
    .setType('datetime')
    .setRequired();
  entitiesTrackings.addField('lastEntityScheduled', 'Сущность последний раз добавлена в очередь на обработку')
    .setType('datetime');
  entitiesTrackings.addField('lastEntityUpdate', 'Сущность последний раз обновлена')
    .setType('datetime')
    .setRequired();
  entitiesTrackings.addUniqueConstraint(['entityTypeId', 'entityId']);

  // glossaries
  const glossaries = system.addCatalog('glossaries');
  glossaries.setTitles({
    en: {plural: 'Glossaries', singular: 'Glossary'},
    ru: {plural: 'Глоссарий', singular: 'Глоссарий'},
  });
  glossaries.setNeedFor('Таблица для записи всех определений, используемых при формировании отчета');
  glossaries.addField('title', 'Название')
    .setType('string')
    .setRequired();
  glossaries.addField('description', 'Определение термина')
    .setType('string')
    .setRequired();
  glossaries.addLinkField('periodTypes', 'periodTypeId', 'Тип периода')
    .setType('string')
    .setRequired();

  // reportForTeams
  const reportForTeams = system.addCatalog('reportForTeams');
  reportForTeams.setTitles({
    en: {plural: 'Reports for teams', singular: 'Report for team'},
    ru: {plural: 'Отчеты для команд', singular: 'Отчет для команды'},
  });
  reportForTeams.setNeedFor('Таблица с отчетами для команд');
  reportForTeams.addField('created', 'Дата и время создания')
    .setType('datetime')
    .setRequired();
  reportForTeams.addField('title', 'Название')
    .setType('string')
    .setRequired();
  reportForTeams.addLinkField('teamForCompetitions', 'teamForCompetitionId', 'Команда на турнире')
    .setRequired();
  reportForTeams.addLinkField('matches', 'matchId', 'Матч')
    .setRequired();
  reportForTeams.addLinkField('clubs', 'clubId', 'Клуб')
    .setRequired();
  reportForTeams.addField('lastUpdated', 'Дата последнего изменения')
    .setType('date');
  reportForTeams.addField('paid', 'Оплачен')
    .setType('bool');
  reportForTeams.addLinkField(files, 'fileId', 'Файл отчета')
    .setShowInList(false)
    .setShowInShow(false)
    .setShowInEdit(false)
    .setShowInCreate(false);
  reportForTeams.addLinkField(files, 'htmlFileId', 'HTML файл отчета')
    .setShowInList(false)
    .setShowInShow(false)
    .setShowInEdit(false)
    .setShowInCreate(false);
  reportForTeams.addLinkField(files, 'jsonFileId', 'JSON файл отчета')
    .setShowInList(false)
    .setShowInShow(false)
    .setShowInEdit(false)
    .setShowInCreate(false);
  reportForTeams.addField('needRecalculate', 'Требуется пересчет')
    .setType('bool')
    .setShowInList(false)
    .setShowInShow(false)
    .setShowInEdit(false)
    .setShowInCreate(false);

  // roles
  const roles = system.getCatalogByName('roles');
  roles.setPredefinedElements([
    {
      id: 'base',
      title: 'Базовая роль',
      hasAllPermissions: false,
      allTenantsAvailable: false,
    },
    {
      id: 'admin',
      title: 'Системный администратор',
      hasAllPermissions: true,
      allTenantsAvailable: true,
    },
    {
      id: 'manager',
      title: 'Пользователь',
      hasAllPermissions: false,
      allTenantsAvailable: false,
    },
    {
      id: 'commenter',
      title: 'Комментатор',
      hasAllPermissions: false,
      allTenantsAvailable: false,
    },
    {
      id: 'analyst',
      title: 'Аналитик',
      hasAllPermissions: false,
      allTenantsAvailable: false,
    },
  ]);

  // events
  const events = system.addDocument('events');
  events.setNeedFor('Все события');
  events.setTitles({
    en: {plural: 'Events', singular: 'Event'},
    ru: {plural: 'События', singular: 'Событие'},
  });
  events.addField('timeSecond', 'Временная точка на видео в секундах')
    .setType('int');
  events.addField('linkToTimeSecond', 'Ссылка к видео')
    .setType('string');
  events.addField('controversialPoint', 'Спорный момент')
    .setType('bool');
  events.addField('startControversialPoint', 'Начало спорного момента')
    .setType('int');
  events.addField('highlight', 'Интересный момент')
    .setType('bool');
  events.addField('startHighlight', 'Начало интересного момента')
    .setType('int');
  events.addField('order', 'Порядок события')
    .setType('int')
    .setRequired();
  events.addLinkField('eventTypes', 'eventTypeId', 'Тип события')
    .setType('string')
    .setRequired();
  events.addLinkField('matchVideos', 'videoId', 'Видео');
  events.addLinkField('teamForCompetitions', 'teamForCompetitionId', 'Команда');
  events.addLinkField('players', 'mainPlayerId', 'Игрок');
  events.addLinkField('players', 'secondPlayerId', 'Игрок 2');
  events.addLinkField('playerRoles', 'firstPlayerRoleId', 'Амплуа 1 игрока')
    .setType('string');
  events.addLinkField('playerRoles', 'secondPlayerRoleId', 'Амплуа 2 игрока')
    .setType('string');
  events.addLinkField('periodTypes', 'periodTypeId', 'Тип периода')
    .setType('string');
  events.addLinkField('matches', 'matchId', 'Матч')
    .setRequired();
  events.addField('points', 'Баллы')
    .setType('int')
    .setRequired();
  events.addField('periodNumber', 'Номер периода')
    .setType('int');

  // matchPeriodMarkups
  const matchPeriodMarkups = system.addCatalog('matchPeriodMarkups');
  matchPeriodMarkups.setTitles({
    en: {plural: 'Match period markups', singular: 'Match period markup'},
    ru: {plural: 'Разметки периодов', singular: 'Разметка периода'},
  });
  matchPeriodMarkups.setNeedFor('Дочерняя сущность для матча');
  matchPeriodMarkups.addField('timestamp', 'Временная метка мм:сс')
    .setType('int');
  matchPeriodMarkups.addLinkField('periodTypes', 'periodTypeId', 'Тип периода')
    .setType('string')
    .setRequired();
  matchPeriodMarkups.addLinkField('matchVideos', 'matchVideoId', 'Видео матча');
  matchPeriodMarkups.addUniqueConstraint(['matchVideoId', 'periodTypeId']);

  // teamMatchReports
  const teamMatchReports = system.addCatalog('teamMatchReports');
  teamMatchReports.setTitles({
    en: {plural: 'Team match reports', singular: 'Team match report'},
    ru: {plural: 'Командные отчеты', singular: 'Командный отчет'},
  });
  teamMatchReports.setNeedFor('Командный отчет');
  teamMatchReports.addField('created', 'Дата и время создания')
    .setType('datetime')
    .setRequired();
  teamMatchReports.addLinkField('matches', 'matchId', 'Матч')
    .setRequired();
  teamMatchReports.addField('lastUpdated', 'Дата последнего изменения')
    .setType('date')
    .setNotUpdatableByUser(undefined);
  teamMatchReports.addLinkField(files, 'fileId', 'Файл отчета')
    .setShowInList(false)
    .setShowInShow(false)
    .setShowInEdit(false)
    .setShowInCreate(false);
  teamMatchReports.addField('needRecalculate', 'Требуется пересчет')
    .setType('bool')
    .setDefaultDbValue('false')
    .setShowInList(false)
    .setShowInShow(false)
    .setShowInEdit(false)
    .setShowInCreate(false);
  teamMatchReports.addUniqueConstraint(['matchId']);
};

export default addCatalogs;
