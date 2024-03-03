import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type File {
    id: Int!
    originalName: String!
    url: String!
    mimetype: String!
    s3Key: String!
    eTag: String!
    bytes: Int
  }

  input FileFilter {
    q: String
    ids: [Int]
    id: Int
    originalName: String
    originalName_in: [String]
    originalName_not_in: [String]
    url: String
    url_in: [String]
    url_not_in: [String]
    mimetype: String
    mimetype_in: [String]
    mimetype_not_in: [String]
    s3Key: String
    s3Key_in: [String]
    s3Key_not_in: [String]
    eTag: String
    eTag_in: [String]
    eTag_not_in: [String]
    bytes: Int
    bytes_in: [Int]
    bytes_not_in: [Int]
    bytes_lte: Int
    bytes_gte: Int
    bytes_lt: Int
    bytes_gt: Int
    bytes_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    File(id: Int!): File
    allFiles(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: FileFilter): [File]
    _allFilesMeta(page: Int, perPage: Int, filter: FileFilter): ListMetadata
  }

  type Mutation {
    createFile(originalName: String!, url: String!, mimetype: String!, s3Key: String!, eTag: String!, bytes: Int): File
    updateFile(id: Int!, originalName: String!, url: String!, mimetype: String!, s3Key: String!, eTag: String!, bytes: Int): File
    removeFile(id: Int!): File
  }
`;
