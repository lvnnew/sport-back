/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type TeamForCompetition {
    id: Int!
    title: String!
    fullTitle: String
    teamId: Int!
    competitionId: Int!
  }

  input TeamForCompetitionFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    fullTitle: String
    fullTitle_in: [String]
    fullTitle_not_in: [String]
    fullTitle_defined: Boolean
    teamId: Int
    teamId_in: [Int]
    teamId_not_in: [Int]
    competitionId: Int
    competitionId_in: [Int]
    competitionId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    TeamForCompetition(id: Int!): TeamForCompetition
    allTeamForCompetitions(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: TeamForCompetitionFilter): [TeamForCompetition]
    _allTeamForCompetitionsMeta(page: Int, perPage: Int, filter: TeamForCompetitionFilter): ListMetadata
  }

  type Mutation {
    createTeamForCompetition(title: String!, fullTitle: String, teamId: Int!, competitionId: Int!): TeamForCompetition
    updateTeamForCompetition(id: Int!, title: String!, fullTitle: String, teamId: Int!, competitionId: Int!): TeamForCompetition
    removeTeamForCompetition(id: Int!): TeamForCompetition
  }
`;
