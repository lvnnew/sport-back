/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type EventType {
    id: ID!
    title: String!
    points: Int!
    eventTypeCategoryId: String
    order: Int
    showInTranslationMode: Boolean
    needForSecondPlayer: Boolean
    dependsOnPoint: Boolean
    redCard: Boolean
    yellowCard: Boolean
    calculateBlock: Boolean
    calculateTakeaway: Boolean
    calculateSelection: Boolean
    calculateInterseption: Boolean
    calculateGuardian: Boolean
    calculatePositionError: Boolean
    calculateGrossError: Boolean
    calculatePositiveDribling: Boolean
    calculateNegativeDribling: Boolean
    calculatePositiveSgm: Boolean
    calculateNegativeSgm: Boolean
    calculatePositiveRgm: Boolean
    calculateNegativeRgm: Boolean
    calculateLosses: Boolean
    calculateGegenPressing: Boolean
    calculatePressing: Boolean
    calculateSaveBall: Boolean
    calculatePositiveTransfer: Boolean
    calculateNegativeTransfer: Boolean
    calculateHit: Boolean
    calculateHitTarget: Boolean
    calculateCorner: Boolean
    calculateFoul: Boolean
    calculateOffside: Boolean
  }

  input EventTypeFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_not_in: [String]
    points: Int
    points_in: [Int]
    points_not_in: [Int]
    points_lte: Int
    points_gte: Int
    points_lt: Int
    points_gt: Int
    eventTypeCategoryId: String
    eventTypeCategoryId_in: [String]
    eventTypeCategoryId_not_in: [String]
    eventTypeCategoryId_defined: Boolean
    order: Int
    order_in: [Int]
    order_not_in: [Int]
    order_lte: Int
    order_gte: Int
    order_lt: Int
    order_gt: Int
    order_defined: Boolean
    showInTranslationMode: Boolean
    showInTranslationMode_defined: Boolean
    needForSecondPlayer: Boolean
    needForSecondPlayer_defined: Boolean
    dependsOnPoint: Boolean
    dependsOnPoint_defined: Boolean
    redCard: Boolean
    redCard_defined: Boolean
    yellowCard: Boolean
    yellowCard_defined: Boolean
    calculateBlock: Boolean
    calculateBlock_defined: Boolean
    calculateTakeaway: Boolean
    calculateTakeaway_defined: Boolean
    calculateSelection: Boolean
    calculateSelection_defined: Boolean
    calculateInterseption: Boolean
    calculateInterseption_defined: Boolean
    calculateGuardian: Boolean
    calculateGuardian_defined: Boolean
    calculatePositionError: Boolean
    calculatePositionError_defined: Boolean
    calculateGrossError: Boolean
    calculateGrossError_defined: Boolean
    calculatePositiveDribling: Boolean
    calculatePositiveDribling_defined: Boolean
    calculateNegativeDribling: Boolean
    calculateNegativeDribling_defined: Boolean
    calculatePositiveSgm: Boolean
    calculatePositiveSgm_defined: Boolean
    calculateNegativeSgm: Boolean
    calculateNegativeSgm_defined: Boolean
    calculatePositiveRgm: Boolean
    calculatePositiveRgm_defined: Boolean
    calculateNegativeRgm: Boolean
    calculateNegativeRgm_defined: Boolean
    calculateLosses: Boolean
    calculateLosses_defined: Boolean
    calculateGegenPressing: Boolean
    calculateGegenPressing_defined: Boolean
    calculatePressing: Boolean
    calculatePressing_defined: Boolean
    calculateSaveBall: Boolean
    calculateSaveBall_defined: Boolean
    calculatePositiveTransfer: Boolean
    calculatePositiveTransfer_defined: Boolean
    calculateNegativeTransfer: Boolean
    calculateNegativeTransfer_defined: Boolean
    calculateHit: Boolean
    calculateHit_defined: Boolean
    calculateHitTarget: Boolean
    calculateHitTarget_defined: Boolean
    calculateCorner: Boolean
    calculateCorner_defined: Boolean
    calculateFoul: Boolean
    calculateFoul_defined: Boolean
    calculateOffside: Boolean
    calculateOffside_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    EventType(id: ID!): EventType
    allEventTypes(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: EventTypeFilter): [EventType]
    _allEventTypesMeta(page: Int, perPage: Int, filter: EventTypeFilter): ListMetadata
  }

  type Mutation {
    createEventType(id: ID!, title: String!, points: Int!, eventTypeCategoryId: String, order: Int, showInTranslationMode: Boolean, needForSecondPlayer: Boolean, dependsOnPoint: Boolean, redCard: Boolean, yellowCard: Boolean, calculateBlock: Boolean, calculateTakeaway: Boolean, calculateSelection: Boolean, calculateInterseption: Boolean, calculateGuardian: Boolean, calculatePositionError: Boolean, calculateGrossError: Boolean, calculatePositiveDribling: Boolean, calculateNegativeDribling: Boolean, calculatePositiveSgm: Boolean, calculateNegativeSgm: Boolean, calculatePositiveRgm: Boolean, calculateNegativeRgm: Boolean, calculateLosses: Boolean, calculateGegenPressing: Boolean, calculatePressing: Boolean, calculateSaveBall: Boolean, calculatePositiveTransfer: Boolean, calculateNegativeTransfer: Boolean, calculateHit: Boolean, calculateHitTarget: Boolean, calculateCorner: Boolean, calculateFoul: Boolean, calculateOffside: Boolean): EventType
    updateEventType(id: ID!, title: String!, points: Int!, eventTypeCategoryId: String, order: Int, showInTranslationMode: Boolean, needForSecondPlayer: Boolean, dependsOnPoint: Boolean, redCard: Boolean, yellowCard: Boolean, calculateBlock: Boolean, calculateTakeaway: Boolean, calculateSelection: Boolean, calculateInterseption: Boolean, calculateGuardian: Boolean, calculatePositionError: Boolean, calculateGrossError: Boolean, calculatePositiveDribling: Boolean, calculateNegativeDribling: Boolean, calculatePositiveSgm: Boolean, calculateNegativeSgm: Boolean, calculatePositiveRgm: Boolean, calculateNegativeRgm: Boolean, calculateLosses: Boolean, calculateGegenPressing: Boolean, calculatePressing: Boolean, calculateSaveBall: Boolean, calculatePositiveTransfer: Boolean, calculateNegativeTransfer: Boolean, calculateHit: Boolean, calculateHitTarget: Boolean, calculateCorner: Boolean, calculateFoul: Boolean, calculateOffside: Boolean): EventType
    removeEventType(id: ID!): EventType
  }
`;
