-- CreateTable
CREATE TABLE "WscContact" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "wscUserId" INTEGER NOT NULL,

    CONSTRAINT "WscContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WscMessage" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "externalId" TEXT NOT NULL,
    "dateTimeRaw" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "wscUserId" INTEGER NOT NULL,
    "wscContactId" INTEGER NOT NULL,

    CONSTRAINT "WscMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WscUser" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "login" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "accessToken" TEXT,

    CONSTRAINT "WscUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerAggregatedRole" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,

    CONSTRAINT "PlayerAggregatedRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchVideo" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "videoTitle" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,
    "matchId" INTEGER,
    "order" INTEGER,

    CONSTRAINT "MatchVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Glossary" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "periodTypeId" TEXT NOT NULL,

    CONSTRAINT "Glossary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerForMatchRequest" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "matchRequestId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "PlayerForMatchRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchRequest" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "matchId" INTEGER NOT NULL,
    "teamForCompetitionId" INTEGER NOT NULL,

    CONSTRAINT "MatchRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "patronymic" TEXT,
    "title" TEXT NOT NULL,
    "playerName" TEXT,
    "number" INTEGER NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "age" INTEGER,
    "teamId" INTEGER,
    "createdByManagerId" INTEGER NOT NULL,
    "lastChangedByManagerId" INTEGER,
    "parentId" INTEGER,
    "linkToProfile" TEXT,
    "playerRating" INTEGER,
    "photoId" INTEGER,
    "playerRatingAverage" DOUBLE PRECISION,
    "commonPlayerRatingGoalkeeper" INTEGER,
    "commonPlayerRatingAttack" INTEGER,
    "commonPlayerRatingMidfielder" INTEGER,
    "commonPlayerRatingDefender" INTEGER,
    "playedMatches" INTEGER,
    "averagePlayerRatingGoalkeeper" DOUBLE PRECISION,
    "averagePlayerRatingAttack" DOUBLE PRECISION,
    "averagePlayerRatingMidfielder" DOUBLE PRECISION,
    "averagePlayerRatingDefender" DOUBLE PRECISION,
    "playerAggregatedRoleId" TEXT,
    "playerTag" TEXT,
    "progressivePassAccuracy" DOUBLE PRECISION,
    "playerRankId" TEXT,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerForTeamMatchList" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "teamMatchListId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "startingPosition" BOOLEAN,
    "onField" BOOLEAN,
    "playerRoleId" TEXT NOT NULL,
    "playerOnMatchNumber" INTEGER,

    CONSTRAINT "PlayerForTeamMatchList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamForPlayer" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "playerId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "TeamForPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoryOfPlayerRole" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "matchId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "playerRoleId" TEXT NOT NULL,
    "status" BOOLEAN,
    "order" INTEGER NOT NULL,

    CONSTRAINT "HistoryOfPlayerRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventTypeCategory" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,

    CONSTRAINT "EventTypeCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Club" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "createdByManagerId" INTEGER NOT NULL,
    "lastChangedByManagerId" INTEGER,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMatchReport" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "created" TIMESTAMP(3) NOT NULL,
    "matchId" INTEGER NOT NULL,
    "lastUpdated" DATE,
    "fileId" INTEGER,
    "needRecalculate" BOOLEAN DEFAULT false,

    CONSTRAINT "TeamMatchReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "dateOfBirthFrom" INTEGER NOT NULL,
    "dateOfBirthTo" INTEGER,
    "createdByManagerId" INTEGER NOT NULL,
    "lastChangedByManagerId" INTEGER,
    "clubId" INTEGER NOT NULL,
    "fileId" INTEGER,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamForCompetition" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "fullTitle" TEXT,
    "teamId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,

    CONSTRAINT "TeamForCompetition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfigurationVariable" (
    "id" TEXT NOT NULL,
    "value" JSONB NOT NULL,

    CONSTRAINT "ConfigurationVariable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "createdByManagerId" INTEGER NOT NULL,
    "lastChangedByManagerId" INTEGER,
    "title" TEXT NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "firstTeamId" INTEGER,
    "firstTeamColor" TEXT,
    "firstTeamOnFieldId" INTEGER,
    "secondTeamId" INTEGER,
    "secondTeamColor" TEXT,
    "matchDate" DATE NOT NULL,
    "matchTime" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "place" TEXT,
    "active" BOOLEAN,
    "firstTeamPoints" INTEGER,
    "secondTeamPoints" INTEGER,
    "redCardFirstTeam" INTEGER,
    "redCardSecondTeam" INTEGER,
    "yellowCardFirstTeam" INTEGER,
    "yellowCardSecondTeam" INTEGER,
    "firstTeamHandleTime" INTEGER,
    "secondTeamHandleTime" INTEGER,
    "linkToProtocol" TEXT,
    "matchStatusId" TEXT DEFAULT 'created',

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organizator" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "createdByManagerId" INTEGER NOT NULL,
    "lastChangedByManagerId" INTEGER,

    CONSTRAINT "Organizator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntitiesTracking" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "entityTypeId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "lastEntityComputed" TIMESTAMP(3) NOT NULL,
    "lastEntityScheduled" TIMESTAMP(3),
    "lastEntityUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EntitiesTracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportForClub" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "clubId" INTEGER NOT NULL,
    "lastUpdated" DATE,
    "paid" BOOLEAN,

    CONSTRAINT "ReportForClub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportForTeam" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "created" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "teamForCompetitionId" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,
    "clubId" INTEGER NOT NULL,
    "lastUpdated" DATE,
    "paid" BOOLEAN,
    "fileId" INTEGER,
    "htmlFileId" INTEGER,
    "jsonFileId" INTEGER,
    "needRecalculate" BOOLEAN,

    CONSTRAINT "ReportForTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportForOrganization" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "organizatorId" INTEGER NOT NULL,
    "lastUpdated" DATE,
    "paid" BOOLEAN,

    CONSTRAINT "ReportForOrganization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportForParent" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "playerId" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "lastUpdated" DATE,
    "paid" BOOLEAN,

    CONSTRAINT "ReportForParent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchPeriodMarkup" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "timestamp" INTEGER,
    "periodTypeId" TEXT NOT NULL,
    "matchVideoId" INTEGER,

    CONSTRAINT "MatchPeriodMarkup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerRank" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "fileId" INTEGER,

    CONSTRAINT "PlayerRank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerCompetitionRating" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "competitionId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "PlayerCompetitionRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerMatchRating" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "matchId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "progressivePassAccuracy" DOUBLE PRECISION,
    "playerRatingAverage" DOUBLE PRECISION,

    CONSTRAINT "PlayerMatchRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parent" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "patronymic" TEXT,
    "createdByManagerId" INTEGER NOT NULL,
    "lastChangedByManagerId" INTEGER,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerRole" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "shortTitle" TEXT NOT NULL,
    "playerAggregatedRoleId" TEXT NOT NULL,

    CONSTRAINT "PlayerRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "search" TEXT,
    "timeSecond" INTEGER,
    "linkToTimeSecond" TEXT,
    "controversialPoint" BOOLEAN,
    "startControversialPoint" INTEGER,
    "highlight" BOOLEAN,
    "startHighlight" INTEGER,
    "order" INTEGER NOT NULL,
    "eventTypeId" TEXT NOT NULL,
    "videoId" INTEGER,
    "teamForCompetitionId" INTEGER,
    "mainPlayerId" INTEGER,
    "secondPlayerId" INTEGER,
    "firstPlayerRoleId" TEXT,
    "secondPlayerRoleId" TEXT,
    "periodTypeId" TEXT,
    "matchId" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "periodNumber" INTEGER,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMatchList" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "matchId" INTEGER NOT NULL,
    "teamForCompetitionId" INTEGER NOT NULL,

    CONSTRAINT "TeamMatchList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerForCompetitionTeam" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "teamForCompetitionId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "PlayerForCompetitionTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchStatus" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,

    CONSTRAINT "MatchStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeriodType" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "PeriodType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventType" (
    "id" TEXT NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "eventTypeCategoryId" TEXT,
    "order" INTEGER DEFAULT 0,
    "showInTranslationMode" BOOLEAN,
    "needForSecondPlayer" BOOLEAN,
    "dependsOnPoint" BOOLEAN,
    "redCard" BOOLEAN,
    "yellowCard" BOOLEAN,
    "calculateBlock" BOOLEAN,
    "calculateTakeaway" BOOLEAN,
    "calculateSelection" BOOLEAN,
    "calculateInterseption" BOOLEAN,
    "calculateGuardian" BOOLEAN,
    "calculatePositionError" BOOLEAN,
    "calculateGrossError" BOOLEAN,
    "calculatePositiveDribling" BOOLEAN,
    "calculateNegativeDribling" BOOLEAN,
    "calculatePositiveSgm" BOOLEAN,
    "calculateNegativeSgm" BOOLEAN,
    "calculatePositiveRgm" BOOLEAN,
    "calculateNegativeRgm" BOOLEAN,
    "calculateLosses" BOOLEAN,
    "calculateGegenPressing" BOOLEAN,
    "calculatePressing" BOOLEAN,
    "calculateSaveBall" BOOLEAN,
    "calculatePositiveTransfer" BOOLEAN,
    "calculateNegativeTransfer" BOOLEAN,
    "calculateHit" BOOLEAN,
    "calculateHitTarget" BOOLEAN,
    "calculateCorner" BOOLEAN,
    "calculateFoul" BOOLEAN,
    "calculateOffside" BOOLEAN,

    CONSTRAINT "EventType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competition" (
    "id" SERIAL NOT NULL,
    "search" TEXT,
    "title" TEXT NOT NULL,
    "dateOfBirthFrom" INTEGER,
    "dateOfBirthTo" INTEGER,
    "organizationId" INTEGER NOT NULL,
    "createdByManagerId" INTEGER NOT NULL,
    "lastChangedByManagerId" INTEGER,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WscContact_name_phoneNumber_wscUserId_key" ON "WscContact"("name", "phoneNumber", "wscUserId");

-- CreateIndex
CREATE UNIQUE INDEX "WscMessage_externalId_key" ON "WscMessage"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "WscUser_login_key" ON "WscUser"("login");

-- CreateIndex
CREATE UNIQUE INDEX "WscUser_accessToken_key" ON "WscUser"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerForMatchRequest_matchRequestId_playerId_key" ON "PlayerForMatchRequest"("matchRequestId", "playerId");

-- CreateIndex
CREATE UNIQUE INDEX "MatchRequest_matchId_teamForCompetitionId_key" ON "MatchRequest"("matchId", "teamForCompetitionId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerForTeamMatchList_playerId_teamMatchListId_key" ON "PlayerForTeamMatchList"("playerId", "teamMatchListId");

-- CreateIndex
CREATE UNIQUE INDEX "TeamForPlayer_playerId_teamId_key" ON "TeamForPlayer"("playerId", "teamId");

-- CreateIndex
CREATE UNIQUE INDEX "TeamMatchReport_matchId_key" ON "TeamMatchReport"("matchId");

-- CreateIndex
CREATE UNIQUE INDEX "TeamForCompetition_title_competitionId_key" ON "TeamForCompetition"("title", "competitionId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_firstTeamId_secondTeamId_matchDate_matchTime_key" ON "Match"("firstTeamId", "secondTeamId", "matchDate", "matchTime");

-- CreateIndex
CREATE UNIQUE INDEX "EntitiesTracking_entityTypeId_entityId_key" ON "EntitiesTracking"("entityTypeId", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "MatchPeriodMarkup_matchVideoId_periodTypeId_key" ON "MatchPeriodMarkup"("matchVideoId", "periodTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "TeamMatchList_matchId_teamForCompetitionId_key" ON "TeamMatchList"("matchId", "teamForCompetitionId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerForCompetitionTeam_teamForCompetitionId_playerId_key" ON "PlayerForCompetitionTeam"("teamForCompetitionId", "playerId");

-- AddForeignKey
ALTER TABLE "WscContact" ADD CONSTRAINT "WscContact_wscUserId_fkey" FOREIGN KEY ("wscUserId") REFERENCES "WscUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WscMessage" ADD CONSTRAINT "WscMessage_wscUserId_fkey" FOREIGN KEY ("wscUserId") REFERENCES "WscUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WscMessage" ADD CONSTRAINT "WscMessage_wscContactId_fkey" FOREIGN KEY ("wscContactId") REFERENCES "WscContact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchVideo" ADD CONSTRAINT "MatchVideo_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Glossary" ADD CONSTRAINT "Glossary_periodTypeId_fkey" FOREIGN KEY ("periodTypeId") REFERENCES "PeriodType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerForMatchRequest" ADD CONSTRAINT "PlayerForMatchRequest_matchRequestId_fkey" FOREIGN KEY ("matchRequestId") REFERENCES "MatchRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerForMatchRequest" ADD CONSTRAINT "PlayerForMatchRequest_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchRequest" ADD CONSTRAINT "MatchRequest_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchRequest" ADD CONSTRAINT "MatchRequest_teamForCompetitionId_fkey" FOREIGN KEY ("teamForCompetitionId") REFERENCES "TeamForCompetition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_createdByManagerId_fkey" FOREIGN KEY ("createdByManagerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_lastChangedByManagerId_fkey" FOREIGN KEY ("lastChangedByManagerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerAggregatedRoleId_fkey" FOREIGN KEY ("playerAggregatedRoleId") REFERENCES "PlayerAggregatedRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerRankId_fkey" FOREIGN KEY ("playerRankId") REFERENCES "PlayerRank"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerForTeamMatchList" ADD CONSTRAINT "PlayerForTeamMatchList_teamMatchListId_fkey" FOREIGN KEY ("teamMatchListId") REFERENCES "TeamMatchList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerForTeamMatchList" ADD CONSTRAINT "PlayerForTeamMatchList_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerForTeamMatchList" ADD CONSTRAINT "PlayerForTeamMatchList_playerRoleId_fkey" FOREIGN KEY ("playerRoleId") REFERENCES "PlayerRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamForPlayer" ADD CONSTRAINT "TeamForPlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamForPlayer" ADD CONSTRAINT "TeamForPlayer_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryOfPlayerRole" ADD CONSTRAINT "HistoryOfPlayerRole_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryOfPlayerRole" ADD CONSTRAINT "HistoryOfPlayerRole_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryOfPlayerRole" ADD CONSTRAINT "HistoryOfPlayerRole_playerRoleId_fkey" FOREIGN KEY ("playerRoleId") REFERENCES "PlayerRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Club" ADD CONSTRAINT "Club_createdByManagerId_fkey" FOREIGN KEY ("createdByManagerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Club" ADD CONSTRAINT "Club_lastChangedByManagerId_fkey" FOREIGN KEY ("lastChangedByManagerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMatchReport" ADD CONSTRAINT "TeamMatchReport_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMatchReport" ADD CONSTRAINT "TeamMatchReport_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_createdByManagerId_fkey" FOREIGN KEY ("createdByManagerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_lastChangedByManagerId_fkey" FOREIGN KEY ("lastChangedByManagerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamForCompetition" ADD CONSTRAINT "TeamForCompetition_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamForCompetition" ADD CONSTRAINT "TeamForCompetition_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_createdByManagerId_fkey" FOREIGN KEY ("createdByManagerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_lastChangedByManagerId_fkey" FOREIGN KEY ("lastChangedByManagerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_firstTeamId_fkey" FOREIGN KEY ("firstTeamId") REFERENCES "TeamForCompetition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_firstTeamOnFieldId_fkey" FOREIGN KEY ("firstTeamOnFieldId") REFERENCES "TeamForCompetition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_secondTeamId_fkey" FOREIGN KEY ("secondTeamId") REFERENCES "TeamForCompetition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_matchStatusId_fkey" FOREIGN KEY ("matchStatusId") REFERENCES "MatchStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organizator" ADD CONSTRAINT "Organizator_createdByManagerId_fkey" FOREIGN KEY ("createdByManagerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organizator" ADD CONSTRAINT "Organizator_lastChangedByManagerId_fkey" FOREIGN KEY ("lastChangedByManagerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntitiesTracking" ADD CONSTRAINT "EntitiesTracking_entityTypeId_fkey" FOREIGN KEY ("entityTypeId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForClub" ADD CONSTRAINT "ReportForClub_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForClub" ADD CONSTRAINT "ReportForClub_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForClub" ADD CONSTRAINT "ReportForClub_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForTeam" ADD CONSTRAINT "ReportForTeam_teamForCompetitionId_fkey" FOREIGN KEY ("teamForCompetitionId") REFERENCES "TeamForCompetition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForTeam" ADD CONSTRAINT "ReportForTeam_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForTeam" ADD CONSTRAINT "ReportForTeam_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForTeam" ADD CONSTRAINT "ReportForTeam_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForTeam" ADD CONSTRAINT "ReportForTeam_htmlFileId_fkey" FOREIGN KEY ("htmlFileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForTeam" ADD CONSTRAINT "ReportForTeam_jsonFileId_fkey" FOREIGN KEY ("jsonFileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForOrganization" ADD CONSTRAINT "ReportForOrganization_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForOrganization" ADD CONSTRAINT "ReportForOrganization_organizatorId_fkey" FOREIGN KEY ("organizatorId") REFERENCES "Organizator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForParent" ADD CONSTRAINT "ReportForParent_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForParent" ADD CONSTRAINT "ReportForParent_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportForParent" ADD CONSTRAINT "ReportForParent_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchPeriodMarkup" ADD CONSTRAINT "MatchPeriodMarkup_periodTypeId_fkey" FOREIGN KEY ("periodTypeId") REFERENCES "PeriodType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchPeriodMarkup" ADD CONSTRAINT "MatchPeriodMarkup_matchVideoId_fkey" FOREIGN KEY ("matchVideoId") REFERENCES "MatchVideo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerRank" ADD CONSTRAINT "PlayerRank_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCompetitionRating" ADD CONSTRAINT "PlayerCompetitionRating_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCompetitionRating" ADD CONSTRAINT "PlayerCompetitionRating_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerMatchRating" ADD CONSTRAINT "PlayerMatchRating_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerMatchRating" ADD CONSTRAINT "PlayerMatchRating_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_createdByManagerId_fkey" FOREIGN KEY ("createdByManagerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_lastChangedByManagerId_fkey" FOREIGN KEY ("lastChangedByManagerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerRole" ADD CONSTRAINT "PlayerRole_playerAggregatedRoleId_fkey" FOREIGN KEY ("playerAggregatedRoleId") REFERENCES "PlayerAggregatedRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "EventType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "MatchVideo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_teamForCompetitionId_fkey" FOREIGN KEY ("teamForCompetitionId") REFERENCES "TeamForCompetition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_mainPlayerId_fkey" FOREIGN KEY ("mainPlayerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_secondPlayerId_fkey" FOREIGN KEY ("secondPlayerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_firstPlayerRoleId_fkey" FOREIGN KEY ("firstPlayerRoleId") REFERENCES "PlayerRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_secondPlayerRoleId_fkey" FOREIGN KEY ("secondPlayerRoleId") REFERENCES "PlayerRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_periodTypeId_fkey" FOREIGN KEY ("periodTypeId") REFERENCES "PeriodType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMatchList" ADD CONSTRAINT "TeamMatchList_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMatchList" ADD CONSTRAINT "TeamMatchList_teamForCompetitionId_fkey" FOREIGN KEY ("teamForCompetitionId") REFERENCES "TeamForCompetition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerForCompetitionTeam" ADD CONSTRAINT "PlayerForCompetitionTeam_teamForCompetitionId_fkey" FOREIGN KEY ("teamForCompetitionId") REFERENCES "TeamForCompetition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerForCompetitionTeam" ADD CONSTRAINT "PlayerForCompetitionTeam_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventType" ADD CONSTRAINT "EventType_eventTypeCategoryId_fkey" FOREIGN KEY ("eventTypeCategoryId") REFERENCES "EventTypeCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organizator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_createdByManagerId_fkey" FOREIGN KEY ("createdByManagerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_lastChangedByManagerId_fkey" FOREIGN KEY ("lastChangedByManagerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;
