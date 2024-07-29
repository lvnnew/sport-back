/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Match {
    id: Int!
    createdByManagerId: Int!
    lastChangedByManagerId: Int
    title: String!
    competitionId: Int!
    firstTeamId: Int
    firstTeamColor: String
    firstTeamOnFieldId: Int
    secondTeamId: Int
    secondTeamColor: String
    matchDate: Date!
    matchTime: String!
    duration: Int!
    place: String
    active: Boolean
    firstTeamPoints: Int
    secondTeamPoints: Int
    redCardFirstTeam: Int
    redCardSecondTeam: Int
    yellowCardFirstTeam: Int
    yellowCardSecondTeam: Int
    firstTeamHandleTime: Int
    secondTeamHandleTime: Int
    linkToProtocol: String
    matchStatusId: String
  }

  """
  A date string, such as 2007-12-03, compliant with the 'full-date' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar Date

  input MatchFilter {
    q: String
    ids: [Int]
    id: Int
    createdByManagerId: Int
    createdByManagerId_in: [Int]
    createdByManagerId_not_in: [Int]
    lastChangedByManagerId: Int
    lastChangedByManagerId_in: [Int]
    lastChangedByManagerId_not_in: [Int]
    lastChangedByManagerId_defined: Boolean
    title: String
    title_in: [String]
    title_not_in: [String]
    competitionId: Int
    competitionId_in: [Int]
    competitionId_not_in: [Int]
    firstTeamId: Int
    firstTeamId_in: [Int]
    firstTeamId_not_in: [Int]
    firstTeamId_defined: Boolean
    firstTeamColor: String
    firstTeamColor_in: [String]
    firstTeamColor_not_in: [String]
    firstTeamColor_defined: Boolean
    firstTeamOnFieldId: Int
    firstTeamOnFieldId_in: [Int]
    firstTeamOnFieldId_not_in: [Int]
    firstTeamOnFieldId_defined: Boolean
    secondTeamId: Int
    secondTeamId_in: [Int]
    secondTeamId_not_in: [Int]
    secondTeamId_defined: Boolean
    secondTeamColor: String
    secondTeamColor_in: [String]
    secondTeamColor_not_in: [String]
    secondTeamColor_defined: Boolean
    matchDate: Date
    matchDate_lte: Date
    matchDate_gte: Date
    matchDate_lt: Date
    matchDate_gt: Date
    matchTime: String
    matchTime_in: [String]
    matchTime_not_in: [String]
    duration: Int
    duration_in: [Int]
    duration_not_in: [Int]
    duration_lte: Int
    duration_gte: Int
    duration_lt: Int
    duration_gt: Int
    place: String
    place_in: [String]
    place_not_in: [String]
    place_defined: Boolean
    active: Boolean
    active_defined: Boolean
    firstTeamPoints: Int
    firstTeamPoints_in: [Int]
    firstTeamPoints_not_in: [Int]
    firstTeamPoints_lte: Int
    firstTeamPoints_gte: Int
    firstTeamPoints_lt: Int
    firstTeamPoints_gt: Int
    firstTeamPoints_defined: Boolean
    secondTeamPoints: Int
    secondTeamPoints_in: [Int]
    secondTeamPoints_not_in: [Int]
    secondTeamPoints_lte: Int
    secondTeamPoints_gte: Int
    secondTeamPoints_lt: Int
    secondTeamPoints_gt: Int
    secondTeamPoints_defined: Boolean
    redCardFirstTeam: Int
    redCardFirstTeam_in: [Int]
    redCardFirstTeam_not_in: [Int]
    redCardFirstTeam_lte: Int
    redCardFirstTeam_gte: Int
    redCardFirstTeam_lt: Int
    redCardFirstTeam_gt: Int
    redCardFirstTeam_defined: Boolean
    redCardSecondTeam: Int
    redCardSecondTeam_in: [Int]
    redCardSecondTeam_not_in: [Int]
    redCardSecondTeam_lte: Int
    redCardSecondTeam_gte: Int
    redCardSecondTeam_lt: Int
    redCardSecondTeam_gt: Int
    redCardSecondTeam_defined: Boolean
    yellowCardFirstTeam: Int
    yellowCardFirstTeam_in: [Int]
    yellowCardFirstTeam_not_in: [Int]
    yellowCardFirstTeam_lte: Int
    yellowCardFirstTeam_gte: Int
    yellowCardFirstTeam_lt: Int
    yellowCardFirstTeam_gt: Int
    yellowCardFirstTeam_defined: Boolean
    yellowCardSecondTeam: Int
    yellowCardSecondTeam_in: [Int]
    yellowCardSecondTeam_not_in: [Int]
    yellowCardSecondTeam_lte: Int
    yellowCardSecondTeam_gte: Int
    yellowCardSecondTeam_lt: Int
    yellowCardSecondTeam_gt: Int
    yellowCardSecondTeam_defined: Boolean
    firstTeamHandleTime: Int
    firstTeamHandleTime_in: [Int]
    firstTeamHandleTime_not_in: [Int]
    firstTeamHandleTime_lte: Int
    firstTeamHandleTime_gte: Int
    firstTeamHandleTime_lt: Int
    firstTeamHandleTime_gt: Int
    firstTeamHandleTime_defined: Boolean
    secondTeamHandleTime: Int
    secondTeamHandleTime_in: [Int]
    secondTeamHandleTime_not_in: [Int]
    secondTeamHandleTime_lte: Int
    secondTeamHandleTime_gte: Int
    secondTeamHandleTime_lt: Int
    secondTeamHandleTime_gt: Int
    secondTeamHandleTime_defined: Boolean
    linkToProtocol: String
    linkToProtocol_in: [String]
    linkToProtocol_not_in: [String]
    linkToProtocol_defined: Boolean
    matchStatusId: String
    matchStatusId_in: [String]
    matchStatusId_not_in: [String]
    matchStatusId_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Match(id: Int!): Match
    allMatches(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MatchFilter): [Match]
    _allMatchesMeta(page: Int, perPage: Int, filter: MatchFilter): ListMetadata
  }

  type Mutation {
    createMatch(createdByManagerId: Int, lastChangedByManagerId: Int, title: String!, competitionId: Int!, firstTeamId: Int, firstTeamColor: String, firstTeamOnFieldId: Int, secondTeamId: Int, secondTeamColor: String, matchDate: Date!, matchTime: String!, duration: Int!, place: String, active: Boolean, firstTeamPoints: Int, secondTeamPoints: Int, redCardFirstTeam: Int, redCardSecondTeam: Int, yellowCardFirstTeam: Int, yellowCardSecondTeam: Int, firstTeamHandleTime: Int, secondTeamHandleTime: Int, linkToProtocol: String, matchStatusId: String): Match
    updateMatch(id: Int!, createdByManagerId: Int, lastChangedByManagerId: Int, title: String!, competitionId: Int!, firstTeamId: Int, firstTeamColor: String, firstTeamOnFieldId: Int, secondTeamId: Int, secondTeamColor: String, matchDate: Date!, matchTime: String!, duration: Int!, place: String, active: Boolean, firstTeamPoints: Int, secondTeamPoints: Int, redCardFirstTeam: Int, redCardSecondTeam: Int, yellowCardFirstTeam: Int, yellowCardSecondTeam: Int, firstTeamHandleTime: Int, secondTeamHandleTime: Int, linkToProtocol: String, matchStatusId: String): Match
    removeMatch(id: Int!): Match
  }
`;
