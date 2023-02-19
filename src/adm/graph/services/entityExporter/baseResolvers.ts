import {
  Resolvers,
  MutationDownloadEntityRecordsArgs,
} from '../../../../generated/graphql';

import {Context} from '../../../services/types';

const queryResolvers: Resolvers = {
  Mutation: {
    downloadEntityRecords: (_, params: MutationDownloadEntityRecordsArgs, {context}: {context: Context}) =>
      context.service('entityExporter').downloadEntityRecords(params.entityName, params.filter),
  },
};

export default queryResolvers;
