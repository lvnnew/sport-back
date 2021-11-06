import {
  Resolvers,
  QueryGetHelpArgs,
} from '../../../../generated/graphql';

import {Context} from '../../../services/context';

const queryResolvers: Resolvers = {
  Query: {
    getHelp: (_, params: QueryGetHelpArgs, {context}: {context: Context}) =>
      context.help.getHelp(params.entityType),
  },
};

export default queryResolvers;
