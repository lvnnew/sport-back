import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type Unit {
  id: Int!
  title: String
  parentId: Int
}

input UnitFilter {
  q: String
  ids: [Int]
  id: Int
  title: String
  title_in: [String]
  parentId: Int
  parentId_in: [Int]
}

type ListMetadata {
  count: Int
}

type Query {
  Unit(id: Int!): Unit
  allUnits(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: UnitFilter): [Unit]
  _allUnitsMeta(page: Int, perPage: Int, filter: UnitFilter): ListMetadata
}

type Mutation {
  createUnit(title: String, parentId: Int): Unit
  updateUnit(id: Int!, title: String, parentId: Int): Unit
  removeUnit(id: Int!): Boolean
}

`;
