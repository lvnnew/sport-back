import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type TemplateStyle {
    id: Int!
    title: String!
    style: String!
  }

  input TemplateStyleFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    style: String
    style_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    TemplateStyle(id: Int!): TemplateStyle
    allTemplateStyles(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: TemplateStyleFilter): [TemplateStyle]
    _allTemplateStylesMeta(page: Int, perPage: Int, filter: TemplateStyleFilter): ListMetadata
  }

  type Mutation {
    createTemplateStyle(title: String!, style: String!): TemplateStyle
    updateTemplateStyle(id: Int!, title: String!, style: String!): TemplateStyle
    removeTemplateStyle(id: Int!): TemplateStyle
  }
`;
