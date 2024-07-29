/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Event {
    id: Int!
    date: DateTime
    timeSecond: Int
    linkToTimeSecond: String
    controversialPoint: Boolean
    startControversialPoint: Int
    highlight: Boolean
    startHighlight: Int
    order: Int!
    eventTypeId: String!
    videoId: Int
    teamForCompetitionId: Int
    mainPlayerId: Int
    secondPlayerId: Int
    firstPlayerRoleId: String
    secondPlayerRoleId: String
    periodTypeId: String
    matchId: Int!
    points: Int!
    periodNumber: Int
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the 'date-time' format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  input EventFilter {
    q: String
    ids: [Int]
    id: Int
    date: DateTime
    date_lte: DateTime
    date_gte: DateTime
    date_lt: DateTime
    date_gt: DateTime
    timeSecond: Int
    timeSecond_in: [Int]
    timeSecond_not_in: [Int]
    timeSecond_lte: Int
    timeSecond_gte: Int
    timeSecond_lt: Int
    timeSecond_gt: Int
    timeSecond_defined: Boolean
    linkToTimeSecond: String
    linkToTimeSecond_in: [String]
    linkToTimeSecond_not_in: [String]
    linkToTimeSecond_defined: Boolean
    controversialPoint: Boolean
    controversialPoint_defined: Boolean
    startControversialPoint: Int
    startControversialPoint_in: [Int]
    startControversialPoint_not_in: [Int]
    startControversialPoint_lte: Int
    startControversialPoint_gte: Int
    startControversialPoint_lt: Int
    startControversialPoint_gt: Int
    startControversialPoint_defined: Boolean
    highlight: Boolean
    highlight_defined: Boolean
    startHighlight: Int
    startHighlight_in: [Int]
    startHighlight_not_in: [Int]
    startHighlight_lte: Int
    startHighlight_gte: Int
    startHighlight_lt: Int
    startHighlight_gt: Int
    startHighlight_defined: Boolean
    order: Int
    order_in: [Int]
    order_not_in: [Int]
    order_lte: Int
    order_gte: Int
    order_lt: Int
    order_gt: Int
    eventTypeId: String
    eventTypeId_in: [String]
    eventTypeId_not_in: [String]
    videoId: Int
    videoId_in: [Int]
    videoId_not_in: [Int]
    videoId_defined: Boolean
    teamForCompetitionId: Int
    teamForCompetitionId_in: [Int]
    teamForCompetitionId_not_in: [Int]
    teamForCompetitionId_defined: Boolean
    mainPlayerId: Int
    mainPlayerId_in: [Int]
    mainPlayerId_not_in: [Int]
    mainPlayerId_defined: Boolean
    secondPlayerId: Int
    secondPlayerId_in: [Int]
    secondPlayerId_not_in: [Int]
    secondPlayerId_defined: Boolean
    firstPlayerRoleId: String
    firstPlayerRoleId_in: [String]
    firstPlayerRoleId_not_in: [String]
    firstPlayerRoleId_defined: Boolean
    secondPlayerRoleId: String
    secondPlayerRoleId_in: [String]
    secondPlayerRoleId_not_in: [String]
    secondPlayerRoleId_defined: Boolean
    periodTypeId: String
    periodTypeId_in: [String]
    periodTypeId_not_in: [String]
    periodTypeId_defined: Boolean
    matchId: Int
    matchId_in: [Int]
    matchId_not_in: [Int]
    points: Int
    points_in: [Int]
    points_not_in: [Int]
    points_lte: Int
    points_gte: Int
    points_lt: Int
    points_gt: Int
    periodNumber: Int
    periodNumber_in: [Int]
    periodNumber_not_in: [Int]
    periodNumber_lte: Int
    periodNumber_gte: Int
    periodNumber_lt: Int
    periodNumber_gt: Int
    periodNumber_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Event(id: Int!): Event
    allEvents(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: EventFilter): [Event]
    _allEventsMeta(page: Int, perPage: Int, filter: EventFilter): ListMetadata
  }

  type Mutation {
    createEvent(date: DateTime, timeSecond: Int, linkToTimeSecond: String, controversialPoint: Boolean, startControversialPoint: Int, highlight: Boolean, startHighlight: Int, order: Int!, eventTypeId: String!, videoId: Int, teamForCompetitionId: Int, mainPlayerId: Int, secondPlayerId: Int, firstPlayerRoleId: String, secondPlayerRoleId: String, periodTypeId: String, matchId: Int!, points: Int!, periodNumber: Int): Event
    updateEvent(id: Int!, date: DateTime, timeSecond: Int, linkToTimeSecond: String, controversialPoint: Boolean, startControversialPoint: Int, highlight: Boolean, startHighlight: Int, order: Int!, eventTypeId: String!, videoId: Int, teamForCompetitionId: Int, mainPlayerId: Int, secondPlayerId: Int, firstPlayerRoleId: String, secondPlayerRoleId: String, periodTypeId: String, matchId: Int!, points: Int!, periodNumber: Int): Event
    removeEvent(id: Int!): Event
    rePostEvent(id: Int!): Void
  }

  """Represents NULL values"""
  scalar Void
`;
