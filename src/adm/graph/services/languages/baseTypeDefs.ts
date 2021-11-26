import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type Language {
  id: ID!
  title: String
}

input LanguageFilter {
  q: String
  ids: [ID]
  id: ID
  title: String
  title_in: [String]
}

type ListMetadata {
  count: Int
}

type Query {
  Language(id: ID!): Language
  allLanguages(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: LanguageFilter): [Language]
  _allLanguagesMeta(page: Int, perPage: Int, filter: LanguageFilter): ListMetadata
}

type Mutation {
  createLanguage(id: ID!, title: String): Language
  updateLanguage(id: ID!, title: String): Language
  removeLanguage(id: ID!): Boolean
}
`;
