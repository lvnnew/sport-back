/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Parent {
    id: Int!
    title: String
    firstname: String!
    lastname: String!
    patronymic: String
    createdByManagerId: Int!
    lastChangedByManagerId: Int
  }

  input ParentFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    firstname: String
    firstname_in: [String]
    firstname_not_in: [String]
    lastname: String
    lastname_in: [String]
    lastname_not_in: [String]
    patronymic: String
    patronymic_in: [String]
    patronymic_not_in: [String]
    patronymic_defined: Boolean
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
    Parent(id: Int!): Parent
    allParents(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ParentFilter): [Parent]
    _allParentsMeta(page: Int, perPage: Int, filter: ParentFilter): ListMetadata
  }

  type Mutation {
    createParent(title: String, firstname: String!, lastname: String!, patronymic: String, createdByManagerId: Int, lastChangedByManagerId: Int): Parent
    updateParent(id: Int!, title: String, firstname: String!, lastname: String!, patronymic: String, createdByManagerId: Int, lastChangedByManagerId: Int): Parent
    removeParent(id: Int!): Parent
  }
`;
