import {gql} from 'apollo-server';

export default gql`
type AgrTag {
  id: ID!
  comment: String
}

input AgrTagFilter {
  q: String
  ids: [ID]
  comment: String
}

type ListMetadata {
  count: Int
}

type Query {
  AgrTag(id: ID!): AgrTag
  allAgrTags(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AgrTagFilter): [AgrTag]
  _allAgrTagsMeta(page: Int, perPage: Int, filter: AgrTagFilter): ListMetadata
}

type Mutation {
  createAgrTag(id: ID!, comment: String): AgrTag
  updateAgrTag(id: ID!, comment: String): AgrTag
  removeAgrTag(id: ID!): Boolean
}

`;
