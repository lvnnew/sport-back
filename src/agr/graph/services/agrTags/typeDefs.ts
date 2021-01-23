import {gql} from 'apollo-server';

export default gql`
type AgrTag {
  id: Int!
  comment: String
}

input AgrTagFilter {
  q: String
  ids: [Int]
  comment: String
}

type ListMetadata {
  count: Int
}

type Query {
  AgrTag(id: Int!): AgrTag
  allAgrTags(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AgrTagFilter): [AgrTag]
  _allAgrTagsMeta(page: Int, perPage: Int, filter: AgrTagFilter): ListMetadata
}

type Mutation {
  createAgrTag(comment: String): AgrTag
  updateAgrTag(id: Int!, comment: String): AgrTag
  removeAgrTag(id: Int!): Boolean
}

`;
