import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type TeamMatchList {
    id: Int!
    matchId: Int!
    teamForCompetitionId: Int!
  }

  input TeamMatchListFilter {
    q: String
    ids: [Int]
    id: Int
    matchId: Int
    matchId_in: [Int]
    matchId_not_in: [Int]
    teamForCompetitionId: Int
    teamForCompetitionId_in: [Int]
    teamForCompetitionId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    TeamMatchList(id: Int!): TeamMatchList
    allTeamMatchLists(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: TeamMatchListFilter): [TeamMatchList]
    _allTeamMatchListsMeta(page: Int, perPage: Int, filter: TeamMatchListFilter): ListMetadata
  }

  type Mutation {
    createTeamMatchList(matchId: Int!, teamForCompetitionId: Int!): TeamMatchList
    updateTeamMatchList(id: Int!, matchId: Int!, teamForCompetitionId: Int!): TeamMatchList
    removeTeamMatchList(id: Int!): TeamMatchList
  }
`;
