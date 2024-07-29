import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Club {
    id: Int!
    title: String!
    createdByManagerId: Int!
    lastChangedByManagerId: Int
  }

  input ClubFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
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
    Club(id: Int!): Club
    allClubs(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ClubFilter): [Club]
    _allClubsMeta(page: Int, perPage: Int, filter: ClubFilter): ListMetadata
  }

  type Mutation {
    createClub(title: String!, createdByManagerId: Int, lastChangedByManagerId: Int): Club
    updateClub(id: Int!, title: String!, createdByManagerId: Int, lastChangedByManagerId: Int): Club
    removeClub(id: Int!): Club
  }
`;
