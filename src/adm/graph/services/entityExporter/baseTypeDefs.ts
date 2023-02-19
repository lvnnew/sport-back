import {gql} from 'apollo-server';

export default gql`
  type Mutation {
    downloadEntityRecords(entityName: EntityType!, filter: JSON): Void
  }
`;

