/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ManagerLogin {
    id: Int!
    managerLoginTypeId: String!
    login: String!
    passwordHash: String
    emailVerified: Boolean
    locked: Boolean!
    managerId: Int!
  }

  input ManagerLoginFilter {
    q: String
    ids: [Int]
    id: Int
    managerLoginTypeId: String
    managerLoginTypeId_in: [String]
    managerLoginTypeId_not_in: [String]
    login: String
    login_in: [String]
    login_not_in: [String]
    passwordHash: String
    passwordHash_in: [String]
    passwordHash_not_in: [String]
    passwordHash_defined: Boolean
    emailVerified: Boolean
    emailVerified_defined: Boolean
    locked: Boolean
    managerId: Int
    managerId_in: [Int]
    managerId_not_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    ManagerLogin(id: Int!): ManagerLogin
    allManagerLogins(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ManagerLoginFilter): [ManagerLogin]
    _allManagerLoginsMeta(page: Int, perPage: Int, filter: ManagerLoginFilter): ListMetadata
  }

  type Mutation {
    createManagerLogin(managerLoginTypeId: String!, login: String!, passwordHash: String, emailVerified: Boolean, locked: Boolean!, managerId: Int!): ManagerLogin
    updateManagerLogin(id: Int!, managerLoginTypeId: String!, login: String!, passwordHash: String, emailVerified: Boolean, locked: Boolean!, managerId: Int!): ManagerLogin
    removeManagerLogin(id: Int!): ManagerLogin
  }
`;
