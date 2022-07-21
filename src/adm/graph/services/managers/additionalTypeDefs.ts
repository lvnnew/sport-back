import {gql} from 'apollo-server';

export default gql`
  type Mutation {
    newManager(firstName: String!, lastName: String!, email: String!, password: String!, roles: [String!]): Void
    deactivateManagers(managerIds: [Int!]!): Void
    changePasswordByManagerId(managerId: Int!, password: String!): Void
  }
`;
