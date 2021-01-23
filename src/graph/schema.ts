import {mergeSchemas} from 'graphql-tools';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import {schemaBuilder} from '@instants/json-graphql-server-lib';
import {genData} from './gen/genData';

let data: ReturnType<typeof genData> | null = null;

export const getGenData = () => {
  if (!data) {
    data = genData();
  }

  return {};

  // return data;
};

const schema = mergeSchemas({
  resolvers,
  schemas: [schemaBuilder(getGenData())],
  typeDefs,
});

export default schema;
