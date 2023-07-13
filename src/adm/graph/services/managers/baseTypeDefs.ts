/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Manager {
    id: Int!
    title: String
    lastName: String!
    firstName: String!
    languageId: String
    email: String!
    phone: String
    photoId: Int
    telegramLogin: String
    unitId: Int
    headOfUnit: Boolean!
    active: Boolean!
    tenantId: Int
  }

  input ManagerFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_defined: Boolean
    lastName: String
    lastName_in: [String]
    firstName: String
    firstName_in: [String]
    languageId: String
    languageId_in: [String]
    languageId_defined: Boolean
    email: String
    email_in: [String]
    phone: String
    phone_in: [String]
    phone_defined: Boolean
    photoId: Int
    photoId_in: [Int]
    photoId_defined: Boolean
    telegramLogin: String
    telegramLogin_in: [String]
    telegramLogin_defined: Boolean
    unitId: Int
    unitId_in: [Int]
    unitId_defined: Boolean
    headOfUnit: Boolean
    active: Boolean
    tenantId: Int
    tenantId_in: [Int]
    tenantId_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Manager(id: Int!): Manager
    allManagers(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ManagerFilter): [Manager]
    _allManagersMeta(page: Int, perPage: Int, filter: ManagerFilter): ListMetadata
  }

  type Mutation {
    createManager(title: String, lastName: String!, firstName: String!, languageId: String, email: String!, phone: String, photoId: Int, telegramLogin: String, unitId: Int, headOfUnit: Boolean!, active: Boolean!, tenantId: Int): Manager
    updateManager(id: Int!, title: String, lastName: String!, firstName: String!, languageId: String, email: String!, phone: String, photoId: Int, telegramLogin: String, unitId: Int, headOfUnit: Boolean!, active: Boolean!, tenantId: Int): Manager
    removeManager(id: Int!): Manager
  }
`;
