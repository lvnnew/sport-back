/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Competition {
    id: Int!
    title: String!
    dateOfBirthFrom: Int
    dateOfBirthTo: Int
    organizationId: Int!
    createdByManagerId: Int!
    lastChangedByManagerId: Int
  }

  input CompetitionFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    dateOfBirthFrom: Int
    dateOfBirthFrom_in: [Int]
    dateOfBirthFrom_not_in: [Int]
    dateOfBirthFrom_lte: Int
    dateOfBirthFrom_gte: Int
    dateOfBirthFrom_lt: Int
    dateOfBirthFrom_gt: Int
    dateOfBirthFrom_defined: Boolean
    dateOfBirthTo: Int
    dateOfBirthTo_in: [Int]
    dateOfBirthTo_not_in: [Int]
    dateOfBirthTo_lte: Int
    dateOfBirthTo_gte: Int
    dateOfBirthTo_lt: Int
    dateOfBirthTo_gt: Int
    dateOfBirthTo_defined: Boolean
    organizationId: Int
    organizationId_in: [Int]
    organizationId_not_in: [Int]
    createdByManagerId: Int
    createdByManagerId_in: [Int]
    createdByManagerId_not_in: [Int]
    lastChangedByManagerId: Int
    lastChangedByManagerId_in: [Int]
    lastChangedByManagerId_not_in: [Int]
    lastChangedByManagerId_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Competition(id: Int!): Competition
    allCompetitions(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: CompetitionFilter): [Competition]
    _allCompetitionsMeta(page: Int, perPage: Int, filter: CompetitionFilter): ListMetadata
  }

  type Mutation {
    createCompetition(title: String!, dateOfBirthFrom: Int, dateOfBirthTo: Int, organizationId: Int!, createdByManagerId: Int, lastChangedByManagerId: Int): Competition
    updateCompetition(id: Int!, title: String!, dateOfBirthFrom: Int, dateOfBirthTo: Int, organizationId: Int!, createdByManagerId: Int, lastChangedByManagerId: Int): Competition
    removeCompetition(id: Int!): Competition
  }
`;
