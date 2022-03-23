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
    photo: String
    telegramLogin: String
    unitId: Int
    tenantId: Int
    headOfUnit: Boolean!
    active: Boolean!
  }

  input ManagerFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    lastName: String
    lastName_in: [String]
    firstName: String
    firstName_in: [String]
    languageId: String
    languageId_in: [String]
    email: String
    email_in: [String]
    phone: String
    phone_in: [String]
    photo: String
    photo_in: [String]
    telegramLogin: String
    telegramLogin_in: [String]
    unitId: Int
    unitId_in: [Int]
    tenantId: Int
    tenantId_in: [Int]
    headOfUnit: Boolean
    active: Boolean
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
    createManager(title: String, lastName: String!, firstName: String!, languageId: String, email: String!, phone: String, photo: String, telegramLogin: String, unitId: Int, tenantId: Int, headOfUnit: Boolean!, active: Boolean!): Manager
    updateManager(id: Int!, title: String, lastName: String!, firstName: String!, languageId: String, email: String!, phone: String, photo: String, telegramLogin: String, unitId: Int, tenantId: Int, headOfUnit: Boolean!, active: Boolean!): Manager
    removeManager(id: Int!): Manager
  }
`;
