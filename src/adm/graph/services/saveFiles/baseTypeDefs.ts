import {gql} from 'apollo-server';

export default gql`
  scalar Upload

  type FileRes {
    id: Int!
    url: String!
  }

  type Mutation {
    saveFiles(files: [Upload!]!): [FileRes!]!,
    saveFile(file: Upload!): FileRes!,
  }
`;
