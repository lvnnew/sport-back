import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Tag {
    id: Int!
    comment: String
  }

  input TagFilter {
    q: String
    ids: [Int]
    id: Int
    comment: String
    comment_in: [String]
    comment_not_in: [String]
    comment_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Tag(id: Int!): Tag
    allTags(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: TagFilter): [Tag]
    _allTagsMeta(page: Int, perPage: Int, filter: TagFilter): ListMetadata
  }

  type Mutation {
    createTag(comment: String): Tag
    updateTag(id: Int!, comment: String): Tag
    removeTag(id: Int!): Tag
  }
`;
