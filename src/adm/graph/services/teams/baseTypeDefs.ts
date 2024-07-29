/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Team {
    id: Int!
    title: String!
    dateOfBirthFrom: Int!
    dateOfBirthTo: Int
    createdByManagerId: Int!
    lastChangedByManagerId: Int
    clubId: Int!
    fileId: Int
  }

  input TeamFilter {
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
    dateOfBirthTo: Int
    dateOfBirthTo_in: [Int]
    dateOfBirthTo_not_in: [Int]
    dateOfBirthTo_lte: Int
    dateOfBirthTo_gte: Int
    dateOfBirthTo_lt: Int
    dateOfBirthTo_gt: Int
    dateOfBirthTo_defined: Boolean
    createdByManagerId: Int
    createdByManagerId_in: [Int]
    createdByManagerId_not_in: [Int]
    lastChangedByManagerId: Int
    lastChangedByManagerId_in: [Int]
    lastChangedByManagerId_not_in: [Int]
    lastChangedByManagerId_defined: Boolean
    clubId: Int
    clubId_in: [Int]
    clubId_not_in: [Int]
    fileId: Int
    fileId_in: [Int]
    fileId_not_in: [Int]
    fileId_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Team(id: Int!): Team
    allTeams(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: TeamFilter): [Team]
    _allTeamsMeta(page: Int, perPage: Int, filter: TeamFilter): ListMetadata
  }

  type Mutation {
    createTeam(title: String!, dateOfBirthFrom: Int!, dateOfBirthTo: Int, createdByManagerId: Int, lastChangedByManagerId: Int, clubId: Int!, fileId: Int): Team
    updateTeam(id: Int!, title: String!, dateOfBirthFrom: Int!, dateOfBirthTo: Int, createdByManagerId: Int, lastChangedByManagerId: Int, clubId: Int!, fileId: Int): Team
    removeTeam(id: Int!): Team
  }
`;
