import {gql} from 'apollo-server';

export default gql`
  type Mutation {
    sendEmailDebug(
      messageTemplate: String!,
      managerId: Int,
      locals: JSON!,
    ): Void
  }
`;
